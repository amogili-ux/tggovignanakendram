import { ArrowRight, Download, FileText, Handshake } from 'lucide-react';
import CsrEnquiryForm from '@/components/forms/CsrEnquiryForm';
import PageHero from '@/components/PageHero';
import PlaceholderNote from '@/components/PlaceholderNote';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { csrImage, galleryImages } from '@/data/site';

const projects = [
  {
    title: 'Cow Shelter Development',
    objective: 'Create safe, hygienic and well-drained shelter space for cows.',
    activities: ['Shelter construction and expansion', 'Flooring and drainage', 'Drinking water facilities', 'Fencing and waste management'],
  },
  {
    title: 'Cow Nourishment Programme',
    objective: 'Ensure every cow receives balanced green and dry fodder throughout the year.',
    activities: ['Green and dry fodder', 'Nutritional supplementation', 'Feed storage', 'Water facilities'],
  },
  {
    title: 'Veterinary Care Programme',
    objective: 'Provide regular medical treatment, vaccination and emergency care.',
    activities: ['Medical treatment and medicines', 'Vaccination', 'Emergency care', 'Health monitoring'],
  },
  {
    title: 'Cow Rescue and Rehabilitation',
    objective: 'Respond to distress calls and support recovery until cows regain health.',
    activities: ['Rescue operations and transport', 'Rehabilitation facilities', 'Medical recovery', 'Long-term care'],
  },
  {
    title: 'Sustainable Gaushala Development',
    objective: 'Build long-lasting infrastructure with responsible resource use.',
    activities: ['Infrastructure', 'Renewable energy', 'Water conservation', 'Hygiene and sustainable operations'],
  },
];

const partnershipModels = [
  'Project-based CSR funding',
  'Infrastructure sponsorship',
  'Veterinary programme sponsorship',
  'Fodder and nourishment sponsorship',
  'Long-term institutional partnership',
  'Employee volunteering initiatives',
  'In-kind contributions',
];

const compliancePapers = [
  'Trust registration certificate',
  'PAN details',
  'Section 12AB registration',
  'Section 80G approval',
  'CSR-1 registration, where applicable',
  'Audited financial statements',
  'Annual reports and activity reports',
  'Project proposals and utilisation certificates',
];

export default function CsrPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Partnerships / CSR"
        title="Partner with us to create a lasting impact through Goseva"
        description="Collaborate with Telangana Govignanakedram to support sustainable cow protection, nourishment, healthcare, rescue, rehabilitation and shelter development through meaningful CSR partnerships."
        image={csrImage}
      >
        <a href="#csr-enquiry" className="btn-accent">
          <Download className="h-4 w-4" /> Request the CSR Proposal
        </a>
        <a href="#csr-projects" className="btn-outline !border-ivory-50 !text-ivory-50 hover:!bg-ivory-50 hover:!text-forest-800">
          Explore CSR Projects
        </a>
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <Reveal className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-saffron-600">About the organisation</p>
          <h2 className="text-4xl">A trust built for long-term animal welfare</h2>
          <p className="text-lg leading-relaxed text-charcoal-600">
            Telangana Govignanakedram provides shelter, nourishment, medical care and rehabilitation to cows in need, guided
            by Goseva and the value of compassion. Our programmes are planned with clear scope, measurable outcomes and
            transparent reporting.
          </p>
          <ul className="grid gap-3 text-sm text-charcoal-700 sm:grid-cols-2">
            {['Mission and objectives', 'Management and governance', 'Existing programmes', 'Operational capabilities'].map((item) => (
              <li key={item} className="rounded-xl border border-ivory-300 bg-white px-4 py-3 font-medium">
                {item}
              </li>
            ))}
          </ul>
          <PlaceholderNote text="Organisational experience and figures to be added after verification" />
        </Reveal>
        <Reveal delay={120}>
          <img src={galleryImages[1].src} alt="Cows resting in a shelter" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg" />
        </Reveal>
      </section>

      <section id="csr-projects" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="CSR Project Opportunities"
              title="Five programmes open for partnership"
              description="Each project includes objectives, activities, budget breakdown, expected outcomes and reporting. Budgets are shared on request once verified."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 80}>
                <article className="card flex h-full flex-col gap-4 p-7">
                  <h3 className="text-2xl">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-charcoal-600">{project.objective}</p>
                  <ul className="space-y-2 text-sm text-charcoal-700">
                    {project.activities.map((activity) => (
                      <li key={activity} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-500" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-col gap-3 border-t border-ivory-300 pt-5">
                    <PlaceholderNote text="Budget and beneficiaries pending verification" />
                    <a href="#csr-enquiry" className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900">
                      Request project budget <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <Reveal className="space-y-6">
          <h2 className="text-4xl">Partnership models</h2>
          <ul className="space-y-3">
            {partnershipModels.map((model) => (
              <li key={model} className="flex items-center gap-3 rounded-xl border border-ivory-300 bg-white px-5 py-4 text-charcoal-800">
                <Handshake className="h-5 w-5 text-forest-600" />
                {model}
              </li>
            ))}
          </ul>
          <p className="text-sm text-charcoal-600">All arrangements are subject to applicable legal and CSR requirements.</p>
        </Reveal>
        <Reveal delay={120} className="space-y-6">
          <h2 className="text-4xl">Compliance and documents</h2>
          <p className="text-lg leading-relaxed text-charcoal-600">
            Registration and compliance documents are published once they have been verified. Requests are handled by the
            Trust’s team.
          </p>
          <ul className="card divide-y divide-ivory-300">
            {compliancePapers.map((paper) => (
              <li key={paper} className="flex items-center justify-between gap-4 px-5 py-4 text-sm text-charcoal-700">
                <span className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-forest-600" />
                  {paper}
                </span>
                <PlaceholderNote text="Pending" />
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section id="csr-enquiry" className="scroll-mt-24 bg-forest-900 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <Reveal className="space-y-6 text-ivory-100 lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-saffron-300">CSR enquiry</p>
            <h2 className="text-4xl text-ivory-50">Start a partnership conversation</h2>
            <p className="text-lg leading-relaxed text-ivory-200/90">
              Share your organisation’s details and area of interest. Our team will reply with the CSR proposal and project
              budgets, and arrange a meeting if helpful.
            </p>
            <a href="#/contact?type=csr" className="inline-flex items-center gap-2 font-semibold text-saffron-300 hover:text-saffron-100">
              Prefer a general contact form? Go to Contact Us <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
          <Reveal delay={120} className="rounded-3xl bg-white p-6 shadow-xl sm:p-10 lg:col-span-3">
            <CsrEnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
