'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, UserPlus, Handshake, Settings, DollarSign } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Contact Me',
      description: 'Submit the client application form and tell me what type of support you need.',
    },
    {
      number: '02',
      icon: UserPlus,
      title: 'You Create & Own Your Account',
      description: 'Your Handshake account remains yours and under your ownership.',
    },
    {
      number: '03',
      icon: Handshake,
      title: 'We Agree on the Arrangement',
      description: 'We discuss the scope of support, communication process, expectations, and applicable 50/50 partnership terms.',
    },
    {
      number: '04',
      icon: Settings,
      title: 'Support & Optimization Begins',
      description: 'I help with profile optimization, opportunity research, organization, application preparation, and agreed support activities.',
    },
    {
      number: '05',
      icon: DollarSign,
      title: 'Transparent Partnership',
      description: 'Any eligible earnings specifically covered by our written agreement are handled according to the agreed 50/50 arrangement.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220] mb-4">How It Works</h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            A straightforward 5-step process to get started with professional Handshake account support.
          </p>
        </motion.div>

        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-[#F5F7FA] rounded-xl p-6 h-full">
                  <div className="text-[#2563EB] font-bold text-lg mb-3">{step.number}</div>
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm mb-4">
                    <step.icon size={20} className="text-[#2563EB]" />
                  </div>
                  <h3 className="font-semibold text-[#0B1220] mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 text-[#2563EB]">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="text-[#2563EB] font-bold text-lg">{step.number}</div>
              </div>
              <div className="flex-1 bg-[#F5F7FA] rounded-xl p-6">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-sm mb-4">
                  <step.icon size={20} className="text-[#2563EB]" />
                </div>
                <h3 className="font-semibold text-[#0B1220] mb-2">{step.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
