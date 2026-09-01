'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, UserCheck, Search, FileText, FolderOpen, Bell } from 'lucide-react';
import Card from './Card';
import Button from './Button';

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: 'Account Setup Guidance',
      description: 'Guidance on properly completing and organizing your Handshake profile.',
    },
    {
      icon: UserCheck,
      title: 'Profile Optimization',
      description: 'Improve your profile presentation, completeness, skills, and professional positioning.',
    },
    {
      icon: Search,
      title: 'Opportunity Monitoring',
      description: 'Identify and organize relevant opportunities based on your goals and qualifications.',
    },
    {
      icon: FileText,
      title: 'Application Support',
      description: 'Get help preparing stronger materials and understanding application requirements.',
    },
    {
      icon: FolderOpen,
      title: 'Organization & Workflow Support',
      description: 'Keep opportunities, deadlines, applications, and follow-ups organized.',
    },
    {
      icon: Bell,
      title: 'Communication & Updates',
      description: 'Receive clear updates, recommendations, and next-step guidance.',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#0866E5] tracking-wider uppercase mb-3">WHAT I DO</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4">Services I Provide</h2>
        </motion.div>

        {/* Desktop - 6 cards in single row */}
        <div className="hidden xl:grid grid-cols-6 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center h-full flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0866E5]/10 rounded-lg mb-4 mx-auto">
                <service.icon size={24} className="text-[#0866E5]" />
              </div>
              <h3 className="font-semibold text-[#0B1F3A] mb-2 text-sm leading-tight">{service.title}</h3>
              <p className="text-xs text-[#4A5568] leading-relaxed flex-1">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tablet - 3x2 grid */}
        <div className="hidden md:grid xl:hidden grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0866E5]/10 rounded-lg mb-4 mx-auto">
                <service.icon size={24} className="text-[#0866E5]" />
              </div>
              <h3 className="font-semibold text-[#0B1F3A] mb-2">{service.title}</h3>
              <p className="text-sm text-[#4A5568] leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile - 2x3 or 1 column */}
        <div className="md:hidden grid grid-cols-2 gap-4 sm:hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-[#E2E8F0] rounded-xl p-4 shadow-sm text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 bg-[#0866E5]/10 rounded-lg mb-3 mx-auto">
                <service.icon size={20} className="text-[#0866E5]" />
              </div>
              <h3 className="font-semibold text-[#0B1F3A] mb-1 text-xs leading-tight">{service.title}</h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Small mobile - single column */}
        <div className="hidden sm:grid md:hidden grid-cols-1 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-sm flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-[#0866E5]/10 rounded-lg flex items-center justify-center">
                <service.icon size={20} className="text-[#0866E5]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1F3A] mb-1">{service.title}</h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
