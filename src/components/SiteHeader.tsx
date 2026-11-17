import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { navItems } from '@/data/site';

type SiteHeaderProps = {
  currentPath: string;
};

const linkBase =
  'relative whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition duration-200 hover:bg-forest-50 hover:text-forest-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400';

function isActive(itemPath: string, currentPath: string) {
  return itemPath === '/' ? currentPath === '/' : currentPath === itemPath;
}

export default function SiteHeader({ currentPath }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  const donateItem = navItems.find((item) => item.label === 'Donate Now');
  const csrItem = navItems.find((item) => item.label.startsWith('Corporate'));
  const mainItems = navItems.filter((item) => item !== donateItem && item !== csrItem);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-ivory-300 bg-white/95 shadow-md backdrop-blur'
          : 'border-transparent bg-ivory-100/95 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#/" aria-label="Telangana Govignanakedram home" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Main navigation" className="hidden min-[1200px]:flex min-[1200px]:items-center min-[1200px]:gap-1">
          {mainItems.map((item) => (
            <a
              key={item.path}
              href={`#${item.path}`}
              aria-current={isActive(item.path, currentPath) ? 'page' : undefined}
              className={`${linkBase} ${
                isActive(item.path, currentPath) ? 'bg-forest-50 text-forest-700' : 'text-charcoal-700'
              }`}
            >
              {item.label}
              {isActive(item.path, currentPath) && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-saffron-500" />
              )}
            </a>
          ))}
          {csrItem && (
            <a
              href={`#${csrItem.path}`}
              aria-current={isActive(csrItem.path, currentPath) ? 'page' : undefined}
              className="ml-1 whitespace-nowrap rounded-full border border-saffron-500 px-3 py-1.5 text-sm font-semibold text-saffron-700 transition duration-200 hover:bg-saffron-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron-300"
            >
              Corporate Partnerships / CSR
            </a>
          )}
          {donateItem && (
            <a
              href={`#${donateItem.path}`}
              aria-current={isActive(donateItem.path, currentPath) ? 'page' : undefined}
              className="btn-primary ml-2 whitespace-nowrap !px-5 !py-2.5 text-sm"
            >
              Donate Now
            </a>
          )}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory-300 bg-white text-forest-700 transition hover:bg-forest-50 min-[1200px]:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-ivory-300 bg-white transition-all duration-300 min-[1200px]:hidden ${
          menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 border-t-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-1 overflow-y-auto px-4 py-4 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={`#${item.path}`}
              aria-current={isActive(item.path, currentPath) ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
              className={`rounded-xl px-4 py-3 text-base font-medium transition hover:bg-forest-50 ${
                isActive(item.path, currentPath) ? 'bg-forest-50 text-forest-700' : 'text-charcoal-800'
              } ${item.label === 'Donate Now' ? 'mt-2 !bg-forest-600 text-center !text-ivory-50' : ''} ${
                item.label.startsWith('Corporate') ? 'border border-saffron-500 text-saffron-700' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
