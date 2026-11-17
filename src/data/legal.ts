export type LegalDocument = {
  slug: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export const legalDocuments: LegalDocument[] = [
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    intro: 'This page explains what information we collect through this website and how we use it.',
    sections: [
      {
        heading: 'Information we collect',
        body: 'When you use the donation, contact or CSR enquiry forms, we collect the details you choose to share, such as your name, email address, phone number and message. Donation forms may also ask for PAN and address only where needed for receipts and legal compliance.',
      },
      {
        heading: 'How we use your information',
        body: 'We use your details to respond to your enquiry, process your donation, issue receipts and communicate about the Trust’s work. We do not sell your personal information.',
      },
      {
        heading: 'Payment processing',
        body: 'Card and bank details are never stored on this website. Payments will be handled by an approved payment provider once it is connected.',
      },
      {
        heading: 'Information security',
        body: 'Forms are transmitted over an encrypted connection. Submitted information is stored securely and is accessible only to authorised Trust administrators.',
      },
      {
        heading: 'Your rights',
        body: 'You may ask us to view, correct or delete the personal information you have submitted. Contact the Trust using the details on the Contact Us page.',
      },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms and Conditions',
    intro: 'These terms govern your use of the Telangana Govignanakedram website.',
    sections: [
      {
        heading: 'Use of the website',
        body: 'The website is provided for information about the Trust, its activities and ways to support cow welfare. You agree to use it lawfully and to provide accurate information in forms.',
      },
      {
        heading: 'Content ownership',
        body: 'Text, photographs and documents on this website belong to Telangana Govignanakedram or are used with permission. They may not be reproduced for commercial use without written consent.',
      },
      {
        heading: 'Service limitations',
        body: 'We aim to keep information accurate and up to date, but we do not guarantee that the website will always be available or error free.',
      },
      {
        heading: 'Applicable law',
        body: 'These terms are governed by the laws of India. Disputes are subject to the jurisdiction of the courts in the Trust’s registered place of business.',
      },
    ],
  },
  {
    slug: 'refund-policy',
    title: 'Donation and Refund Policy',
    intro: 'This policy explains how donations are processed, when receipts are issued and how refund requests are handled.',
    sections: [
      {
        heading: 'Donation processing',
        body: 'A donation is considered complete only after the payment provider confirms successful payment. Requests submitted on this website are recorded before payment is completed.',
      },
      {
        heading: 'Receipts',
        body: 'A receipt is issued after a successful payment. Receipts for tax deduction under Section 80G are issued only where the Trust holds a valid approval and the donation qualifies.',
      },
      {
        heading: 'Duplicate transactions',
        body: 'If you are charged more than once for the same donation, contact the Trust with your transaction reference. Duplicate amounts will be refunded in line with applicable procedures.',
      },
      {
        heading: 'Refund requests',
        body: 'To request a refund, email the Trust with your name, transaction reference and reason. Refunds are reviewed against this policy and applicable legal requirements.',
      },
    ],
  },
  {
    slug: 'registration',
    title: 'Trust Registration Details',
    intro: 'Verified registration details will be published here once they have been reviewed and approved.',
    sections: [
      { heading: 'Trust registration certificate', body: '[To be added after verification]' },
      { heading: 'Registration number and date', body: '[To be added after verification]' },
      { heading: 'Registered address', body: '[To be added after verification]' },
      { heading: 'PAN details', body: '[To be added after verification]' },
    ],
  },
  {
    slug: '12ab-80g',
    title: '12AB and 80G Information',
    intro: 'Donors who qualify can claim tax deductions only when the Trust holds valid approvals. Details will be published after verification.',
    sections: [
      { heading: 'Section 12AB registration', body: '[Registration details and certificate to be added after verification]' },
      { heading: 'Section 80G approval', body: '[Approval details, validity period and certificate to be added after verification]' },
      {
        heading: 'Donor tax deduction information',
        body: 'Only donations that qualify under applicable law will be eligible for an 80G receipt. General donations are not tax deductible unless stated on the receipt.',
      },
    ],
  },
  {
    slug: 'financial-transparency',
    title: 'Financial Transparency',
    intro: 'We publish annual reports, audited accounts and donation utilisation updates to show how contributions are used.',
    sections: [
      { heading: 'Audited financial statements', body: '[Documents to be published after audit and verification]' },
      { heading: 'Annual activity reports', body: '[Documents to be published after verification]' },
      { heading: 'Donation utilisation reports', body: '[Reports to be published once prepared]' },
      {
        heading: 'Project expenditure',
        body: 'Project-wise funding requirements and expenditure summaries will be shared alongside each report.',
      },
    ],
  },
];
