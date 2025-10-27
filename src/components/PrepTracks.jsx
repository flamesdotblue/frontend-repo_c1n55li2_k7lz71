import { BookOpen, Clock, Brain, Users } from 'lucide-react';

const tracks = [
  {
    title: 'OIR Mastery',
    description: 'Timed OIR sets with instant explanations and progress tracking.',
    icon: Brain,
    color: 'from-emerald-500 to-teal-500',
    bullets: ['Level-wise sets', 'Time-bound practice', 'Detailed solutions'],
  },
  {
    title: 'PP&DT Intensive',
    description: 'Story writing framework, sample narrations, and peer review tips.',
    icon: BookOpen,
    color: 'from-indigo-500 to-blue-500',
    bullets: ['Image-based prompts', 'Structure templates', 'Self-evaluation'],
  },
  {
    title: 'Psychology Suite',
    description: 'Realistic TAT, WAT, SRT, and SD sessions with feedback cues.',
    icon: Clock,
    color: 'from-violet-500 to-fuchsia-500',
    bullets: ['Timer-integrated', 'Answer banks', 'Reflection notes'],
  },
  {
    title: 'GTO + Interview',
    description: 'Group tasks playbook and HR interview bank with sample responses.',
    icon: Users,
    color: 'from-amber-500 to-orange-500',
    bullets: ['Tactics & strategy', 'Mock questions', 'Body language tips'],
  },
];

export default function PrepTracks() {
  return (
    <section id="practice" className="py-16 sm:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Choose your prep track</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">Follow guided modules designed for each SSB stage. Build momentum with structured drills and checkpoints.</p>
          </div>
          <a href="#get-started" className="hidden sm:inline-flex rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black">View roadmap</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map(({ title, description, icon: Icon, color, bullets }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-5 shadow-sm transition hover:shadow-md">
              <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${color} opacity-20`} />
              <div className="relative">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{description}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-300" /> {b}
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-5 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700">Start module →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
