import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, image, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-900">
      <img src={image} alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-900 via-forest-900/85 to-forest-900/40" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-saffron-300">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl text-ivory-50 sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-200/90 sm:text-lg">{description}</p>
        {children && <div className="mt-10 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}
