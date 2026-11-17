import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import ContactForm, { enquiryTypeOptions } from '@/components/forms/ContactForm';
import PageHero from '@/components/PageHero';
import PlaceholderNote from '@/components/PlaceholderNote';
import Reveal from '@/components/Reveal';
import { contactImage, TRUST_PLACEHOLDER } from '@/data/site';
import type { EnquiryType } from '@/lib/submissions';

type ContactPageProps = {
  search: string;
};

function resolveEnquiryType(search: string): EnquiryType {
  const requested = new URLSearchParams(search).get('type');
  const match = enquiryTypeOptions.find((option) => option.value === requested);
  return match ? match.value : 'general';
}

const contactCards = [
  { icon: MapPin, title: 'Registered office', detail: TRUST_PLACEHOLDER },
  { icon: MapPin, title: 'Gaushala address', detail: TRUST_PLACEHOLDER },
  { icon: Phone, title: 'Telephone', detail: TRUST_PLACEHOLDER },
  { icon: Mail, title: 'Email', detail: TRUST_PLACEHOLDER },
  { icon: Clock, title: 'Office timings', detail: TRUST_PLACEHOLDER },
];

export default function ContactPage({ search }: ContactPageProps) {
  const initialType = resolveEnquiryType(search);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We would love to hear from you"
        description="Reach out about donations, CSR partnerships, cow sponsorship, volunteering or any general question about the Trust."
        image={contactImage}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:px-8 lg:py-28">
        <Reveal className="space-y-6 lg:col-span-2">
          <h2 className="text-4xl">Contact information</h2>
          <p className="text-sm text-charcoal-600">
            Contact details are published once they have been verified by the Trust.
          </p>
          <ul className="space-y-4">
            {contactCards.map((card) => (
              <li key={card.title} className="card flex gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-600">
                  <card.icon className="h-5 w-5" />
                </span>
                <div className="space-y-1">
                  <p className="font-semibold text-charcoal-800">{card.title}</p>
                  <p className="text-sm text-saffron-700">{card.detail}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-forest-300 bg-forest-50 p-6 text-center">
            <MapPin className="h-8 w-8 text-forest-500" />
            <p className="font-semibold text-forest-700">Map of the gaushala</p>
            <PlaceholderNote text="Map appears once the verified location is added" />
          </div>
        </Reveal>

        <Reveal delay={120} className="rounded-3xl border border-ivory-300 bg-white p-6 shadow-sm sm:p-10 lg:col-span-3">
          <h2 className="mb-8 text-3xl sm:text-4xl">Send us an enquiry</h2>
          <ContactForm key={initialType} initialType={initialType} />
        </Reveal>
      </section>
    </>
  );
}
