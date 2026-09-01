'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'white' | 'light' | 'navy';
}

export default function Section({ children, className = '', id, bgColor = 'white' }: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-[#F5F7FA]',
    navy: 'bg-[#0B1220]'
  };

  return (
    <motion.section
      id={id}
      className={`${bgColors[bgColor]} py-16 sm:py-20 lg:py-24 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}
