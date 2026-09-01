'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, MessageSquare, FileCheck, Users, Shield, Briefcase } from 'lucide-react';

export default function WhyWorkWithUs() {
  const benefits = [
    {
      icon: Settings,
      title: 'Consistent Account Management',
      description: 'Regular support and organization for your Handshake account.',
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'Stay informed about agreed account activities and updates.',
    },
    {
      icon: FileCheck,
      title: 'Transparent Agreement',
      description: 'Partnership terms discussed and understood before service begins.',
    },
    {
      icon: Users,
      title: 'Simple Partnership Structure',
      description: 'Straightforward 50/50 arrangement for covered earnings.',
    },
    {
      icon: Shield,
      title: 'Client Ownership',
      description: 'You retain full ownership of your Handshake account.',
    },
    {
      icon: Briefcase,
      title: 'Independent Service',
      description: 'Professional support without platform affiliation claims.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Clients Choose Us
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
