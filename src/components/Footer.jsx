'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const LOGO = '/Screenshot%202025-05-05%20181332.png';

export default function Footer() {
  const footerLinks = {
    Resources: [
      { name: 'Education Benefits', href: '/resources' },
      { name: 'Career Services', href: '/resources' },
      { name: 'Housing Assistance', href: '/resources' },
      { name: 'Healthcare', href: '/resources' },
    ],
    Community: [
      { name: 'Success Stories', href: '/veterans' },
      { name: 'Mentorship', href: '/veterans' },
      { name: 'Events', href: '/veterans' },
      { name: 'Support Groups', href: '/veterans' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Mission', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
    Support: [
      { name: 'Help Center', href: '/contact' },
      { name: 'Crisis Support', href: '/resources' },
      { name: 'Contact Support', href: '/contact' },
    ],
  };

  return (
    <footer className="gradient-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src={LOGO}
                alt="NextMission Navigator"
                width={200}
                height={80}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI-assisted planning, vetted resources, and community hooks for veterans
              building their next chapter after uniformed service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:col-span-4 lg:gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-bold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm text-center md:text-left">
            © {new Date().getFullYear()} NextMission Navigator. Built with respect for those who served.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/terms" className="text-gray-300 hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
