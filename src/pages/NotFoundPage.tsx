export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-32 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-saffron-600">Page not found</p>
      <h1 className="mt-4 text-5xl">This page has wandered off</h1>
      <p className="mt-5 text-lg text-charcoal-600">The page you were looking for does not exist or has moved.</p>
      <a href="#/" className="btn-primary mt-10">
        Return to home
      </a>
    </section>
  );
}
