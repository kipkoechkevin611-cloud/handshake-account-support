'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0B1220]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Take the Next Step
          </h2>
          <p className="text-lg text-[#94a3b8] mb-8 max-w-2xl mx-auto">
            Let's discuss your Handshake account and determine whether my support service is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/apply" variant="primary">
              Become a Client →
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
