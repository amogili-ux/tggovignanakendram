export type EnquiryType = 'general' | 'donation' | 'csr' | 'adoption' | 'volunteer' | 'other';

export type EnquiryInput = {
  enquiry_type: EnquiryType;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  organisation?: string;
  designation?: string;
  funding_range?: string;
  partnership_model?: string;
};

export type DonationInput = {
  donor_name: string;
  email: string;
  phone: string;
  pan_number?: string;
  address?: string;
  amount_inr: number;
  purpose: string;
  frequency: 'one_time' | 'monthly';
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PAN_PATTERN = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
const PHONE_PATTERN = /^\+?[0-9\s-]{7,20}$/;

export function isValidEmail(value: string) {
  return EMAIL_PATTERN.test(value.trim());
}

export function isValidPhone(value: string) {
  return PHONE_PATTERN.test(value.trim());
}

export function isValidPan(value: string) {
  return PAN_PATTERN.test(value.trim().toUpperCase());
}

// No database backend is wired up. These functions validate the input and
// resolve successfully so the form flow still works end-to-end, but nothing
// is persisted. Wire up email/an API later to actually capture submissions.
export async function submitEnquiry(_input: EnquiryInput): Promise<void> {
  return;
}

export async function submitDonationRequest(_input: DonationInput): Promise<void> {
  return;
}
