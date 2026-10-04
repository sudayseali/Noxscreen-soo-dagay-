/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useCountdown } from './hooks/useCountdown';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutNoxScreen } from './components/AboutNoxScreen';
import { FeatureCard } from './components/FeatureCard';
import { SixMonths } from './components/SixMonths';
import { WhySpecial } from './components/WhySpecial';
import { FinalCountdown } from './components/FinalCountdown';
import { Footer } from './components/Footer';

export default function App() {
  // Single global source of truth: authoritative server-synchronized countdown
  const time = useCountdown();

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Header */}
      <Navbar isLaunched={time.isLaunched} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section with Headline & Prominent Countdown */}
        <Hero time={time} />

        {/* 2. Waa Maxay Section */}
        <AboutNoxScreen />

        {/* 3. Maxaa Loogu Talagalay (4 Cards) */}
        <FeatureCard />

        {/* 4. 6 Bilood Oo Shaqo Ah. Hal Ujeeddo. */}
        <SixMonths />

        {/* 5. Maxaa Ka Dhigaya NoXScreen Mid Gaar Ah? */}
        <WhySpecial />

        {/* 6. Qaybta Ugu Dambaysa (Final Countdown / Automatic Release State) */}
        <FinalCountdown time={time} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
