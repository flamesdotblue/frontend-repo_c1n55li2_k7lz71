import { BookOpen, Brain, Users, Clock } from 'lucide-react';

const tracks = [
  {
    title: 'OIR Mastery',
    description: 'Level-wise sets with clean explanations and timed focus.',
    icon: Brain,
    bullets: ['Progressive difficulty', 'Timer-first practice', 'Solution keys'],
  },
  {
    title: 'PP&DT Studio',
    description: 'Refined structure for story writing and crisp narration.',
    icon: BookOpen,
    bullets: ['Prompt bank', 'Frameworks', 'Self-review cues'],
  },
  {
    title: 'Psychology Suite',
    description: 'Realistic TAT, WAT, SRT, SD sessions in an uncluttered flow.',
    icon: Clock,
    bullets: ['Timed pages', 'Answer vault', 'Reflection notes'],
  },
  {
    title: 'GTO + Interview',
    description: 'Group task playbook and PI question bank built for clarity.',
    icon: Users,
    bullets: ['Tactics', 'Sample answers', 'Delivery tips'],
  },
];

export default function PrepTracks() {
  return (
    <section id="practice" className="py-20 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">Tracks built for deep work</h2>
            <p className="mt-2 text-zinc-600 max-w-2xl">Minimal, premium layouts that get out of the way—so you can think, solve, and improve.</p>
          </div>
          <a href="#get-started" className="hidden sm:inline-flex rounded-full bg-black text-white px-4 py-2 text-sm font-medium">View roadmap</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map(({ title, description, icon: Icon, bullets }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl bg-white border border-zinc-200 p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 text-base font-medium text-zinc-950">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{description}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" /> {b}
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-5 inline-block text-sm font-medium text-zinc-900 border-b border-zinc-900">Open module</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
