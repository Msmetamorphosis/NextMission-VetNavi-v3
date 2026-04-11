'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const LOGO = '/Screenshot%202025-05-05%20181332.png';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Resources', href: '/resources' },
    { name: 'Veterans', href: '/veterans' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={LOGO}
              alt="NextMission Navigator"
              width={200}
              height={80}
              className="h-20 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--deep-army-green)] hover:text-[var(--dark-brown)] font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <button type="button" className="btn-primary">
              Sign In
            </button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="text-[var(--deep-army-green)] hover:text-[var(--dark-brown)] p-2"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[var(--deep-army-green)] hover:text-[var(--dark-brown)] font-medium py-2"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button type="button" className="btn-primary w-full mt-4">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
