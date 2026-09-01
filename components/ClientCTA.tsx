'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function ClientCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220] mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-[#64748B] mb-8 max-w-2xl mx-auto">
            Tell me a little about yourself and your current Handshake situation.
            I'll review your application and discuss whether the service is a good fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/apply" variant="primary">
              Apply to Become a Client
            </Button>
            <Button href="#contact" variant="secondary">
              Have a Question? Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
