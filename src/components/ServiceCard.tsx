import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  features?: string[];
}

export function ServiceCard({ icon, title, description, href, features }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl border border-grey p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-teal/30"
    >
      <div className="w-14 h-14 rounded-lg bg-navy/5 flex items-center justify-center text-teal mb-6 group-hover:bg-teal group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">
        {title}
      </h3>
      
      <p className="text-navy/60 leading-relaxed mb-4">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-navy/70">
              <svg className="w-4 h-4 text-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <div className="flex items-center gap-2 text-teal font-semibold text-sm group-hover:gap-3 transition-all">
        <span>Learn more</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}
