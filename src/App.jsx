import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PrepTracks from './components/PrepTracks';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <section id="overview" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Clear Roadmap',
                  desc: 'Week-by-week plan across OIR, PP&DT, Psych, GTO, and Interview.',
                },
                {
                  title: 'Focused Practice',
                  desc: 'Calm layouts with timers and clean solution keys.',
                },
                {
                  title: 'Measured Progress',
                  desc: 'Track trends, spot gaps, and refine with intent.',
                },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
                  <h3 className="text-base font-medium">{c.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{c.desc}</p>
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
