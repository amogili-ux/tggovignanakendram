import { useState, type FormEvent } from 'react';
import { HandHeart } from 'lucide-react';
import FormField from '@/components/forms/FormField';
import FormStatus from '@/components/forms/FormStatus';
import { donationPurposes, suggestedAmounts } from '@/data/site';
import { isValidEmail, isValidPan, isValidPhone, submitDonationRequest } from '@/lib/submissions';

type Frequency = 'one_time' | 'monthly';

type DonationValues = {
  amount: string;
  purpose: string;
  frequency: Frequency;
  donor_name: string;
  email: string;
  phone: string;
  pan_number: string;
  address: string;
  consent: boolean;
};

type DonationErrors = Partial<Record<keyof DonationValues, string>>;

const initialValues: DonationValues = {
  amount: '',
  purpose: donationPurposes[0].value,
  frequency: 'one_time',
  donor_name: '',
  email: '',
  phone: '',
  pan_number: '',
  address: '',
  consent: false,
};

function validate(values: DonationValues): DonationErrors {
  const errors: DonationErrors = {};
  const amount = Number(values.amount);
  if (!Number.isInteger(amount) || amount < 1 || amount > 10000000) {
    errors.amount = 'Please enter a whole-rupee amount between ₹1 and ₹1,00,00,000.';
  }
  if (!values.donor_name.trim()) errors.donor_name = 'Please enter your full name.';
  if (!isValidEmail(values.email)) errors.email = 'Please enter a valid email address.';
  if (!isValidPhone(values.phone)) errors.phone = 'Please enter a valid mobile number.';
  if (values.pan_number.trim() && !isValidPan(values.pan_number)) {
    errors.pan_number = 'PAN should look like ABCDE1234F.';
  }
  if (!values.consent) errors.consent = 'Please confirm you agree to the donation and privacy notices.';
  return errors;
}

const inputClass = 'field-input';

export default function DonationForm() {
  const [values, setValues] = useState<DonationValues>(initialValues);
  const [errors, setErrors] = useState<DonationErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ kind: 'success' | 'error'; message: string } | null>(null);

  const update = (field: keyof DonationValues) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = event.target.type === 'checkbox' ? (event.target as HTMLInputElement).checked : event.target.value;
    setValues((current) => ({ ...current, [field]: value }));
  };

  const pickAmount = (amount: number) => {
    setValues((current) => ({ ...current, amount: String(amount) }));
    setErrors((current) => ({ ...current, amount: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatus(null);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await submitDonationRequest({
        donor_name: values.donor_name,
        email: values.email,
        phone: values.phone,
        pan_number: values.pan_number,
        address: values.address,
        amount_inr: Number(values.amount),
        purpose: values.purpose,
        frequency: values.frequency,
      });
      setValues(initialValues);
      setStatus({
        kind: 'success',
        message:
          'Thank you for your generosity. Your donation details have been recorded. The Trust will share payment instructions and your receipt by email.',
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

  const selectedAmount = Number(values.amount);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <fieldset className="space-y-4">
        <legend className="mb-3 font-serif text-2xl text-earth-500">1. Choose an amount</legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {suggestedAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => pickAmount(amount)}
              aria-pressed={selectedAmount === amount}
              className={`rounded-xl border px-3 py-3 text-base font-semibold transition duration-200 ${
                selectedAmount === amount
                  ? 'border-forest-600 bg-forest-600 text-ivory-50 shadow-md'
                  : 'border-ivory-300 bg-white text-forest-700 hover:-translate-y-0.5 hover:border-forest-400'
              }`}
            >
              ₹{amount.toLocaleString('en-IN')}
            </button>
          ))}
        </div>
        <FormField label="Or enter a custom amount (₹)" htmlFor="donation_amount" required error={errors.amount}>
          <input
            id="donation_amount"
            inputMode="numeric"
            className={inputClass}
            value={values.amount}
            onChange={update('amount')}
            aria-invalid={Boolean(errors.amount)}
            placeholder="e.g. 2100"
          />
        </FormField>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="mb-3 font-serif text-2xl text-earth-500">2. Choose a purpose and frequency</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField label="Donation purpose" htmlFor="donation_purpose" required>
            <select id="donation_purpose" className={inputClass} value={values.purpose} onChange={update('purpose')}>
              {donationPurposes.map((purpose) => (
                <option key={purpose.value} value={purpose.value}>
                  {purpose.label}
                </option>
              ))}
            </select>
          </FormField>
          <div className="space-y-2">
            <span className="block text-sm font-medium text-charcoal-800">Frequency</span>
            <div className="grid grid-cols-2 gap-3">
              {(
                [
                  { value: 'one_time', label: 'One-time' },
                  { value: 'monthly', label: 'Monthly' },
                ] as const
              ).map((option) => (
                <label
                  key={option.value}
                  className={`cursor-pointer rounded-xl border px-4 py-3 text-center text-sm font-medium transition ${
                    values.frequency === option.value
                      ? 'border-forest-600 bg-forest-50 text-forest-700'
                      : 'border-ivory-300 bg-white text-charcoal-700 hover:border-forest-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="frequency"
                    value={option.value}
                    checked={values.frequency === option.value}
                    onChange={update('frequency')}
                    className="sr-only"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="mb-3 font-serif text-2xl text-earth-500">3. Your details</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField label="Full name" htmlFor="donor_name" required error={errors.donor_name}>
            <input id="donor_name" autoComplete="name" className={inputClass} value={values.donor_name} onChange={update('donor_name')} aria-invalid={Boolean(errors.donor_name)} />
          </FormField>
          <FormField label="Email address" htmlFor="donor_email" required error={errors.email} hint="Receipts are sent here">
            <input id="donor_email" type="email" autoComplete="email" className={inputClass} value={values.email} onChange={update('email')} aria-invalid={Boolean(errors.email)} />
          </FormField>
          <FormField label="Mobile number" htmlFor="donor_phone" required error={errors.phone}>
            <input id="donor_phone" type="tel" autoComplete="tel" className={inputClass} value={values.phone} onChange={update('phone')} aria-invalid={Boolean(errors.phone)} />
          </FormField>
          <FormField label="PAN number" htmlFor="donor_pan" error={errors.pan_number} hint="Needed for 80G tax receipts only">
            <input id="donor_pan" className={`${inputClass} uppercase`} value={values.pan_number} onChange={update('pan_number')} aria-invalid={Boolean(errors.pan_number)} maxLength={10} />
          </FormField>
        </div>
        <FormField label="Address" htmlFor="donor_address" hint="Needed for 80G tax receipts only">
          <textarea id="donor_address" rows={3} className={inputClass} value={values.address} onChange={update('address')} />
        </FormField>
      </fieldset>

      <div className="space-y-2">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-700">
          <input type="checkbox" checked={values.consent} onChange={update('consent')} className="mt-1 h-4 w-4 rounded border-ivory-300 text-forest-600 focus:ring-forest-400" />
          <span>
            I have read the Donation and Refund Policy and Privacy Policy, and I agree to be contacted about my donation.
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
        <HandHeart className="h-4 w-4" />
        {submitting ? 'Saving your donation...' : 'Donate Now'}
      </button>
    </form>
  );
}
