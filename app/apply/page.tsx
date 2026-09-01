'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ApplyPage() {
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
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.school.trim()) {
      newErrors.school = 'School/University is required';
    }

    if (!formData.accountStatus) {
      newErrors.accountStatus = 'Please select your Handshake account status';
    }

    if (!formData.primaryGoal.trim()) {
      newErrors.primaryGoal = 'Primary goal is required';
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
      setSubmitError('Something went wrong while sending your application. Please try again or contact us directly at smartassignmentsolver@gmail.com.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
    // Clear error when user checks
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-20 bg-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full mx-4 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle2 size={32} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-[#0B1220] mb-4">Application Received</h1>
            <p className="text-lg text-[#64748B] mb-8">
              Thank you for reaching out. Your information has been sent and I will contact you using the details you provided.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Return to Home
            </a>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1220] mb-4">Become a Client</h1>
            <p className="text-lg text-[#64748B]">
              Complete the short application below and I'll review your information.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Honeypot field for spam protection */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-[#111827] mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.fullName ? 'border-red-500' : 'border-[#e5e7eb]'
                } focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-colors`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#111827] mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-[#e5e7eb]'
                } focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-colors`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#111827] mb-2">
                Phone / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.phone ? 'border-red-500' : 'border-[#e5e7eb]'
                } focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-colors`}
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="school" className="block text-sm font-medium text-[#111827] mb-2">
                School / University <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="school"
                name="school"
                value={formData.school}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.school ? 'border-red-500' : 'border-[#e5e7eb]'
                } focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-colors`}
                placeholder="Enter your school or university"
              />
              {errors.school && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.school}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="accountStatus" className="block text-sm font-medium text-[#111827] mb-2">
                Handshake Account Status <span className="text-red-500">*</span>
              </label>
              <select
                id="accountStatus"
                name="accountStatus"
                value={formData.accountStatus}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.accountStatus ? 'border-red-500' : 'border-[#e5e7eb]'
                } focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-colors bg-white`}
              >
                <option value="">Select an option</option>
                <option value="existing">Yes, I already have a Handshake account</option>
                <option value="new">No, I don't have a Handshake account</option>
                <option value="planning">Not yet, but I plan to create one</option>
              </select>
              {errors.accountStatus && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.accountStatus}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="primaryGoal" className="block text-sm font-medium text-[#111827] mb-2">
                Primary Goal / Type of Support <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="primaryGoal"
                name="primaryGoal"
                value={formData.primaryGoal}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.primaryGoal ? 'border-red-500' : 'border-[#e5e7eb]'
                } focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-colors`}
                placeholder="e.g., Profile optimization, opportunity monitoring, application support"
              />
              {errors.primaryGoal && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.primaryGoal}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#111827] mb-2">
                Short Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-[#e5e7eb]'
                } focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-colors resize-none`}
                placeholder="Tell me a bit about your situation and what you're looking for..."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.message}
                </p>
              )}
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleCheckboxChange}
                  className={`mt-1 w-5 h-5 rounded border ${
                    errors.agreement ? 'border-red-500' : 'border-[#e5e7eb]'
                  } focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer`}
                />
                <span className="text-sm text-[#64748B] leading-relaxed">
                  I understand that this is an independent service, that I remain responsible for my Handshake account and compliance with applicable platform rules, and that no job or earnings are guaranteed.
                </span>
              </label>
              {errors.agreement && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.agreement}
                </p>
              )}
            </div>

            <div className="bg-[#FEF3C7] border border-[#FCD34D] rounded-lg p-4">
              <p className="text-sm text-[#92400E]">
                <strong>Privacy Notice:</strong> Do not submit passwords or authentication codes through this form. 
                I only collect the information necessary to evaluate your application.
              </p>
            </div>

            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {submitError}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] disabled:bg-[#94a3b8] disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Sending...' : 'Submit Application →'}
            </button>
          </motion.form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
