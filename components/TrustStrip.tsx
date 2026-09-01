'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, ShieldCheck, FileText, MessageSquare } from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    {
      icon: User,
      title: 'CLIENT OWNERSHIP',
      description: 'You retain ownership of your account.',
    },
    {
      icon: ShieldCheck,
      title: 'AUTHORIZED SUPPORT',
      description: 'Management is performed only with your permission.',
    },
    {
      icon: FileText,
      title: 'TRANSPARENT TERMS',
      description: 'Understand the partnership before joining.',
    },
    {
      icon: MessageSquare,
      title: 'ONGOING COMMUNICATION',
      description: 'Stay informed about agreed account activity.',
    },
  ];

  return (
    <section className="bg-[#F5F7FA] py-12 border-y border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm mb-4">
                <item.icon size={24} className="text-[#2563EB]" />
              </div>
              <h3 className="font-semibold text-sm text-[#0B1220] mb-2">{item.title}</h3>
              <p className="text-sm text-[#64748B]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
