import { BookOpen, Languages } from 'lucide-react';
import PageHero from '@/components/PageHero';
import PlaceholderNote from '@/components/PlaceholderNote';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { gosevaImage } from '@/data/site';

const articles = [
  { title: 'Why cows hold a sacred place in Indian tradition', category: 'Cultural Heritage' },
  { title: 'Goseva: the everyday practice of service', category: 'Goseva' },
  { title: 'Responsible care for cattle and calves', category: 'Cow Welfare' },
  { title: 'Compassion and ethical treatment of animals', category: 'Compassionate Living' },
  { title: 'Cows and the environment', category: 'Environmental Awareness' },
  { title: 'Community responsibility for animal welfare', category: 'Community' },
];

export default function GosevaPage() {
  return (
    <>
      <PageHero
        eyebrow="Goseva and Scriptures"
        title="The cultural, spiritual and ethical meaning of caring for cows"
        description="Explore why Goseva has been honoured in Indian society for generations, and how compassionate care for animals is part of everyday life."
        image={gosevaImage}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <Reveal className="space-y-6">
          <h2 className="text-4xl">The importance of Goseva</h2>
          <p className="text-lg leading-relaxed text-charcoal-600">
            Goseva means serving and caring for cows. In Indian traditions, cows are revered for their gentleness and the
            nourishment they give, and caring for them is considered an act of duty, gratitude and compassion.
          </p>
          <p className="text-lg leading-relaxed text-charcoal-600">
            The Trust invites families, students and volunteers to take part in this service through feeding, cleaning,
            health care and learning.
          </p>
        </Reveal>
        <Reveal delay={120} className="card space-y-5 p-8">
          <h3 className="text-2xl">Cow welfare and compassionate living</h3>
          <ul className="space-y-3 text-charcoal-700">
            <li>Compassion towards every animal, including the sick and the old.</li>
            <li>Responsible animal care: clean water, good fodder and safe shelter.</li>
            <li>Ethical treatment and timely veterinary attention.</li>
            <li>Community responsibility for the animals around us.</li>
            <li>Environmental awareness, including waste management and water conservation.</li>
          </ul>
        </Reveal>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Scriptures and References"
              title="References from scripture and tradition"
              description={
                <span className="flex flex-col items-center gap-3">
                  Scriptural quotations will be added with their sources, translations and original references, after
                  review.
                  <PlaceholderNote text="Quotations and sources pending review" />
                </span>
              }
            />
          </Reveal>
          <Reveal className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {['Source', 'Translation', 'Reference'].map((label) => (
              <div key={label} className="card p-6 text-center text-sm text-charcoal-600">
                <p className="font-semibold text-forest-700">{label}</p>
                <p className="mt-2">To be added</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading eyebrow="Educational Articles" title="Read, learn and share" />
        </Reveal>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-charcoal-600">
          <span className="inline-flex items-center gap-2 rounded-full bg-forest-50 px-4 py-2 text-forest-700">
            <Languages className="h-4 w-4" /> English
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-forest-50 px-4 py-2 text-forest-700">
            <Languages className="h-4 w-4" /> Telugu
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-forest-50 px-4 py-2 text-forest-700">
            <Languages className="h-4 w-4" /> Hindi
          </span>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal key={article.title} delay={index * 60}>
              <article className="card flex h-full flex-col gap-4 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-saffron-50 text-saffron-700">
                  <BookOpen className="h-5 w-5" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-saffron-600">{article.category}</p>
                <h3 className="text-2xl">{article.title}</h3>
                <div className="mt-auto pt-2">
                  <PlaceholderNote text="Article in preparation" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
