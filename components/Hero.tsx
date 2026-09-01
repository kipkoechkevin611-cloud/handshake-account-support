'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function Hero() {

  return (
    <section className="pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Handshake Support That Helps You Stay Opportunity-Ready
            </h1>
            <p className="text-lg sm:text-xl text-[#94a3b8] mb-8 leading-relaxed">
              I help students, graduates, and professionals optimize their Handshake presence, organize opportunities, prepare stronger applications, and stay on top of their career workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button href="/apply" variant="primary">
                Become a Client
              </Button>
              <Button href="#how-it-works" variant="secondary">
                How It Works
              </Button>
            </div>
            <div className="text-sm text-[#94a3b8] mb-6 font-medium">
              Independent service. Client-owned accounts. Transparent 50/50 partnership.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { text: 'You retain ownership of your account' },
                { text: 'Clear and transparent agreement' },
                { text: '50/50 partnership on agreed eligible earnings' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 text-xs sm:text-sm text-[#94a3b8]"
                >
                  <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
            <div className="bg-[#1e293b]/50 border border-[#334155] rounded-lg p-4 text-xs text-[#94a3b8]">
              Independent support service. Not affiliated with or endorsed by Handshake. Clients remain responsible for complying with Handshake's Terms of Service and applicable university or employer requirements.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#1e293b] rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              <div className="flex gap-4 h-full">
                {/* Sidebar */}
                <div className="hidden sm:flex flex-col gap-2 w-32 flex-shrink-0">
                  {['Overview', 'Profile', 'Opportunities', 'Applications', 'Messages', 'Documents', 'Settings'].map((item, index) => (
                    <div
                      key={item}
                      className={`text-xs font-medium px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                        index === 0 ? 'bg-[#2563EB] text-white' : 'text-[#94a3b8] hover:bg-[#334155]'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 space-y-4">
                  {/* Welcome */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white text-sm text-[#94a3b8]">Welcome back,</div>
                      <div className="text-white text-lg font-semibold">Alex</div>
                    </div>
                    <div className="w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">A</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-[#0B1220] rounded-lg p-3">
                      <div className="text-[#94a3b8] text-xs mb-1">Profile Strength</div>
                      <div className="text-white font-bold text-lg">85%</div>
                      <div className="text-green-400 text-xs">Excellent</div>
                    </div>
                    <div className="bg-[#0B1220] rounded-lg p-3">
                      <div className="text-[#94a3b8] text-xs mb-1">Opportunities</div>
                      <div className="text-white font-bold text-lg">12</div>
                      <div className="text-[#2563EB] text-xs">new</div>
                    </div>
                    <div className="bg-[#0B1220] rounded-lg p-3">
                      <div className="text-[#94a3b8] text-xs mb-1">Applications</div>
                      <div className="text-white font-bold text-lg">8</div>
                      <div className="text-[#2563EB] text-xs">active</div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-[#0B1220] rounded-lg p-3">
                    <div className="text-white text-xs font-semibold mb-3">Recent Activity</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-[#94a3b8] text-xs">Software Engineer Intern</div>
                        <div className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-0.5 rounded">In Review</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-[#94a3b8] text-xs">Data Analyst Role</div>
                        <div className="bg-blue-500/20 text-blue-400 text-xs px-2 py-0.5 rounded">Screening</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-[#94a3b8] text-xs">Product Manager</div>
                        <div className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded">Submitted</div>
                      </div>
                    </div>
                  </div>

                  {/* Reminders */}
                  <div className="bg-[#0B1220] rounded-lg p-3">
                    <div className="text-white text-xs font-semibold mb-3">Reminders</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
                        <div className="text-[#94a3b8] text-xs">Update profile summary</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
                        <div className="text-[#94a3b8] text-xs">Review new opportunities</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
