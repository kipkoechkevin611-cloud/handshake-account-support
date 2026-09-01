'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Lock, ShieldCheck } from 'lucide-react';

export default function AccountOwnership() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220] mb-4">
            Your Account. Your Ownership. Your Authorization.
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
            Clients remain the owners of their Handshake accounts. Any account support or management is provided 
            only with the client's authorization and should be carried out in accordance with applicable Handshake 
            policies and university or employer requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: User,
              title: 'CLIENT OWNERSHIP',
              description: 'You retain ownership of your account.',
            },
            {
              icon: Lock,
              title: 'AUTHORIZED ACCESS',
              description: 'Only use account-access methods that the client has explicitly authorized.',
            },
            {
              icon: ShieldCheck,
              title: 'DATA MINIMIZATION',
              description: 'Never request unnecessary passwords, authentication codes or sensitive information through the public application form.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#F5F7FA] rounded-xl p-6 border border-[#e5e7eb]"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm mb-4">
                <item.icon size={24} className="text-[#2563EB]" />
              </div>
              <h3 className="font-semibold text-[#0B1220] mb-2 text-sm">{item.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#FEF3C7] border border-[#FCD34D] rounded-lg p-6 text-center max-w-4xl mx-auto"
        >
          <p className="text-sm text-[#92400E] font-semibold mb-2">
            This is an independent service and is not affiliated with, endorsed by or sponsored by Handshake.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
