import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { useRoute } from '@/lib/router';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import CsrPage from '@/pages/CsrPage';
import DocumentPage from '@/pages/DocumentPage';
import DonatePage from '@/pages/DonatePage';
import GalleryPage from '@/pages/GalleryPage';
import GosevaPage from '@/pages/GosevaPage';
import HomePage from '@/pages/HomePage';
import InitiativesPage from '@/pages/InitiativesPage';
import NewsPage from '@/pages/NewsPage';
import NotFoundPage from '@/pages/NotFoundPage';

function renderPage(path: string, search: string) {
  if (path.startsWith('/legal/')) return <DocumentPage slug={path.slice('/legal/'.length)} />;
  switch (path) {
    case '/':
      return <HomePage />;
    case '/about':
      return <AboutPage />;
    case '/initiatives':
      return <InitiativesPage />;
    case '/goseva':
      return <GosevaPage />;
    case '/news':
      return <NewsPage />;
    case '/gallery':
      return <GalleryPage />;
    case '/csr':
      return <CsrPage />;
    case '/donate':
      return <DonatePage />;
    case '/contact':
      return <ContactPage search={search} />;
    default:
      return <NotFoundPage />;
  }
}

export default function App() {
  const { path, search } = useRoute();

  return (
    <div className="flex min-h-screen flex-col bg-ivory-200">
      <SiteHeader currentPath={path} />
      <main className="flex-1">{renderPage(path, search)}</main>
      <SiteFooter />
    </div>
  );
}
