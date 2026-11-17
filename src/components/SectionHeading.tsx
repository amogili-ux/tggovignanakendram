import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-saffron-600">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <div className="mt-5 text-base leading-relaxed text-charcoal-600 sm:text-lg">{description}</div>}
    </div>
  );
}
