import { ArrowRight, CheckCircle2 } from 'lucide-react';
import InitiativeIcon from '@/components/InitiativeIcon';
import PageHero from '@/components/PageHero';
import PlaceholderNote from '@/components/PlaceholderNote';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { galleryImages, initiatives, heroImage } from '@/data/site';

export default function InitiativesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Initiatives"
        title="Every activity is designed around the wellbeing of each cow"
        description="Explore how rescue, shelter, veterinary care, rehabilitation, sponsorship and awareness work together, and how your support makes each one possible."
        image={heroImage}
      >
        <a href="#/donate" className="btn-accent">
          Support Our Work
        </a>
        <a href="#/contact?type=volunteer" className="btn-outline !border-ivory-50 !text-ivory-50 hover:!bg-ivory-50 hover:!text-forest-800">
          Volunteer With Us
        </a>
      </PageHero>

      <div className="mx-auto max-w-7xl space-y-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {initiatives.map((item, index) => (
          <Reveal key={item.id}>
            <article className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
              />
              <div className="space-y-6">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-50 text-forest-600">
                  <InitiativeIcon name={item.icon} className="h-7 w-7" />
                </span>
                <h2 className="text-4xl">{item.title}</h2>
                <p className="text-lg leading-relaxed text-charcoal-600">{item.description}</p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-xl">Objectives</h3>
                    <ul className="space-y-2">
                      {item.objectives.map((objective) => (
                        <li key={objective} className="flex gap-2 text-sm text-charcoal-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" />
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl">Beneficiaries</h3>
                    <p className="text-sm text-charcoal-700">{item.beneficiaries}</p>
                    <div className="mt-4">
                      <PlaceholderNote text="Impact figures pending verification" />
                    </div>
                  </div>
                </div>
                <a href="#/donate" className="btn-primary">
                  Support This Initiative <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Cow Adoption and Sponsorship"
              title="Sponsor a cow or enquire about adoption"
              description="Sponsors help fund the daily food and medical care of an individual cow and receive periodic care updates. Adoption enquiries are reviewed by the Trust."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[galleryImages[4], galleryImages[7], galleryImages[6]].map((photo, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="card overflow-hidden">
                  <img src={photo.src} alt="Cow in the Trust’s care" loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <div className="space-y-3 p-6">
                    <p className="text-sm text-charcoal-600">Profile details, care needs and sponsorship options to be verified.</p>
                    <a href="#/contact?type=adoption" className="btn-primary w-full !py-2.5 text-sm">
                      Sponsor a Cow
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <Reveal>
          <h2 className="text-4xl">Goseva and awareness programmes</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-600">
            Community Goseva days, school education programmes, awareness campaigns and cultural events bring families and
            volunteers into the life of the gaushala.
          </p>
          <a href="#/goseva" className="mt-8 inline-flex items-center gap-2 font-semibold text-forest-700 hover:text-forest-900">
            Explore Goseva and Scriptures <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </section>
    </>
  );
}
