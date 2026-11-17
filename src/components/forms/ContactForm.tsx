import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import FormField from '@/components/forms/FormField';
import FormStatus from '@/components/forms/FormStatus';
import { isValidEmail, isValidPhone, submitEnquiry, type EnquiryType } from '@/lib/submissions';

export const enquiryTypeOptions: { value: EnquiryType; label: string }[] = [
  { value: 'general', label: 'General Information' },
  { value: 'donation', label: 'Donations' },
  { value: 'csr', label: 'CSR Partnerships' },
  { value: 'adoption', label: 'Cow Adoption and Sponsorship' },
  { value: 'volunteer', label: 'Volunteering' },
  { value: 'other', label: 'Other Enquiries' },
];

type ContactFormProps = {
  initialType: EnquiryType;
};

type ContactValues = {
  enquiry_type: EnquiryType;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactValues, string>>;

const emptyValues = (initialType: EnquiryType): ContactValues => ({
  enquiry_type: initialType,
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
});

function validate(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!isValidEmail(values.email)) errors.email = 'Please enter a valid email address.';
  if (values.phone.trim() && !isValidPhone(values.phone)) errors.phone = 'Please enter a valid phone number.';
  if (values.message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.';
  return errors;
}

const inputClass = 'field-input';

export default function ContactForm({ initialType }: ContactFormProps) {
  const [values, setValues] = useState<ContactValues>(() => emptyValues(initialType));
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ kind: 'success' | 'error'; message: string } | null>(null);

  const update = (field: keyof ContactValues) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((current) => ({ ...current, [field]: event.target.value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatus(null);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await submitEnquiry({
        enquiry_type: values.enquiry_type,
        name: values.name,
        email: values.email,
        phone: values.phone,
        subject: values.subject,
        message: values.message,
      });
      setValues(emptyValues(initialType));
      setStatus({
        kind: 'success',
        message: 'Thank you. Your enquiry has been received and the Trust will respond to you shortly.',
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
        <FormField label="Enquiry category" htmlFor="enquiry_type" required>
          <select id="enquiry_type" className={inputClass} value={values.enquiry_type} onChange={update('enquiry_type')}>
            {enquiryTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </FormField>
        <FormField label="Full name" htmlFor="contact_name" required error={errors.name}>
          <input
            id="contact_name"
            autoComplete="name"
            className={inputClass}
            value={values.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
          />
        </FormField>
        <FormField label="Email address" htmlFor="contact_email" required error={errors.email}>
          <input
            id="contact_email"
            type="email"
            autoComplete="email"
            className={inputClass}
            value={values.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
          />
        </FormField>
        <FormField label="Phone number" htmlFor="contact_phone" error={errors.phone} hint="Optional">
          <input
            id="contact_phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            value={values.phone}
            onChange={update('phone')}
            aria-invalid={Boolean(errors.phone)}
          />
        </FormField>
      </div>
      <FormField label="Subject" htmlFor="contact_subject" hint="Optional">
        <input id="contact_subject" className={inputClass} value={values.subject} onChange={update('subject')} />
      </FormField>
      <FormField label="Message" htmlFor="contact_message" required error={errors.message}>
        <textarea
          id="contact_message"
          rows={6}
          className={inputClass}
          value={values.message}
          onChange={update('message')}
          aria-invalid={Boolean(errors.message)}
        />
      </FormField>

      {status && <FormStatus kind={status.kind} message={status.message} />}

      <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70">
        <Send className="h-4 w-4" />
        {submitting ? 'Sending...' : 'Send Enquiry'}
      </button>
      <p className="text-xs leading-relaxed text-charcoal-500">
        By submitting this form you agree that the Trust may contact you about your enquiry. Your details are used only for
        this purpose and are not sold to third parties.
      </p>
    </form>
  );
}
