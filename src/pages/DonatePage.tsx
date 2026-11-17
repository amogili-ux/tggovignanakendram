import { Heart, ShieldCheck } from 'lucide-react';
import DonationForm from '@/components/forms/DonationForm';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { donationPurposes, heroImage } from '@/data/site';

const purposeDetails: Record<(typeof donationPurposes)[number]['value'], string> = {
  general: 'Support day-to-day Goseva across all Trust activities.',
  food: 'Green and dry fodder and clean water for cows in our care.',
  medical: 'Veterinary consultations, medicines and vaccination.',
  rescue: 'Emergency response, transport and rehabilitation.',
  shelter: 'Shelter, drainage, fencing and gaushala infrastructure.',
  sponsorship: 'Sponsor the daily care of an individual cow.',
};

export default function DonatePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest-900">
        <img src={heroImage} alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-saffron-300">Donate Now</p>
          <h1 className="mt-4 text-4xl text-ivory-50 sm:text-6xl">Your contribution can make a difference in the life of a cow.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ivory-200/90">
            Every contribution helps support nourishment, shelter, medical treatment, rescue and rehabilitation for cows in need.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading eyebrow="Donation Purposes" title="Choose where your support goes" />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {donationPurposes.map((purpose, index) => (
            <Reveal key={purpose.value} delay={index * 60}>
              <div className="card h-full p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-50 text-forest-600">
                  <Heart className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl">{purpose.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{purposeDetails[purpose.value]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <Reveal className="space-y-6 lg:col-span-2">
            <h2 className="text-4xl">Donate securely</h2>
            <p className="text-lg leading-relaxed text-charcoal-600">
              Share your details and chosen amount. You will receive a confirmation by email along with payment instructions
              and your receipt.
            </p>
            <div className="card space-y-4 p-6">
              <p className="flex items-start gap-3 text-sm text-charcoal-700">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" />
                Card and bank details are never stored on this website.
              </p>
              <p className="text-sm text-charcoal-700">
                Tax deduction (80G) receipts are issued only where the Trust holds a valid approval and the donation qualifies.
                General donations are not tax deductible unless stated on the receipt.
              </p>
              <a href="#/legal/refund-policy" className="text-sm font-semibold text-forest-700 hover:text-forest-900">
                Read the Donation and Refund Policy
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} className="rounded-3xl border border-ivory-300 bg-ivory-50 p-6 shadow-sm sm:p-10 lg:col-span-3">
            <DonationForm />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">Transparency</h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal-600">
            See how donations are used through our annual reports, audited financial statements and donation utilisation
            updates.
          </p>
          <a href="#/legal/financial-transparency" className="mt-6 inline-flex font-semibold text-forest-700 hover:text-forest-900">
            View financial transparency
          </a>
        </Reveal>
      </section>
    </>
  );
}
