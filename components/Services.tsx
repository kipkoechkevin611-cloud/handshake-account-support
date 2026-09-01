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
      description: 'Help clients understand how to properly configure and complete their account.',
    },
    {
      icon: UserCheck,
      title: 'Profile Optimization',
      description: 'Improve profile presentation, completeness, wording, skills, and professional positioning.',
    },
    {
      icon: Search,
      title: 'Opportunity Monitoring',
      description: 'Help identify and organize relevant opportunities based on the client\'s goals and qualifications.',
    },
    {
      icon: FileText,
      title: 'Application Support',
      description: 'Help clients prepare stronger application materials and understand application requirements.',
    },
    {
      icon: FolderOpen,
      title: 'Organization & Management',
      description: 'Help clients organize applications, deadlines, opportunities, follow-ups, and account-related activities.',
    },
    {
      icon: Bell,
      title: 'Communication & Updates',
      description: 'Provide clear updates about progress, opportunities, recommendations, and next steps.',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220] mb-4">
            Professional Support From Setup to Ongoing Management
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Keep your Handshake presence organized, monitored and professionally managed with support tailored to your agreed needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card hover>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2563EB]/10 rounded-lg mb-4">
                  <service.icon size={24} className="text-[#2563EB]" />
                </div>
                <h3 className="font-semibold text-[#0B1220] mb-2">{service.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button href="/apply" variant="primary">
            Become a Client
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
