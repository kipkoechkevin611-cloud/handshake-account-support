'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Lock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function FAQAndCTA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who owns the Handshake account?',
      answer: 'The client always owns and controls their Handshake account. This service does not claim ownership of client accounts or personal information.',
    },
    {
      question: 'How does the 50/50 arrangement work?',
      answer: 'Only earnings specifically covered by the written agreement are divided according to the agreed partnership structure.',
    },
    {
      question: 'What information do you need to get started?',
      answer: 'Full name, email, phone/WhatsApp, school/university, current Handshake status, career goals, and information relevant to the requested support. Never send your password, authentication codes, banking password, or other sensitive login credentials through this website.',
    },
    {
      question: 'How often will I receive updates?',
      answer: 'Update frequency is agreed with the client and communication can happen through email or WhatsApp where appropriate.',
    },
    {
      question: 'Can I stop the service?',
      answer: 'Yes. Cancellation/termination rules follow the written agreement.',
    },
    {
      question: 'How is account security handled?',
      answer: 'You retain control of your Handshake account. I do not need your password, MFA codes, authentication codes, recovery codes, or other sensitive login credentials to provide support. Never submit these credentials through this website or email.',
    },
    {
      question: 'Is this service affiliated with Handshake?',
      answer: 'No. This is an independent support service and is not affiliated with, sponsored by, operated by, or endorsed by Handshake.',
    },
    {
      question: 'Are jobs or earnings guaranteed?',
      answer: 'No. Jobs, interviews, opportunities, offers, projects, contracts, and earnings depend on many factors and cannot be guaranteed.',
    },
  ];

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    school: '',
    accountStatus: '',
    primaryGoal: '',
    message: '',
    agreement: false,
    honeypot: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (!formData.school.trim()) {
      newErrors.school = 'School is required';
    }

    if (!formData.accountStatus) {
      newErrors.accountStatus = 'Please select your account status';
    }

    if (!formData.primaryGoal.trim()) {
      newErrors.primaryGoal = 'Please select your primary goal';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.agreement) {
      newErrors.agreement = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        school: '',
        accountStatus: '',
        primaryGoal: '',
        message: '',
        agreement: false,
        honeypot: '',
      });
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError('Something went wrong while sending your application. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - FAQ - 42% */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="text-sm font-semibold text-[#0866E5] tracking-wider uppercase mb-3">FREQUENTLY ASKED QUESTIONS</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] mb-8">FAQ</h2>
            <div className="space-y-3">
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
                    className="w-full text-left bg-[#F8FBFF] hover:bg-[#EAF4FF] border border-[#E2E8F0] rounded-xl p-5 transition-colors"
                    aria-expanded={openIndex === index}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#0B1F3A] pr-6 text-sm">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={18} className="text-[#4A5568] flex-shrink-0" />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-4 pt-4 border-t border-[#E2E8F0]"
                        >
                          <p className="text-sm text-[#4A5568] leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Application Form - 58% */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 lg:sticky lg:top-24 h-fit"
          >
            <div id="contact" className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Application received successfully</h3>
                  <p className="text-[#4A5568]">Thank you for reaching out. Your information has been sent and I will contact you using the details you provided.</p>
                </div>
              ) : (
                <>
                  <p className="text-sm font-semibold text-[#0866E5] tracking-wider uppercase mb-3">BECOME A CLIENT</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] mb-2">Let's Get Started</h2>
                  <p className="text-[#4A5568] mb-6">Tell me about your goals and I'll get back to you soon.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#0B1F3A] mb-1">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0866E5] ${errors.fullName ? 'border-red-500' : 'border-[#E2E8F0]'}`}
                          placeholder="Your full name"
                        />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0B1F3A] mb-1">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0866E5] ${errors.email ? 'border-red-500' : 'border-[#E2E8F0]'}`}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#0B1F3A] mb-1">Phone / WhatsApp *</label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0866E5] ${errors.phone ? 'border-red-500' : 'border-[#E2E8F0]'}`}
                          placeholder="+1 234 567 890"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0B1F3A] mb-1">School / University *</label>
                        <input
                          type="text"
                          name="school"
                          value={formData.school}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0866E5] ${errors.school ? 'border-red-500' : 'border-[#E2E8F0]'}`}
                          placeholder="Your school"
                        />
                        {errors.school && <p className="text-red-500 text-xs mt-1">{errors.school}</p>}
                      </div>
                    </div>

                    {/* Handshake Account Status */}
                    <div>
                      <label className="block text-sm font-medium text-[#0B1F3A] mb-1">Do you already have a Handshake account? *</label>
                      <select
                        name="accountStatus"
                        value={formData.accountStatus}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0866E5] ${errors.accountStatus ? 'border-red-500' : 'border-[#E2E8F0]'}`}
                      >
                        <option value="">Select an option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Not yet, but I plan to create one">Not yet, but I plan to create one</option>
                      </select>
                      {errors.accountStatus && <p className="text-red-500 text-xs mt-1">{errors.accountStatus}</p>}
                    </div>

                    {/* Primary Goal */}
                    <div>
                      <label className="block text-sm font-medium text-[#0B1F3A] mb-1">Primary Goal / Type of Support</label>
                      <select
                        name="primaryGoal"
                        value={formData.primaryGoal}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0866E5] ${errors.primaryGoal ? 'border-red-500' : 'border-[#E2E8F0]'}`}
                      >
                        <option value="">Select your goal</option>
                        <option value="Profile Optimization">Profile Optimization</option>
                        <option value="Opportunity Support">Opportunity Support</option>
                        <option value="Application Support">Application Support</option>
                        <option value="Organization & Workflow">Organization & Workflow</option>
                        <option value="General Guidance">General Guidance</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.primaryGoal && <p className="text-red-500 text-xs mt-1">{errors.primaryGoal}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-[#0B1F3A] mb-1">Short Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0866E5] ${errors.message ? 'border-red-500' : 'border-[#E2E8F0]'}`}
                        placeholder="Tell me a little about your goals and the support you're looking for..."
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    {/* Agreement */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="agreement"
                          checked={formData.agreement}
                          onChange={handleCheckboxChange}
                          className={`mt-1 w-4 h-4 rounded border ${errors.agreement ? 'border-red-500' : 'border-[#E2E8F0]'} focus:ring-2 focus:ring-[#0866E5]`}
                        />
                        <span className="text-sm text-[#4A5568]">
                          I understand that this is an independent service, that I remain responsible for my Handshake account and compliance with applicable platform requirements, and that no job or earnings are guaranteed.
                        </span>
                      </label>
                      {errors.agreement && <p className="text-red-500 text-xs mt-1">{errors.agreement}</p>}
                    </div>

                    {/* Honeypot */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0866E5] hover:bg-[#0750B8] text-white font-semibold py-4 px-6 rounded-lg transition-colors disabled:bg-[#94a3b8] disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Application →'}
                    </button>

                    {submitError && (
                      <div className="flex items-center gap-2 text-red-500 text-sm">
                        <AlertCircle size={16} />
                        {submitError}
                      </div>
                    )}

                    {/* Security Notice */}
                    <div className="flex items-start gap-2 text-xs text-[#4A5568] mt-4">
                      <Lock size={14} className="flex-shrink-0 mt-0.5" />
                      <p>Please do not share passwords, MFA codes, authentication codes, recovery codes, or other sensitive login credentials.</p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
