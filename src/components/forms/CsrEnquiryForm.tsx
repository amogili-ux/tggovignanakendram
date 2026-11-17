import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import FormField from '@/components/forms/FormField';
import FormStatus from '@/components/forms/FormStatus';
import { isValidEmail, isValidPhone, submitEnquiry } from '@/lib/submissions';

const areaOptions = [
  'Cow Shelter Development',
  'Cow Nourishment Programme',
  'Veterinary Care Programme',
  'Cow Rescue and Rehabilitation',
  'Sustainable Gaushala Development',
  'Other',
];

const fundingRangeOptions = [
  'To be discussed',
  'Up to ₹5 lakh',
  '₹5 lakh to ₹25 lakh',
  '₹25 lakh to ₹1 crore',
  'Above ₹1 crore',
];

const partnershipOptions = [
  'Project-based CSR funding',
  'Infrastructure sponsorship',
  'Veterinary programme sponsorship',
  'Fodder and nourishment sponsorship',
  'Long-term institutional partnership',
  'Employee volunteering initiative',
  'In-kind contribution',
];

type CsrValues = {
  organisation: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  area: string;
  funding_range: string;
  partnership_model: string;
  message: string;
  consent: boolean;
};

type CsrErrors = Partial<Record<keyof CsrValues, string>>;

const emptyValues: CsrValues = {
  organisation: '',
  name: '',
  designation: '',
  email: '',
  phone: '',
  area: areaOptions[0],
  funding_range: fundingRangeOptions[0],
  partnership_model: partnershipOptions[0],
  message: '',
  consent: false,
};

function validate(values: CsrValues): CsrErrors {
  const errors: CsrErrors = {};
  if (!values.organisation.trim()) errors.organisation = 'Please enter your company or organisation name.';
  if (!values.name.trim()) errors.name = 'Please enter the contact person’s name.';
  if (!isValidEmail(values.email)) errors.email = 'Please enter a valid corporate email address.';
  if (!isValidPhone(values.phone)) errors.phone = 'Please enter a valid contact number.';
  if (values.message.trim().length < 10) errors.message = 'Please describe your interest in at least 10 characters.';
  if (!values.consent) errors.consent = 'Please confirm you agree to be contacted about this enquiry.';
  return errors;
}

const inputClass = 'field-input';

export default function CsrEnquiryForm() {
  const [values, setValues] = useState<CsrValues>(emptyValues);
  const [errors, setErrors] = useState<CsrErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ kind: 'success' | 'error'; message: string } | null>(null);

  const update = (field: keyof CsrValues) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = event.target.type === 'checkbox' ? (event.target as HTMLInputElement).checked : event.target.value;
    setValues((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatus(null);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await submitEnquiry({
        enquiry_type: 'csr',
        name: values.name,
        email: values.email,
        phone: values.phone,
        subject: values.area,
        message: values.message,
        organisation: values.organisation,
        designation: values.designation,
        funding_range: values.funding_range,
        partnership_model: values.partnership_model,
      });
      setValues(emptyValues);
      setStatus({
        kind: 'success',
        message: 'Thank you. Your CSR enquiry has been received. The Trust’s team will contact you to discuss next steps.',
      });
    } catch (error) {
      setStatus({
        kind: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Company / organisation name" htmlFor="csr_org" required error={errors.organisation}>
          <input id="csr_org" className={inputClass} value={values.organisation} onChange={update('organisation')} aria-invalid={Boolean(errors.organisation)} />
        </FormField>
        <FormField label="Contact person name" htmlFor="csr_name" required error={errors.name}>
          <input id="csr_name" className={inputClass} value={values.name} onChange={update('name')} aria-invalid={Boolean(errors.name)} />
        </FormField>
        <FormField label="Designation" htmlFor="csr_designation">
          <input id="csr_designation" className={inputClass} value={values.designation} onChange={update('designation')} />
        </FormField>
        <FormField label="Corporate email address" htmlFor="csr_email" required error={errors.email}>
          <input id="csr_email" type="email" className={inputClass} value={values.email} onChange={update('email')} aria-invalid={Boolean(errors.email)} />
        </FormField>
        <FormField label="Contact number" htmlFor="csr_phone" required error={errors.phone}>
          <input id="csr_phone" type="tel" className={inputClass} value={values.phone} onChange={update('phone')} aria-invalid={Boolean(errors.phone)} />
        </FormField>
        <FormField label="Proposed CSR funding range" htmlFor="csr_range">
          <select id="csr_range" className={inputClass} value={values.funding_range} onChange={update('funding_range')}>
            {fundingRangeOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </FormField>
        <FormField label="Area of interest" htmlFor="csr_area">
          <select id="csr_area" className={inputClass} value={values.area} onChange={update('area')}>
            {areaOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </FormField>
        <FormField label="Preferred partnership model" htmlFor="csr_model">
          <select id="csr_model" className={inputClass} value={values.partnership_model} onChange={update('partnership_model')}>
            {partnershipOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </FormField>
      </div>
      <FormField label="Message" htmlFor="csr_message" required error={errors.message}>
        <textarea id="csr_message" rows={5} className={inputClass} value={values.message} onChange={update('message')} aria-invalid={Boolean(errors.message)} />
      </FormField>

      <div className="space-y-2">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-700">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={update('consent')}
            className="mt-1 h-4 w-4 rounded border-ivory-300 text-forest-600 focus:ring-forest-400"
          />
          <span>
            I agree that Telangana Govignanakedram may contact me about this CSR enquiry and may process my details under its
            privacy policy.
          </span>
        </label>
        {errors.consent && (
          <p role="alert" className="text-sm text-error-600">
            {errors.consent}
          </p>
        )}
      </div>

      {status && <FormStatus kind={status.kind} message={status.message} />}

      <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70">
        <Send className="h-4 w-4" />
        {submitting ? 'Submitting...' : 'Submit CSR Enquiry'}
      </button>
    </form>
  );
}
