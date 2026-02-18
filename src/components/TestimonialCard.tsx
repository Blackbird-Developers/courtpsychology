interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  firm?: string;
}

export function TestimonialCard({ quote, author, role, firm }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl border border-grey p-8 relative">
      {/* Quote mark */}
      <svg 
        className="absolute top-6 right-6 w-10 h-10 text-navy/5" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      
      <p className="text-navy/70 leading-relaxed mb-6 relative z-10">
        &ldquo;{quote}&rdquo;
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center">
          <span className="text-navy font-semibold text-lg">
            {author.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <p className="font-semibold text-navy">{author}</p>
          <p className="text-sm text-navy/60">
            {role}{firm && `, ${firm}`}
          </p>
        </div>
      </div>
    </div>
  );
}
