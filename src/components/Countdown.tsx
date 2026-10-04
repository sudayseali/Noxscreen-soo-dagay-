/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CountdownTime } from '../hooks/useCountdown';
import { APKPURE_DOWNLOAD_URL } from '../config/launchConfig';
import { Download, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

interface CountdownProps {
  time: CountdownTime;
  isCompact?: boolean;
}

export const Countdown: React.FC<CountdownProps> = ({ time, isCompact = false }) => {
  if (time.isLaunched) {
    return (
      <div className="w-full max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-cyan-950/40 via-slate-900/60 to-slate-950 border border-cyan-500/30 glow-cyan">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Si rasmi ah loo sii daayay</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            NOXSCREEN WUU SOO BAXAY! 🎉
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-lg mx-auto leading-relaxed pt-2">
            Waqtigii sugitaanka wuu dhammaaday. Hadda waad soo dejisan kartaa NoXScreen.
          </p>

          <div className="pt-6">
            <a
              href={APKPURE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-bold text-base sm:text-lg shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 active:scale-[0.98]"
            >
              <Download className="h-5 w-5 stroke-[2.5]" />
              <span>SOO DEJISO NOXSCREEN</span>
            </a>
            <p className="text-xs text-slate-400 mt-3">
              Waxaa laga helayaa APKPure
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto text-center space-y-8">
      {/* Title */}
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400 tracking-widest uppercase">
          <Clock className="h-3.5 w-3.5" />
          <span>Waqtiga rasmiga ah</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
          NOXSCREEN WUXUU SOO BAXAYAA
        </h2>
      </div>

      {/* 4 Premium Countdown Boxes: MAALMOOD | SAAC | DAQIIQO | ILBIRIQSI */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
        {/* Days */}
        <div className="relative group p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-700/60 shadow-lg backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:border-cyan-500/40">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          <span className="font-mono-numbers text-4xl sm:text-6xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            {time.days}
          </span>
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400 mt-2">
            MAALMOOD
          </span>
        </div>

        {/* Hours */}
        <div className="relative group p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-700/60 shadow-lg backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:border-cyan-500/40">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          <span className="font-mono-numbers text-4xl sm:text-6xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            {time.hours}
          </span>
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400 mt-2">
            SAAC
          </span>
        </div>

        {/* Minutes */}
        <div className="relative group p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-700/60 shadow-lg backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:border-cyan-500/40">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          <span className="font-mono-numbers text-4xl sm:text-6xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            {time.minutes}
          </span>
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400 mt-2">
            DAQIIQO
          </span>
        </div>

        {/* Seconds */}
        <div className="relative group p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-700/60 shadow-lg backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:border-cyan-500/40">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          <span className="font-mono-numbers text-4xl sm:text-6xl font-bold tracking-tight text-cyan-400 transition-colors">
            {time.seconds}
          </span>
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400 mt-2">
            ILBIRIQSI
          </span>
        </div>
      </div>

      {/* Pre-launch messaging (as strictly requested: no fake download button!) */}
      <div className="space-y-2 pt-2">
        <div className="inline-block text-sm sm:text-base font-bold text-cyan-300 tracking-wide">
          WAX YAR AYAA HARAY
        </div>
        <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto">
          NoXScreen wuxuu kuu imaanayaa wax ka yar 6 maalmood gudahood.
        </p>
        <p className="text-xs sm:text-sm text-slate-400 italic">
          Waa wax u qalma sugitaanka.
        </p>
      </div>
    </div>
  );
};
