export const newsCategories = ['Rescue Stories', 'Goseva', 'Events', 'Awareness', 'Announcements'] as const;

export type NewsCategory = (typeof newsCategories)[number];

export type NewsItem = {
  id: string;
  category: NewsCategory;
  date: string;
  title: string;
  excerpt: string;
  image: string;
};

export const newsItems: NewsItem[] = [
  {
    id: 'rescue-update',
    category: 'Rescue Stories',
    date: 'Placeholder date',
    title: 'Rescue and rehabilitation update',
    excerpt:
      'Placeholder story. Replace with a verified account of a recent rescue, the cow’s recovery progress and the team involved.',
    image: 'https://images.pexels.com/photos/30147588/pexels-photo-30147588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'goseva-day',
    category: 'Goseva',
    date: 'Placeholder date',
    title: 'Community Goseva day',
    excerpt:
      'Placeholder for a report on a community Goseva activity, including feeding, volunteer participation and local families who took part.',
    image: 'https://images.pexels.com/photos/39060695/pexels-photo-39060695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'awareness',
    category: 'Awareness',
    date: 'Placeholder date',
    title: 'Awareness on cow welfare',
    excerpt:
      'Placeholder for an awareness campaign update covering the cultural significance of cows and responsible animal care.',
    image: 'https://images.pexels.com/photos/35270836/pexels-photo-35270836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'festival-event',
    category: 'Events',
    date: 'Placeholder date',
    title: 'Festival celebration at the Gaushala',
    excerpt:
      'Placeholder for an event announcement, including date, location and how the public can take part.',
    image: 'https://images.pexels.com/photos/40897785/pexels-photo-40897785.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'trust-announcement',
    category: 'Announcements',
    date: 'Placeholder date',
    title: 'Organisational announcement',
    excerpt:
      'Placeholder for official announcements from the Trust, such as new programmes, approvals or published reports.',
    image: 'https://images.pexels.com/photos/16041523/pexels-photo-16041523.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'vet-camp',
    category: 'Rescue Stories',
    date: 'Placeholder date',
    title: 'Veterinary camp and vaccination drive',
    excerpt:
      'Placeholder for a summary of a veterinary camp, the number of animals treated and the follow-up care planned.',
    image: 'https://images.pexels.com/photos/27421346/pexels-photo-27421346.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];
