/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Countdown } from './Countdown';
import { CountdownTime } from '../hooks/useCountdown';

interface HeroProps {
  time: CountdownTime;
}

export const Hero: React.FC<HeroProps> = ({ time }) => {
  return (
    <section id="hordhac" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-950/20 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-slate-900/40 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Headline & Description as specified */}
        <div className="space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Tirinta Rasmiga ah</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.15]">
            NOXSCREEN WUU SOO DHOW YAHAY
          </h1>

          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto pt-2">
            Muddo 6 bilood ah ayaan ka shaqaynaynay NoXScreen. Hadda waxaa naga xiga oo keliya tirinta waqtiga rasmiga ah ee soo bixitaanka.
          </p>
        </div>

        {/* Central Prominent Countdown */}
        <div className="max-w-3xl mx-auto">
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-950/90 border border-slate-800/90 shadow-2xl backdrop-blur-2xl relative glow-cyan">
            <Countdown time={time} />
          </div>
        </div>
      </div>
    </section>
  );
};
