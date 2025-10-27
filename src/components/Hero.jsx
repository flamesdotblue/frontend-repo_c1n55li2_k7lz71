import { Rocket, Star, Target, Video } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs text-indigo-700">
              <Star size={14} /> Comprehensive SSB Interview Preparation
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Crack your SSB with a structured, proven roadmap
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Master OIR, PP&DT, Psychology, GTO, and Interview rounds with curated modules, timed drills, and realistic practice sets designed by mentors.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#practice"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                <Rocket size={16} /> Start Practicing
              </a>
              <a
                href="#resources"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <Video size={16} /> Explore Resources
              </a>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <dt className="text-xs text-gray-500">Practice Questions</dt>
                <dd className="text-lg font-semibold text-gray-900">2,000+</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Mock Tasks</dt>
                <dd className="text-lg font-semibold text-gray-900">60+</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500">Success Stories</dt>
                <dd className="text-lg font-semibold text-gray-900">500+</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 pointer-events-none" aria-hidden>
              <div className="h-full w-full rounded-3xl bg-gradient-to-tr from-indigo-200/40 via-transparent to-indigo-300/40 blur-3xl" />
            </div>
            <div className="relative rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'OIR Drills', desc: 'Rapid mental ability sets', icon: Target },
                  { title: 'PP&DT Lab', desc: 'Story writing + narration', icon: Target },
                  { title: 'Psych Tests', desc: 'TAT, WAT, SRT, SD', icon: Target },
                  { title: 'GTO Arena', desc: 'Group tasks & strategies', icon: Target },
                ].map(({ title, desc, icon: Icon }) => (
                  <div key={title} className="rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{title}</p>
                        <p className="text-xs text-gray-500">{desc}</p>
                      </div>
                    </div>
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
