export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Initiatives', path: '/initiatives' },
  { label: 'Goseva & Scriptures', path: '/goseva' },
  { label: 'News & Events', path: '/news' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Corporate Partnerships / CSR', path: '/csr' },
  { label: 'Donate Now', path: '/donate' },
  { label: 'Contact Us', path: '/contact' },
] as const;

export const quickNavItems = navItems.slice(0, 6);

export const legalLinks = [
  { label: 'Privacy Policy', path: '/legal/privacy' },
  { label: 'Terms and Conditions', path: '/legal/terms' },
  { label: 'Donation and Refund Policy', path: '/legal/refund-policy' },
  { label: 'Trust Registration Details', path: '/legal/registration' },
  { label: '12AB and 80G Information', path: '/legal/12ab-80g' },
  { label: 'Financial Transparency', path: '/legal/financial-transparency' },
  { label: 'Contact Information', path: '/contact' },
] as const;

export const donationPurposes = [
  { value: 'general', label: 'General Goseva' },
  { value: 'food', label: 'Cow Food and Nourishment' },
  { value: 'medical', label: 'Veterinary and Medical Care' },
  { value: 'rescue', label: 'Cow Rescue and Rehabilitation' },
  { value: 'shelter', label: 'Shelter Development' },
  { value: 'sponsorship', label: 'Cow Adoption and Sponsorship' },
] as const;

export const suggestedAmounts = [501, 1100, 2100, 5100, 11000] as const;

export const initiatives = [
  {
    id: 'rescue',
    title: 'Cow Rescue and Protection',
    short: 'Emergency assistance and safe transport for cows in distress, abandonment or unsafe conditions.',
    description:
      'Our rescue team responds to reports of cows that are injured, abandoned or living in unsafe circumstances. Each rescued animal receives an initial health assessment and a rehabilitation plan.',
    objectives: ['Respond to rescue calls promptly', 'Provide safe transport', 'Complete an initial health check on arrival'],
    beneficiaries: 'Injured, abandoned and at-risk cows',
    image:
      'https://images.pexels.com/photos/30147594/pexels-photo-30147594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Ambulance',
  },
  {
    id: 'shelter',
    title: 'Shelter and Nourishment',
    short: 'Safe shelter, clean water, green and dry fodder, and hygienic surroundings every day.',
    description:
      'Daily care covers secure shelter, clean drinking water, balanced green and dry fodder, and regular cleaning of living areas to keep every cow healthy and comfortable.',
    objectives: ['Safe and clean shelter', 'Clean drinking water at all times', 'Balanced daily nutrition'],
    beneficiaries: 'All cows in the Gaushala',
    image:
      'https://images.pexels.com/photos/39060697/pexels-photo-39060697.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Leaf',
  },
  {
    id: 'medical',
    title: 'Veterinary and Medical Care',
    short: 'Consultations, treatment, vaccination programmes and emergency medical assistance.',
    description:
      'Veterinary staff provide consultations, medical treatment, vaccination, regular health monitoring and recovery support, with emergency care available when needed.',
    objectives: ['Regular health monitoring', 'Vaccination programmes', 'Emergency medical response'],
    beneficiaries: 'Sick, injured and recovering cows',
    image:
      'https://images.pexels.com/photos/38117650/pexels-photo-38117650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Stethoscope',
  },
  {
    id: 'rehab',
    title: 'Rehabilitation',
    short: 'Patient, long-term recovery for injured, sick or rescued cows.',
    description:
      'Rehabilitation is a structured process that supports injured, abandoned or sick cows until they regain health, strength and comfort in a calm, supervised environment.',
    objectives: ['Recovery plans for each animal', 'Supervised long-term care', 'Progress tracking'],
    beneficiaries: 'Rescued and recovering cows',
    image:
      'https://images.pexels.com/photos/30147588/pexels-photo-30147588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'HeartHandshake',
  },
  {
    id: 'sponsorship',
    title: 'Cow Adoption and Sponsorship',
    short: 'Sponsor the food and medical care of an individual cow, or enquire about adoption.',
    description:
      'Sponsors help fund the daily care of a specific cow and receive periodic updates on its wellbeing. Adoption enquiries are reviewed by the Trust before any arrangement is made.',
    objectives: ['Match sponsors with cows in need', 'Share periodic care updates', 'Transparent sponsorship records'],
    beneficiaries: 'Individual cows and their caretakers',
    image:
      'https://images.pexels.com/photos/35270836/pexels-photo-35270836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Sprout',
  },
  {
    id: 'goseva',
    title: 'Goseva and Awareness',
    short: 'Community Goseva, educational programmes, volunteer activities and cultural events.',
    description:
      'We invite families, students and volunteers to take part in Goseva, learn about cow welfare and the cultural heritage of cows in Indian traditions, and support local awareness campaigns.',
    objectives: ['Community Goseva days', 'Educational programmes for schools', 'Volunteer participation'],
    beneficiaries: 'Families, students and volunteers',
    image:
      'https://images.pexels.com/photos/10182772/pexels-photo-10182772.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Flower2',
  },
] as const;

export const galleryCategories = [
  'Cow Rescue',
  'Cow Shelter',
  'Feeding and Nourishment',
  'Veterinary Care',
  'Rehabilitation',
  'Goseva Activities',
  'Volunteers',
  'Events and Celebrations',
] as const;

export const galleryImages: { src: string; alt: string; category: (typeof galleryCategories)[number] }[] = [
  { src: 'https://images.pexels.com/photos/38422340/pexels-photo-38422340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A person gently caressing a cow indoors', category: 'Cow Shelter' },
  { src: 'https://images.pexels.com/photos/35270836/pexels-photo-35270836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Two cows nuzzling each other in a peaceful forest', category: 'Cow Shelter' },
  { src: 'https://images.pexels.com/photos/40582650/pexels-photo-40582650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Two white cows eating from a trough on a farm', category: 'Feeding and Nourishment' },
  { src: 'https://images.pexels.com/photos/36795118/pexels-photo-36795118.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Two cows standing in a dry rural landscape in India', category: 'Cow Rescue' },
  { src: 'https://images.pexels.com/photos/30147594/pexels-photo-30147594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A cow and her calf in a rural village in Andhra Pradesh', category: 'Cow Rescue' },
  { src: 'https://images.pexels.com/photos/30492883/pexels-photo-30492883.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Close-up of a young calf standing in a field', category: 'Rehabilitation' },
  { src: 'https://images.pexels.com/photos/15107206/pexels-photo-15107206.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A cow nursing her calf amid lush greenery', category: 'Rehabilitation' },
  { src: 'https://images.pexels.com/photos/38117650/pexels-photo-38117650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Veterinarian checking a cow in a verdant forest', category: 'Veterinary Care' },
  { src: 'https://images.pexels.com/photos/27421346/pexels-photo-27421346.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A veterinarian giving an injection to an animal outdoors', category: 'Veterinary Care' },
  { src: 'https://images.pexels.com/photos/39060695/pexels-photo-39060695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Dairy cows feeding on hay in a barn', category: 'Feeding and Nourishment' },
  { src: 'https://images.pexels.com/photos/18860444/pexels-photo-18860444.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A farmer carrying hay to feed a herd of cattle', category: 'Feeding and Nourishment' },
  { src: 'https://images.pexels.com/photos/5917557/pexels-photo-5917557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cattle grazing on a green glade in the countryside', category: 'Goseva Activities' },
  { src: 'https://images.pexels.com/photos/33811954/pexels-photo-33811954.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cows grazing in a serene meadow', category: 'Goseva Activities' },
  { src: 'https://images.pexels.com/photos/16041523/pexels-photo-16041523.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Farmers tending to cattle in a barn', category: 'Volunteers' },
  { src: 'https://images.pexels.com/photos/16053596/pexels-photo-16053596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Two farm workers caring for cattle in a barn', category: 'Volunteers' },
  { src: 'https://images.pexels.com/photos/10182772/pexels-photo-10182772.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Traditional diyas casting a warm glow', category: 'Events and Celebrations' },
  { src: 'https://images.pexels.com/photos/40897780/pexels-photo-40897780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Rows of lit clay oil lamps', category: 'Events and Celebrations' },
];

export const heroImage =
  'https://images.pexels.com/photos/30147592/pexels-photo-30147592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const aboutImage =
  'https://images.pexels.com/photos/16846562/pexels-photo-16846562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const csrImage =
  'https://images.pexels.com/photos/18860444/pexels-photo-18860444.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const contactImage =
  'https://images.pexels.com/photos/5055063/pexels-photo-5055063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const gosevaImage =
  'https://images.pexels.com/photos/40897785/pexels-photo-40897785.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const TRUST_PLACEHOLDER = '[To be added after verification]';
