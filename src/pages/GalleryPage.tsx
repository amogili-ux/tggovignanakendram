import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { galleryCategories, galleryImages, heroImage } from '@/data/site';

type Filter = (typeof galleryCategories)[number] | 'All';

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === 'All' ? galleryImages : galleryImages.filter((image) => image.category === filter)),
    [filter],
  );
  const filters: Filter[] = ['All', ...galleryCategories];
  const current = openIndex !== null ? visible[openIndex] : null;

  const step = (delta: number) => {
    setOpenIndex((index) => (index === null ? null : (index + delta + visible.length) % visible.length));
  };

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenIndex(null);
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex, visible.length]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Authentic moments from the gaushala"
        description="Photographs of rescue, shelter, feeding, veterinary care, rehabilitation, Goseva and the volunteers who make it possible."
        image={heroImage}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex gap-3 overflow-x-auto pb-2" role="group" aria-label="Filter photos by category">
          {filters.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setFilter(option);
                setOpenIndex(null);
              }}
              aria-pressed={filter === option}
              className={`shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition duration-200 ${
                filter === option
                  ? 'border-forest-600 bg-forest-600 text-ivory-50'
                  : 'border-ivory-300 bg-white text-charcoal-700 hover:border-forest-400 hover:text-forest-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {visible.map((image, index) => (
            <Reveal key={image.src} delay={(index % 6) * 50} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Open photo: ${image.alt}`}
                className="group relative block w-full overflow-hidden rounded-2xl bg-ivory-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-forest-300"
              >
                <img src={image.src} alt={image.alt} loading="lazy" className="w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-900/85 to-transparent p-4 text-left text-sm font-medium text-ivory-50 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {image.category}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {current && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-900/95 p-4"
          onClick={() => setOpenIndex(null)}
        >
          <img src={current.src} alt={current.alt} className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl" onClick={(event) => event.stopPropagation()} />
          <p className="absolute bottom-6 left-1/2 max-w-[90%] -translate-x-1/2 text-center text-sm text-ivory-200">
            {current.alt} · {openIndex + 1} of {visible.length}
          </p>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setOpenIndex(null);
            }}
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-ivory-50/10 text-ivory-50 transition hover:bg-ivory-50/20"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ivory-50/10 text-ivory-50 transition hover:bg-ivory-50/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ivory-50/10 text-ivory-50 transition hover:bg-ivory-50/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
