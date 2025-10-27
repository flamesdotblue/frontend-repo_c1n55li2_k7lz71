import { Mail, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
                <Shield size={18} />
              </span>
              <span className="text-lg font-semibold">SSB Prep</span>
            </a>
            <p className="mt-3 text-sm text-gray-600 max-w-sm">
              Your companion for structured, distraction-free SSB preparation. Practice with purpose and track your progress over time.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#overview" className="hover:text-gray-900">Overview</a></li>
              <li><a href="#practice" className="hover:text-gray-900">Practice</a></li>
              <li><a href="#resources" className="hover:text-gray-900">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
            <a
              href="mailto:contact@ssbprep.app"
              className="mt-3 inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
            >
              <Mail size={16} /> contact@ssbprep.app
            </a>
            <p className="mt-3 text-xs text-gray-500">© {new Date().getFullYear()} SSB Prep. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
