import { CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import PlaceholderNote from '@/components/PlaceholderNote';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { aboutImage } from '@/data/site';

const coreValues = ['Compassion', 'Service', 'Protection', 'Responsibility', 'Cultural awareness', 'Transparency', 'Accountability'];

const governanceAreas = [
  'Trust administration and day-to-day management',
  'Decision-making structure and trustee responsibilities',
  'Operational responsibilities at the gaushala',
  'Financial accountability and audited reporting',
];

const milestoneSlots = ['Establishment of the Trust', 'First rescue and shelter', 'Veterinary programme', 'Community Goseva launch'];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A charitable trust built on compassion and responsibility"
        description="Telangana Govignanakedram works to protect, nourish and care for cows, and to keep alive the cultural heritage of Goseva."
        image={aboutImage}
      />

      <section className="mx-auto max-w-4xl space-y-16 px-4 py-20 sm:px-6 lg:py-28">
        <Reveal className="space-y-5">
          <h2 className="text-4xl">Our story</h2>
          <p className="text-lg leading-relaxed text-charcoal-600">
            Telangana Govignanakedram was founded to give shelter and dignified care to cows who have no one to protect them.
            Over time its work has grown to include rescue, veterinary care, rehabilitation and community awareness.
          </p>
          <PlaceholderNote text="Founding date, reasons for establishment and milestones to be added from the Trust’s records" />
        </Reveal>

        <Reveal className="grid gap-6 md:grid-cols-2">
          <div className="card p-8">
            <h3 className="text-3xl">Vision</h3>
            <p className="mt-4 font-serif text-xl italic leading-relaxed text-earth-500">
              “To create a compassionate society where every cow receives protection, nourishment, shelter and dignified care.”
            </p>
          </div>
          <div className="card p-8">
            <h3 className="text-3xl">Mission</h3>
            <p className="mt-4 font-serif text-xl italic leading-relaxed text-earth-500">
              “To serve and protect cows through dedicated Goseva, rescue, rehabilitation, veterinary care, awareness and
              community participation.”
            </p>
          </div>
        </Reveal>

        <Reveal>
          <SectionHeading eyebrow="Core Values" title="What guides us" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <li key={value} className="flex items-center gap-3 rounded-xl border border-ivory-300 bg-white px-5 py-4 font-medium text-charcoal-800">
                <CheckCircle2 className="h-5 w-5 text-forest-600" />
                {value}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="space-y-6">
          <h2 className="text-4xl">Founder and leadership</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {['Founder', 'Trustees', 'Management team'].map((role) => (
              <div key={role} className="card p-6">
                <div className="mb-5 h-24 w-24 rounded-full bg-ivory-200" />
                <h3 className="text-2xl">{role}</h3>
                <p className="mt-2 text-sm text-charcoal-600">Name, designation and biography to be added.</p>
                <div className="mt-4">
                  <PlaceholderNote />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="space-y-6">
          <h2 className="text-4xl">Organisational governance</h2>
          <ul className="space-y-4">
            {governanceAreas.map((area) => (
              <li key={area} className="flex gap-3 text-lg text-charcoal-700">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-saffron-600" />
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="space-y-6">
          <h2 className="text-4xl">Milestones and achievements</h2>
          <ol className="relative border-l-2 border-forest-200 pl-8">
            {milestoneSlots.map((slot) => (
              <li key={slot} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[2.45rem] top-1 h-4 w-4 rounded-full border-4 border-ivory-200 bg-saffron-500" />
                <p className="font-semibold text-forest-700">{slot}</p>
                <p className="mt-1 text-sm text-charcoal-600">Date and details to be verified.</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>
    </>
  );
}
