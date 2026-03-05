import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

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

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@expertreports.ie',
      to: 'info@expertreports.ie',
      replyTo: email,
      subject: `New Enquiry: ${caseTypeLabels[caseType] || caseType} — ${name}`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send enquiry. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
