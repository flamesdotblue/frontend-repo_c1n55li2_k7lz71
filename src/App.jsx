import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PrepTracks from './components/PrepTracks';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="overview" className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Structured Plan',
                  desc: 'A week-by-week roadmap across OIR, PP&DT, Psych, GTO, and Interview rounds.',
                },
                {
                  title: 'Realistic Practice',
                  desc: 'Timed drills and scenario-based tasks closely mirroring actual assessment.',
                },
                {
                  title: 'Track Progress',
                  desc: 'Keep an eye on performance trends and identify focus areas to improve.',
                },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <PrepTracks />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;
