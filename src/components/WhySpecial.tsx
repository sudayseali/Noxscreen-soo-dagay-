/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { EyeOff, SlidersHorizontal, ShieldCheck, Zap, Palette } from 'lucide-react';

interface SpecialFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const specialList: SpecialFeature[] = [
  {
    icon: EyeOff,
    title: "Shaashad madow",
    description: "Madoobaan buuxda oo qotodheer oo AMOLED ah, iyadoo aan iftiin dhibaya soo bixin.",
  },
  {
    icon: SlidersHorizontal,
    title: "Xakamaynta shaashadda",
    description: "Xakamee oo madoobee shaashadda hal taabasho oo sahlan.",
  },
  {
    icon: ShieldCheck,
    title: "Isticmaalka jeebka",
    description: "Kaga difaac taleefanka taabashooyinka aan loo baahnayn marka uu jeebkaaga ku jiro.",
  },
  {
    icon: Zap,
    title: "Khibrad fudud",
    description: "App degdeg ah oo fudud, oo aan lahayn wax adag ama dhibaato ah.",
  },
  {
    icon: Palette,
    title: "Naqshad casri ah",
    description: "Naqshad nadiif ah, heer sare ah, oo loogu talagalay qof kasta.",
  },
];

export const WhySpecial: React.FC = () => {
  return (
    <section id="gaar" className="py-16 sm:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase font-display">
            Astaamaha Muhiimka ah
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            MAXAA KA DHIGAYA NOXSCREEN MID GAAR AH?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Fikir fudud oo loo fuliyay si tayo sare leh oo xirfadaysan.
          </p>
        </div>

        {/* Clean 5 items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {specialList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 ${
                  idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="h-10 w-10 rounded-xl bg-slate-800/80 border border-white/5 flex items-center justify-center text-cyan-400 mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
