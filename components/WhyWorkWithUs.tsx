'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, MessageSquare, FileCheck, Users, Shield } from 'lucide-react';

export default function WhyWorkWithUs() {
  const benefits = [
    {
      icon: Settings,
      title: 'Consistent Support',
      description: 'Maintain an organized and consistent opportunity workflow.',
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'Receive regular updates and understand what support is being provided.',
    },
    {
      icon: FileCheck,
      title: 'Transparent Agreement',
      description: 'Understand expectations, responsibilities, and compensation before support begins.',
    },
    {
      icon: Users,
      title: 'Simple Partnership Structure',
      description: 'Straightforward 50/50 terms for eligible earnings covered by the agreement.',
    },
    {
      icon: Shield,
      title: 'You Retain Full Control',
      description: 'Your account, personal information, and career decisions remain yours.',
    },
  ];

  return (
    <section id="why-work-with-me" className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#0866E5] tracking-wider uppercase mb-3">WHY WORK WITH ME</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4">Why Work With Me?</h2>
        </motion.div>

        {/* Desktop - 5 cards in single row */}
        <div className="hidden xl:grid grid-cols-5 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center h-full flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0866E5]/10 rounded-lg mb-4 mx-auto">
                <benefit.icon size={24} className="text-[#0866E5]" />
              </div>
              <h3 className="font-semibold text-[#0B1F3A] mb-2 text-sm leading-tight">{benefit.title}</h3>
              <p className="text-xs text-[#4A5568] leading-relaxed flex-1">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tablet - 3x2 grid (last row 2 centered) */}
        <div className="hidden md:grid xl:hidden grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0866E5]/10 rounded-lg mb-4 mx-auto">
                <benefit.icon size={24} className="text-[#0866E5]" />
              </div>
              <h3 className="font-semibold text-[#0B1F3A] mb-2">{benefit.title}</h3>
              <p className="text-sm text-[#4A5568] leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile - 2x3 or 1 column */}
        <div className="md:hidden grid grid-cols-2 gap-4 sm:hidden">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-[#E2E8F0] rounded-xl p-4 shadow-sm text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 bg-[#0866E5]/10 rounded-lg mb-3 mx-auto">
                <benefit.icon size={20} className="text-[#0866E5]" />
              </div>
              <h3 className="font-semibold text-[#0B1F3A] mb-1 text-xs leading-tight">{benefit.title}</h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Small mobile - single column */}
        <div className="hidden sm:grid md:hidden grid-cols-1 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-sm flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-[#0866E5]/10 rounded-lg flex items-center justify-center">
                <benefit.icon size={20} className="text-[#0866E5]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1F3A] mb-1">{benefit.title}</h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
