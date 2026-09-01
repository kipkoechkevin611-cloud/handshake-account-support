'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ variant = 'primary', children, href, className = '', disabled, onClick, type = 'button' }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base";
  
  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-[#1d4ed8] active:bg-[#1e40af]",
    secondary: "bg-white text-[#111827] border border-[#e5e7eb] hover:bg-[#F5F7FA] active:bg-[#e5e7eb]"
  };

  const content = (
    <>
      {children}
      {href && <span className="ml-2">→</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
