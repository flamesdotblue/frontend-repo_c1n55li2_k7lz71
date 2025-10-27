import { FileText, Headphones, LayoutList, Sparkles } from 'lucide-react';

export default function Resources() {
  const items = [
    {
      title: 'Study Guides',
      desc: 'Concise notes and checklists for quick revision across all stages.',
      icon: FileText,
    },
    {
      title: 'Audio Briefings',
      desc: 'Listen on the go: psychology cues, interview answers, and tips.',
      icon: Headphones,
    },
    {
      title: 'Question Banks',
      desc: 'Extensive HR interview and OIR practice sets with solutions.',
      icon: LayoutList,
    },
    {
      title: 'Strategy Vault',
      desc: 'Best practices, do’s and don’ts, and day-wise preparation plan.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="resources" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Handpicked resources</h2>
          <p className="mt-2 text-gray-600">Curated materials to accelerate your preparation and deepen understanding.</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
              <a href="#" className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700">Open resource →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
