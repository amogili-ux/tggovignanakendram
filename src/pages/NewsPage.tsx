import { useMemo, useState } from 'react';
import { CalendarDays, MapPin, Play } from 'lucide-react';
import PageHero from '@/components/PageHero';
import PlaceholderNote from '@/components/PlaceholderNote';
import Reveal from '@/components/Reveal';
import { newsCategories, newsItems, type NewsCategory } from '@/data/news';
import { heroImage } from '@/data/site';

type Filter = NewsCategory | 'All';

const upcomingEvents = [
  { title: 'Community Goseva Day', detail: 'Date, time and location to be announced' },
  { title: 'Awareness Session for Schools', detail: 'Date and venue to be announced' },
  { title: 'Veterinary Camp', detail: 'Date and venue to be announced' },
];

export default function NewsPage() {
  const [filter, setFilter] = useState<Filter>('All');
  const visible = useMemo(
    () => (filter === 'All' ? newsItems : newsItems.filter((item) => item.category === filter)),
    [filter],
  );
  const filters: Filter[] = ['All', ...newsCategories];

  return (
    <>
      <PageHero
        eyebrow="News and Events"
        title="Rescue stories, Goseva activities and community events"
        description="Keep up with rescue and rehabilitation updates, Goseva programmes, awareness campaigns and organisational announcements."
        image={heroImage}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-wrap gap-3" role="group" aria-label="Filter news by category">
          {filters.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              aria-pressed={filter === option}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition duration-200 ${
                filter === option
                  ? 'border-forest-600 bg-forest-600 text-ivory-50'
                  : 'border-ivory-300 bg-white text-charcoal-700 hover:border-forest-400 hover:text-forest-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, index) => (
            <Reveal key={item.id} delay={index * 60}>
              <article className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wider text-saffron-600">
                    <span>{item.category}</span>
                    <span className="flex items-center gap-1.5 text-charcoal-500">
                      <CalendarDays className="h-3.5 w-3.5" /> {item.date}
                    </span>
                  </div>
                  <h2 className="text-2xl">{item.title}</h2>
                  <p className="text-sm leading-relaxed text-charcoal-600">{item.excerpt}</p>
                  <div className="mt-auto pt-2">
                    <PlaceholderNote text="Sample entry, replace with verified content" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {visible.length === 0 && <p className="mt-12 text-center text-charcoal-600">No updates in this category yet.</p>}
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="space-y-6">
            <h2 className="text-4xl">Upcoming events</h2>
            <ul className="space-y-4">
              {upcomingEvents.map((event) => (
                <li key={event.title} className="card flex gap-4 p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest-600">
                    <CalendarDays className="h-5 w-5" />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-xl">{event.title}</h3>
                    <p className="flex items-center gap-2 text-sm text-charcoal-600">
                      <MapPin className="h-3.5 w-3.5" /> {event.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="space-y-6">
            <h2 className="text-4xl">Videos</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Rescue videos', 'Goseva activities', 'Shelter tour', 'Project updates'].map((label) => (
                <div key={label} className="flex aspect-video flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-forest-300 bg-forest-50 p-4 text-center">
                  <Play className="h-8 w-8 text-forest-500" />
                  <p className="font-semibold text-forest-700">{label}</p>
                  <PlaceholderNote text="Coming soon" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
