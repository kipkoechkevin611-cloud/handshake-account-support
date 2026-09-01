'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who owns the Handshake account?',
      answer: 'The client creates and retains ownership of their own Handshake account.',
    },
    {
      question: 'How does the 50/50 arrangement work?',
      answer: 'Where earnings fall within the agreed partnership arrangement, applicable proceeds are shared 50/50 between the client and service provider.',
    },
    {
      question: 'Do you guarantee jobs or earnings?',
      answer: 'No. The service does not guarantee employment, opportunities, successful applications or earnings.',
    },
    {
      question: 'What information do I need to get started?',
      answer: 'Basic contact and educational information is collected through the application form. Do not submit passwords or authentication codes through the public website.',
    },
    {
      question: 'How often will I receive updates?',
      answer: 'Communication frequency is agreed between the client and service provider.',
    },
    {
      question: 'Can I stop the service?',
      answer: 'Yes, subject to the terms of the agreement between the client and service provider.',
    },
    {
      question: 'Is this Handshake?',
      answer: 'No. This is an independent service and does not claim affiliation with Handshake.',
    },
    {
      question: 'How is account security handled?',
      answer: 'You retain control of your Handshake account. I do not need your password, authentication codes, or other sensitive login credentials to provide support. Never submit these credentials through this website or by email.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220] mb-4">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-[#F5F7FA] hover:bg-[#e5e7eb] rounded-xl p-6 transition-colors"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#0B1220] pr-8">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} className="text-[#64748B] flex-shrink-0" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 pt-4 border-t border-[#e5e7eb]"
                    >
                      <p className="text-[#64748B] leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
