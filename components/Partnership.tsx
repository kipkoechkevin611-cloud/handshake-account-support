'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Handshake, FileCheck } from 'lucide-react';
import Button from './Button';

export default function Partnership() {
  return (
    <section id="partnership" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220] mb-4">Transparent 50/50 Partnership</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
              For opportunities specifically covered by our written agreement, eligible earnings are shared equally: 50% to the client and 50% to the support partner.
            </p>

            <p className="text-sm text-[#64748B] mb-8 leading-relaxed">
              The exact scope, eligible earnings, payment process, and responsibilities are agreed upon before services begin.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: User,
                  title: 'YOU OWN YOUR ACCOUNT',
                  description: 'Your Handshake account remains yours.',
                },
                {
                  icon: Handshake,
                  title: 'AGREEMENT BEFORE SERVICE',
                  description: 'The partnership terms are discussed and understood before management begins.',
                },
                {
                  icon: FileCheck,
                  title: 'TRANSPARENT ARRANGEMENT',
                  description: 'The partnership structure is clear before service starts.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2563EB]/10 rounded-lg">
                      <item.icon size={24} className="text-[#2563EB]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B1220] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#64748B]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-gradient-to-br from-[#0B1220] to-[#1e293b] rounded-2xl p-8 sm:p-12 text-white">
              <div className="text-center space-y-8">
                <div className="flex items-center justify-center gap-4 sm:gap-8">
                  <div>
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2563EB] mb-2">50%</div>
                    <div className="text-base sm:text-lg font-semibold">CLIENT</div>
                  </div>
                  <div className="text-4xl sm:text-5xl text-[#2563EB]">+</div>
                  <div>
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2563EB] mb-2">50%</div>
                    <div className="text-base sm:text-lg font-semibold">SUPPORT PARTNER</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#FEF3C7] border border-[#FCD34D] rounded-lg p-4 mt-6"
            >
              <p className="text-sm text-[#92400E] leading-relaxed">
                No jobs, opportunities, interviews, or earnings are guaranteed.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button href="#contact" variant="primary">
            Discuss the Partnership
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
