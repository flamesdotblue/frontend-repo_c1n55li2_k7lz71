import { Mail, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <a href="#" className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                <Shield size={18} />
              </span>
              <span className="text-lg font-semibold tracking-tight">SSB Prep</span>
            </a>
            <p className="mt-4 text-sm text-zinc-600 max-w-sm">
              A premium, minimal workspace for serious SSB aspirants. No clutter. Just craft.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-zinc-900">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li><a href="#overview" className="hover:text-zinc-900">Overview</a></li>
              <li><a href="#practice" className="hover:text-zinc-900">Tracks</a></li>
              <li><a href="#resources" className="hover:text-zinc-900">Library</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-zinc-900">Contact</h4>
            <a
              href="mailto:contact@ssbprep.app"
              className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-800 hover:text-black"
            >
              <Mail size={16} /> contact@ssbprep.app
            </a>
            <p className="mt-4 text-xs text-zinc-500">© {new Date().getFullYear()} SSB Prep. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
