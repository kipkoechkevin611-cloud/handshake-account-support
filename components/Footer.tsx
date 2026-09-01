'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function Footer() {
  const footerLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Services', href: '#services' },
    { name: 'Partnership', href: '#partnership' },
    { name: 'Why Work With Me', href: '#why-work-with-me' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Apply', href: '/apply' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  return (
    <footer className="bg-[#0B1220] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Handshake Account Support</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Independent Handshake account support and management service.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#94a3b8] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <Button href="/apply" variant="primary" className="w-full sm:w-auto">
              Become a Client
            </Button>
          </div>
        </div>

        <div className="border-t border-[#1e293b] pt-8">
          <p className="text-[#64748B] text-xs leading-relaxed max-w-4xl">
            This website and service are independent and are not affiliated with, endorsed by, or sponsored by Handshake. 
            No employment, opportunity or earnings are guaranteed. Clients remain responsible for complying with applicable 
            platform, university and employer requirements.
          </p>
        </div>
      </div>
    </footer>
  );
}
