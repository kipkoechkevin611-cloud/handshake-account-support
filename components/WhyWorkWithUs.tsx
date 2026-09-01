'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, MessageSquare, FileCheck, Users, Shield, Briefcase } from 'lucide-react';

export default function WhyWorkWithUs() {
  const benefits = [
    {
      icon: Settings,
      title: 'Consistent Support',
      description: 'Stay organized and maintain a more consistent opportunity workflow.',
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'Know what is being worked on and receive regular updates.',
    },
    {
      icon: FileCheck,
      title: 'Transparent Agreement',
      description: 'Understand expectations and compensation before work begins.',
    },
    {
      icon: Users,
      title: 'Simple Partnership Structure',
      description: 'Straightforward terms without hidden fees.',
    },
    {
      icon: Shield,
      title: 'You Retain Ownership',
      description: 'Your account, personal information, and career decisions remain yours.',
    },
  ];

  return (
    <section id="why-work-with-me" className="py-16 sm:py-20 lg:py-24 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Work With Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#1e293b] rounded-xl p-6 border border-[#334155]"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2563EB]/10 rounded-lg mb-4">
                <benefit.icon size={24} className="text-[#2563EB]" />
              </div>
              <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
