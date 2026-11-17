import { Info } from 'lucide-react';

type PlaceholderNoteProps = {
  text?: string;
};

export default function PlaceholderNote({
  text = 'Placeholder until verified information is provided',
}: PlaceholderNoteProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron-50 px-3 py-1 text-xs font-medium text-saffron-700">
      <Info className="h-3.5 w-3.5" />
      {text}
    </span>
  );
}
