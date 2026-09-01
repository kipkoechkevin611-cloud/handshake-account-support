'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Services', href: '#services' },
    { name: 'Partnership', href: '#partnership' },
    { name: 'Why Work With Me', href: '#why-work-with-me' },
    { name: 'FAQ', href: '#faq' },
  ];

  const importantLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Disclaimer', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0B1F3A] text-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo & Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">Handshake Account Support</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
              Helping you make the most of your Handshake journey through independent professional support.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-2 text-[#94a3b8] hover:text-white transition-colors text-sm min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Important */}
          <div>
            <h4 className="font-semibold mb-4">Important</h4>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-2 text-[#94a3b8] hover:text-white transition-colors text-sm min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:smartassignmentsolver@gmail.com"
                className="flex items-center gap-2 py-2 text-[#94a3b8] hover:text-white transition-colors text-sm min-h-[44px]"
              >
                <Mail size={16} />
                smartassignmentsolver@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#1e293b] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#64748B] text-xs">
              © {new Date().getFullYear()} Handshake Account Support. All rights reserved.
            </p>
            <p className="text-[#64748B] text-xs max-w-2xl text-center md:text-right">
              This independent service is not affiliated with, sponsored by, operated by, or endorsed by Handshake. Clients remain responsible for complying with applicable Handshake, university, employer, and legal requirements.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
