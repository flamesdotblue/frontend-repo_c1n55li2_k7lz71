import { FileText, Headphones, LayoutList, Sparkles } from 'lucide-react';

export default function Resources() {
  const items = [
    {
      title: 'Guides',
      desc: 'Concise notes and checklists for quick, clean revision.',
      icon: FileText,
    },
    {
      title: 'Audio Briefings',
      desc: 'Listen to psychology cues and interview patterns on the go.',
      icon: Headphones,
    },
    {
      title: 'Question Banks',
      desc: 'Curated OIR + PI sets with direct, no-fluff solutions.',
      icon: LayoutList,
    },
    {
      title: 'Strategy Vault',
      desc: 'Do’s, don’ts, and a calm, week-wise preparation plan.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="resources" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">A quiet library for serious prep</h2>
          <p className="mt-2 text-zinc-600">Handpicked resources presented with editorial calm—only what helps.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-zinc-200 p-6 bg-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 text-base font-medium text-zinc-950">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{desc}</p>
              <a href="#" className="mt-4 inline-block text-sm font-medium text-zinc-900 border-b border-zinc-900">Open</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
