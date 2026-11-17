import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import Logo from '@/components/Logo';
import { legalLinks, quickNavItems, TRUST_PLACEHOLDER } from '@/data/site';

const socialLinks = [
  { label: 'Facebook', icon: Facebook },
  { label: 'Instagram', icon: Instagram },
  { label: 'YouTube', icon: Youtube },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-ivory-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-5">
          <Logo tone="light" />
          <p className="max-w-xs text-sm leading-relaxed text-ivory-200/85">
            Dedicated to the protection, nourishment, shelter and compassionate care of cows through Goseva,
            rescue, rehabilitation and community participation.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ label, icon: Icon }) => (
              <span
                key={label}
                aria-label={`${label} link to be added`}
                title={`${label} (official link to be added)`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-saffron-300/40 text-saffron-300"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-serif text-xl font-semibold text-saffron-300">Quick Navigation</h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-1">
            {quickNavItems.map((item) => (
              <li key={item.path}>
                <a href={`#${item.path}`} className="text-ivory-200/90 transition hover:text-saffron-300">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#/csr" className="text-ivory-200/90 transition hover:text-saffron-300">
                Corporate Partnerships / CSR
              </a>
            </li>
            <li>
              <a href="#/donate" className="font-semibold text-saffron-300 transition hover:text-saffron-100">
                Donate Now
              </a>
            </li>
            <li>
              <a href="#/contact" className="text-ivory-200/90 transition hover:text-saffron-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-serif text-xl font-semibold text-saffron-300">Legal and Transparency</h3>
          <ul className="space-y-3 text-sm">
            {legalLinks.map((item) => (
              <li key={item.path}>
                <a href={`#${item.path}`} className="text-ivory-200/90 transition hover:text-saffron-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-serif text-xl font-semibold text-saffron-300">Contact</h3>
          <ul className="space-y-4 text-sm text-ivory-200/90">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron-300" />
              <span>
                Registered office address
                <span className="block text-saffron-300/90">{TRUST_PLACEHOLDER}</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-saffron-300" />
              <span>
                Telephone
                <span className="block text-saffron-300/90">{TRUST_PLACEHOLDER}</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-saffron-300" />
              <span>
                Email
                <span className="block text-saffron-300/90">{TRUST_PLACEHOLDER}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-700">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-ivory-200/70 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {year} Telangana Govignanakedram. All Rights Reserved.</p>
          <p>Serving cows. Preserving culture. Spreading compassion.</p>
        </div>
      </div>
    </footer>
  );
}
