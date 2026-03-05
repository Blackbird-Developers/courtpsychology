import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, organisation, role, caseType, urgency, message } = body;

    if (!name || !email || !caseType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY env var');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly at info@expertreports.ie.' },
        { status: 500 }
      );
    }

    const caseTypeLabels: Record<string, string> = {
      criminal: 'Criminal Court Assessment',
      family: 'Family Law Report',
      medicolegal: 'Medico-Legal Report',
      risk: 'Forensic Risk Assessment',
      parenting: 'Parenting Capacity Assessment',
      employment: 'Workplace/Employment',
      other: 'Other / Not Sure',
    };

    const urgencyLabels: Record<string, string> = {
      standard: 'Standard (28 days)',
      priority: 'Priority (21 days)',
      urgent: 'Urgent (discuss timeline)',
      undecided: 'Not yet determined',
    };

    const htmlBody = `
      <h2>New Enquiry from ${name}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone || 'Not provided'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Organisation</td><td style="padding:8px;border-bottom:1px solid #eee;">${organisation || 'Not provided'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Role</td><td style="padding:8px;border-bottom:1px solid #eee;">${role || 'Not provided'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Assessment Type</td><td style="padding:8px;border-bottom:1px solid #eee;">${caseTypeLabels[caseType] || caseType}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Timeline</td><td style="padding:8px;border-bottom:1px solid #eee;">${urgencyLabels[urgency] || urgency || 'Not specified'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Case Details</td><td style="padding:8px;border-bottom:1px solid #eee;">${message}</td></tr>
      </table>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || 'onboarding@resend.dev',
        to: 'evan@expertreports.ie',
        reply_to: email,
        subject: `New Enquiry: ${caseTypeLabels[caseType] || caseType} — ${name}`,
        html: htmlBody,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Resend API error:', data);
      return NextResponse.json(
        { error: `Failed to send enquiry: ${data.message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Contact form error:', errorMessage);
    return NextResponse.json(
      { error: `Failed to send enquiry: ${errorMessage}` },
      { status: 500 }
    );
  }
}
