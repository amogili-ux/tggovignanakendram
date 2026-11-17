import { ArrowLeft, FileText } from 'lucide-react';
import PlaceholderNote from '@/components/PlaceholderNote';
import Reveal from '@/components/Reveal';
import { legalDocuments } from '@/data/legal';

type DocumentPageProps = {
  slug: string;
};

export default function DocumentPage({ slug }: DocumentPageProps) {
  const document = legalDocuments.find((item) => item.slug === slug);

  if (!document) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="text-4xl">Document not found</h1>
        <p className="mt-4 text-charcoal-600">The page you are looking for is not available.</p>
        <a href="#/" className="btn-primary mt-8">
          Return to home
        </a>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <a href="#/" className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900">
        <ArrowLeft className="h-4 w-4" /> Back to home
      </a>
      <Reveal className="mt-8 space-y-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-600">
          <FileText className="h-6 w-6" />
        </span>
        <h1 className="text-4xl sm:text-5xl">{document.title}</h1>
        <p className="text-lg leading-relaxed text-charcoal-600">{document.intro}</p>
        <PlaceholderNote text="Draft content, to be reviewed and approved before publication" />
      </Reveal>
      <div className="mt-12 space-y-10">
        {document.sections.map((section) => (
          <Reveal key={section.heading} className="space-y-3 border-t border-ivory-300 pt-8">
            <h2 className="text-2xl sm:text-3xl">{section.heading}</h2>
            <p className="leading-relaxed text-charcoal-700">{section.body}</p>
          </Reveal>
        ))}
      </div>
    </article>
  );
}
