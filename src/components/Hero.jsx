import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
              <Star size={14} /> Curated. Minimal. Effective.
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
              SSB preparation, elevated for the modern candidate
            </h1>
            <p className="mt-5 text-zinc-600 leading-relaxed max-w-2xl">
              A premium, distraction-free space to master OIR, PP&DT, Psychology, GTO and Interview rounds. precision-crafted modules and clean interfaces keep your focus where it matters.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#practice"
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
              >
                Start practicing <ArrowRight size={16} />
              </a>
              <a
                href="#resources"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900"
              >
                Explore library
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-zinc-500">Practice Sets</dt>
                <dd className="mt-1 text-xl font-semibold text-zinc-950">2,000+</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-zinc-500">Mock Tasks</dt>
                <dd className="mt-1 text-xl font-semibold text-zinc-950">60+</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-zinc-500">Alumni Wins</dt>
                <dd className="mt-1 text-xl font-semibold text-zinc-950">500+</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] w-full rounded-3xl border border-zinc-200 bg-white p-6">
              <div className="grid grid-cols-2 gap-4 h-full">
                {[
                  { title: 'OIR', desc: 'Timed reasoning drills' },
                  { title: 'PP&DT', desc: 'Story + narration lab' },
                  { title: 'Psych', desc: 'TAT, WAT, SRT, SD' },
                  { title: 'GTO/PI', desc: 'Group tasks + interview' },
                ].map(({ title, desc }) => (
                  <div key={title} className="rounded-2xl border border-zinc-200 p-4">
                    <p className="text-sm font-medium text-zinc-900">{title}</p>
                    <p className="text-xs text-zinc-500 mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
