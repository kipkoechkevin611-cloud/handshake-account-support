'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const baseStyles = "bg-white rounded-xl border border-[#e5e7eb] p-6";
  const hoverStyles = hover ? "hover:shadow-lg hover:border-[#2563EB]/20 transition-all duration-300" : "";
  
  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      whileHover={hover ? { y: -4 } : {}}
    >
      {children}
    </motion.div>
  );
}
