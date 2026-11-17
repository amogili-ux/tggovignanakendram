type LogoProps = {
  tone?: 'light' | 'dark';
};

export default function Logo({ tone = 'dark' }: LogoProps) {
  const isLight = tone === 'light';
  return (
    <div className="flex items-center gap-3">
      <img
        src="/image.png"
        alt="Telangana Govignanakedram emblem"
        className={`h-11 w-11 shrink-0 rounded-full bg-ivory-50 object-cover p-0.5 ${
          isLight ? 'ring-1 ring-saffron-300/60' : 'ring-2 ring-saffron-300'
        }`}
      />
      <span className="leading-tight">
        <span
          className={`block font-serif text-lg font-semibold tracking-wide sm:text-xl ${
            isLight ? 'text-ivory-50' : 'text-forest-700'
          }`}
        >
          TELANGANA
        </span>
        <span
          className={`block text-xs font-medium tracking-[0.2em] ${
            isLight ? 'text-saffron-300' : 'text-saffron-700'
          }`}
        >
          GOVIGNANAKEDRAM
        </span>
      </span>
    </div>
  );
}
