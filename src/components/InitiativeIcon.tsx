import { Ambulance, Flower2, HeartHandshake, Leaf, Sprout, Stethoscope, type LucideIcon } from 'lucide-react';
import type { initiatives } from '@/data/site';

const icons: Record<(typeof initiatives)[number]['icon'], LucideIcon> = {
  Ambulance,
  Flower2,
  HeartHandshake,
  Leaf,
  Sprout,
  Stethoscope,
};

type InitiativeIconProps = {
  name: (typeof initiatives)[number]['icon'];
  className?: string;
};

export default function InitiativeIcon({ name, className = 'h-6 w-6' }: InitiativeIconProps) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={1.75} />;
}
