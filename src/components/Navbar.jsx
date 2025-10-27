import { useState } from 'react';
import { Menu, X, Shield, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Tracks', href: '#practice' },
    { label: 'Library', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
              <Shield size={18} />
            </span>
            <span className="text-lg font-semibold tracking-tight">SSB Prep</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-700 hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#login" className="inline-flex items-center gap-2 text-sm text-zinc-700 hover:text-black">
              <User size={16} />
              Login
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-800"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="#login" className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-800">
                <User size={16} />
                Login
              </a>
              <a href="#get-started" className="flex-1 inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-medium text-white">
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
