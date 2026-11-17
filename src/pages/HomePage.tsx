import { ArrowRight, CalendarDays, Heart, ShieldCheck } from 'lucide-react';
import InitiativeIcon from '@/components/InitiativeIcon';
import PlaceholderNote from '@/components/PlaceholderNote';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { aboutImage, csrImage, galleryImages, heroImage, initiatives, donationPurposes, suggestedAmounts } from '@/data/site';
import { newsItems } from '@/data/news';

const impactStats = [
  'Total cows rescued',
  'Total cows under care',
  'Daily fodder distributed',
  'Veterinary treatments provided',
  'Rehabilitation cases completed',
  'Active volunteers',
];

const testimonials = [
  { role: 'Donor', quote: 'Verified testimonial from a donor will appear here.' },
  { role: 'Volunteer', quote: 'Verified testimonial from a volunteer will appear here.' },
  { role: 'CSR partner', quote: 'Verified testimonial from a CSR partner will appear here.' },
];

const sponsorProfiles = [
  { image: galleryImages[4].src, name: 'Cow profile to be added' },
  { image: galleryImages[5].src, name: 'Cow profile to be added' },
  { image: galleryImages[7].src, name: 'Cow profile to be added' },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-forest-900">
        <img
          src={heroImage}
          alt="Cows resting peacefully in a gaushala"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-900 via-forest-900/70 to-forest-900/25" />
        <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-saffron-300">
              Goseva · Cow Protection · Animal Welfare
            </p>
            <h1 className="text-5xl text-ivory-50 sm:text-6xl lg:text-7xl">
              Serving Cows. Preserving Culture. Spreading Compassion.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-200/90 sm:text-lg">
              Telangana Govignanakedram is dedicated to protecting, nurturing and caring for cows in need through Goseva,
              rescue, rehabilitation, nourishment and compassionate service.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#/donate" className="btn-accent">
                <Heart className="h-4 w-4" /> Donate Now
              </a>
              <a
                href="#/initiatives"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ivory-50/80 px-6 py-3 text-base font-semibold text-ivory-50 transition duration-300 hover:-translate-y-0.5 hover:bg-ivory-50 hover:text-forest-800"
              >
                Explore Our Initiatives
              </a>
              <a
                href="#/csr"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-saffron-300 px-6 py-3 text-base font-semibold text-saffron-100 transition duration-300 hover:-translate-y-0.5 hover:bg-saffron-300 hover:text-charcoal-800"
              >
                Corporate Partnerships / CSR
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-ivory-300 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm text-charcoal-700 sm:px-6 md:grid-cols-3 lg:px-8">
          <p className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 shrink-0 text-forest-600" /> Transparent use of every contribution
          </p>
          <p className="flex items-center gap-3">
            <Heart className="h-5 w-5 shrink-0 text-forest-600" /> Care for indigenous cows and calves
          </p>
          <a href="#/legal/financial-transparency" className="flex items-center gap-3 font-medium text-forest-700 hover:text-forest-900">
            <ArrowRight className="h-5 w-5 shrink-0" /> View financial transparency
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <Reveal>
          <img
            src={aboutImage}
            alt="A cow standing in a green field"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
            loading="lazy"
          />
        </Reveal>
        <Reveal delay={120} className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-saffron-600">About the Trust</p>
          <h2 className="text-4xl sm:text-5xl">A home of care for every cow in need</h2>
          <p className="text-lg leading-relaxed text-charcoal-600">
            Rooted in the cultural and spiritual significance of cows in Indian traditions, the Trust provides shelter,
            nourishment, veterinary care and rehabilitation for cows who have been abandoned, injured or left without
            protection.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card p-6">
              <h3 className="text-2xl">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                To serve and protect cows through dedicated Goseva, rescue, rehabilitation, veterinary care, awareness and
                community participation.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-2xl">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                A compassionate society where every cow receives protection, nourishment, shelter and dignified care.
              </p>
            </div>
          </div>
          <a href="#/about" className="inline-flex items-center gap-2 font-semibold text-forest-700 hover:text-forest-900">
            Learn more about us <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </section>

      <section className="bg-ivory-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Key Initiatives"
              title="How we care for cows every day"
              description="From the first call for help to long-term recovery, each initiative is designed around the wellbeing of the animal."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((item, index) => (
              <Reveal key={item.id} delay={index * 80}>
                <article className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-xl">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-50 text-forest-600">
                      <InitiativeIcon name={item.icon} />
                    </span>
                    <h3 className="text-2xl">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-charcoal-600">{item.short}</p>
                    <a href="#/initiatives" className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-forest-700 hover:text-forest-900">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Our Impact"
            title="Numbers we can stand behind"
            description={
              <span className="flex flex-col items-center gap-3">
                Verified statistics will be published here. We do not display estimates.
                <PlaceholderNote text="Figures pending verification" />
              </span>
            }
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-3">
          {impactStats.map((label, index) => (
            <Reveal key={label} delay={index * 60}>
              <div className="card flex h-full flex-col items-center justify-center p-8 text-center">
                <p className="font-serif text-5xl font-semibold text-forest-600">—</p>
                <p className="mt-3 text-sm font-medium text-charcoal-600">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Cow Adoption and Sponsorship"
              title="Sponsor the care of a cow"
              description="Featured cow profiles, with photographs, identification numbers, age and care requirements, will be shown here as they are verified."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {sponsorProfiles.map((profile, index) => (
              <Reveal key={index} delay={index * 100}>
                <article className="card overflow-hidden">
                  <img src={profile.image} alt="Cow in the Trust’s care" loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <div className="space-y-3 p-6">
                    <h3 className="text-2xl">{profile.name}</h3>
                    <p className="text-sm text-charcoal-600">Identification number, age and care needs: to be verified.</p>
                    <a href="#/contact?type=adoption" className="btn-outline w-full !py-2.5 text-sm">
                      Sponsor a Cow
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-forest-900 py-20 lg:py-28">
        <img src={csrImage} alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-saffron-300">Corporate CSR Section</p>
            <h2 className="mt-4 text-4xl text-ivory-50 sm:text-5xl">Partner With Us to Make a Meaningful Difference.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ivory-200/90">
              Join hands with Telangana Govignanakedram to create sustainable impact through cow protection, nourishment,
              healthcare, rescue and rehabilitation.
            </p>
            <a href="#/csr" className="btn-accent mt-10">
              Explore CSR Partnerships <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <Reveal className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-saffron-600">Donate</p>
          <h2 className="text-4xl sm:text-5xl">Your contribution can make a difference in the life of a cow.</h2>
          <p className="text-lg leading-relaxed text-charcoal-600">
            Every contribution helps support nourishment, shelter, medical treatment, rescue and rehabilitation.
          </p>
          <div className="flex flex-wrap gap-3">
            {suggestedAmounts.map((amount) => (
              <span key={amount} className="rounded-full border border-forest-200 bg-forest-50 px-4 py-2 text-sm font-semibold text-forest-700">
                ₹{amount.toLocaleString('en-IN')}
              </span>
            ))}
          </div>
          <PlaceholderNote text="Suggested amounts, to be confirmed by the Trust" />
          <div>
            <a href="#/donate" className="btn-primary mt-2">
              <Heart className="h-4 w-4" /> Donate Now
            </a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card p-8">
            <h3 className="text-2xl">Where your donation goes</h3>
            <ul className="mt-6 divide-y divide-ivory-300">
              {donationPurposes.map((purpose) => (
                <li key={purpose.value} className="flex items-center justify-between py-4 text-charcoal-700">
                  <span>{purpose.label}</span>
                  <ArrowRight className="h-4 w-4 text-forest-500" />
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl bg-ivory-100 p-4 text-sm leading-relaxed text-charcoal-600">
              Transparency statement: we publish utilisation reports and audited accounts so every donor can see how funds
              are used.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-ivory-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="News and Events" title="Latest from the gaushala" />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {newsItems.slice(0, 3).map((item, index) => (
              <Reveal key={item.id} delay={index * 100}>
                <a href="#/news" className="card group block h-full overflow-hidden hover:-translate-y-1 hover:shadow-xl">
                  <img src={item.image} alt={item.title} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="space-y-3 p-6">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-saffron-600">
                      <CalendarDays className="h-3.5 w-3.5" /> {item.category}
                    </p>
                    <h3 className="text-2xl">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-charcoal-600">{item.excerpt}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials and Supporters"
            title="What our supporters say"
            description={<PlaceholderNote text="Verified testimonials to be added with permission" />}
          />
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.role} delay={index * 100}>
              <figure className="card flex h-full flex-col p-8">
                <p className="font-serif text-2xl italic text-earth-500">“{item.quote}”</p>
                <figcaption className="mt-auto pt-8 text-sm font-semibold text-forest-700">{item.role}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-ivory-300 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl">Financial transparency</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Annual reports', path: '/legal/financial-transparency' },
              { label: 'Audited financial statements', path: '/legal/financial-transparency' },
              { label: 'Donation utilisation reports', path: '/legal/financial-transparency' },
              { label: 'Trust registration details', path: '/legal/registration' },
            ].map((link) => (
              <a
                key={link.label}
                href={`#${link.path}`}
                className="flex items-center justify-between rounded-xl border border-ivory-300 px-5 py-4 text-sm font-medium text-forest-700 transition hover:border-forest-400 hover:bg-forest-50"
              >
                {link.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
