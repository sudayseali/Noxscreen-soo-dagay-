/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, ShieldAlert, Cpu, CheckCircle } from 'lucide-react';

export const SixMonths: React.FC = () => {
  return (
    <section id="6-bilood" className="py-20 sm:py-28 relative overflow-hidden bg-slate-950/70 border-y border-slate-900">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-950/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
        {/* Subtle kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
          <Calendar className="h-4 w-4" />
          <span>Socdaalka Dhismaha</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-display tracking-tight leading-tight">
          6 BILOOD OO SHAQO AH.
          <br />
          <span className="text-cyan-400">HAL UJEEDDO.</span>
        </h2>

        {/* Main Text */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          NoXScreen ma ahayn app hal habeen lagu sameeyay. Muddo 6 bilood ah ayaan ku dhisaynay, ku tijaabinaynay, kuna hagaajinaynay fikradda ka dambaysa app-kan.
        </p>

        {/* Subtle milestones line */}
        <div className="py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="text-xs font-mono text-cyan-400">01 / Dhisid</span>
            <p className="text-sm font-semibold text-white mt-1">Cilmi-baaris & Fikrad</p>
            <p className="text-xs text-slate-400 mt-1">Dhismaha xalka ugu fudud uguna awoodda badan.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="text-xs font-mono text-cyan-400">02 / Tijaabo</span>
            <p className="text-sm font-semibold text-white mt-1">Hagaajin Joogto ah</p>
            <p className="text-xs text-slate-400 mt-1">Tijaabooyin xaqiijinaya in codka iyo nidaamku si qumman u wada shaqeeyaan.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/30">
            <span className="text-xs font-mono text-emerald-400">03 / Diyaar</span>
            <p className="text-sm font-semibold text-white mt-1">Maalmaha Ugu Dambeeya</p>
            <p className="text-xs text-slate-400 mt-1">Hadda waxaa lagu jiraa u diyaar-garowga soo-bixitaanka rasmiga ah.</p>
          </div>
        </div>

        {/* Countdown anticipation */}
        <div className="space-y-4 pt-4">
          <p className="text-sm sm:text-base text-slate-300 font-medium">
            Hadda waxaad joogtaa maalmaha ugu dambeeya ee sugitaanka.
          </p>

          <div className="text-3xl sm:text-5xl font-black tracking-widest text-transparent bg-gradient-to-r from-cyan-400 via-white to-emerald-400 bg-clip-text font-display">
            WUU SOO DHOW YAHAY.
          </div>
        </div>
      </div>
    </section>
  );
};
