'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Handshake as HandshakeIcon } from 'lucide-react';

export default function Partnership() {
  return (
    <section id="partnership" className="py-20 lg:py-24 bg-[#F0FDF4]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            {/* Left - Copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <p className="text-sm font-semibold text-[#22B573] tracking-wider uppercase mb-3">PARTNERSHIP</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-6 leading-tight">
                Transparent 50/50
                <br />
                Partnership Model
              </h2>
              <p className="text-[#4A5568] mb-4 leading-relaxed">
                For opportunities specifically covered by our written agreement, eligible earnings are shared equally.
              </p>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                The exact scope, qualifying earnings, responsibilities, payment process, and duration are agreed upon before support begins.
              </p>
            </motion.div>

            {/* Center - Donut Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 flex justify-center"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* SVG Donut Chart */}
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {/* Left half - Green */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#22B573"
                    strokeWidth="20"
                    strokeDasharray="125.6 251.2"
                    strokeLinecap="round"
                  />
                  {/* Right half - Blue */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#0866E5"
                    strokeWidth="20"
                    strokeDasharray="125.6 251.2"
                    strokeDashoffset="-125.6"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-4 shadow-lg">
                    <HandshakeIcon size={32} className="text-[#0866E5]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Legend */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-3 h-3 bg-[#22B573] rounded-full mt-1.5"></div>
                <div>
                  <p className="font-semibold text-[#0B1F3A]">50% Client</p>
                  <p className="text-sm text-[#4A5568]">You receive 50% of eligible earnings specifically covered by our agreement.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-3 h-3 bg-[#0866E5] rounded-full mt-1.5"></div>
                <div>
                  <p className="font-semibold text-[#0B1F3A]">50% Support Partner</p>
                  <p className="text-sm text-[#4A5568]">I receive 50% for the agreed support, optimization, preparation, research, and organizational services.</p>
                </div>
              </div>
              <div className="bg-[#FEF3C7] border border-[#FCD34D] rounded-lg p-4">
                <p className="text-xs text-[#92400E] leading-relaxed">
                  No jobs, interviews, opportunities, contracts, or earnings are guaranteed. Results depend on qualifications, employers, opportunities, and other factors.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
