/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CountdownTime } from '../hooks/useCountdown';
import { APKPURE_DOWNLOAD_URL } from '../config/launchConfig';
import { Download, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

interface FinalCountdownProps {
  time: CountdownTime;
}

export const FinalCountdown: React.FC<FinalCountdownProps> = ({ time }) => {
  return (
    <section id="countdown-ugu-dambeeya" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#030712] via-slate-950 to-black">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {time.isLaunched ? (
          /* Launch State */
          <div className="space-y-6 max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-cyan-500/40 glow-cyan">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <CheckCircle2 className="h-4 w-4" />
              <span>Hadda waa diyaar</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight">
              NOXSCREEN WUU SOO BAXAY! 🎉
            </h2>

            <p className="text-base sm:text-xl text-slate-300 max-w-lg mx-auto leading-relaxed">
              Sugitaankii wuu dhammaaday. Hadda waxaad bilaabi kartaa isticmaalka NoXScreen.
            </p>

            <div className="pt-6">
              <a
                href={APKPURE_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-bold text-base sm:text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/40 transition-all duration-300 active:scale-[0.98]"
              >
                <Download className="h-5 w-5 stroke-[2.5]" />
                <span>SOO DEJISO NOXSCREEN</span>
              </a>
              <p className="text-xs text-slate-400 mt-3 font-medium">
                Ka soo degso APKPure (com.noxscreen.app)
              </p>
            </div>
          </div>
        ) : (
          /* Pre-Launch Countdown State */
          <div className="space-y-8">
            <div className="space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase font-display">
                <Clock className="h-4 w-4" />
                <span>Tirinta Ugu Dambaysa</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
                WAX YAR AYAA HARAY.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                6 bilood oo shaqo ah waxay ku soo dhowaanayaan maalinta la idinla wadaagi doono NoXScreen.
              </p>
            </div>

            {/* Countdown Grid (Uses same state) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
              <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-xl">
                <span className="font-mono-numbers text-4xl sm:text-6xl font-bold tracking-tight text-white">
                  {time.days}
                </span>
                <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400 mt-2">
                  MAALMOOD
                </span>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-xl">
                <span className="font-mono-numbers text-4xl sm:text-6xl font-bold tracking-tight text-white">
                  {time.hours}
                </span>
                <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400 mt-2">
                  SAAC
                </span>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-xl">
                <span className="font-mono-numbers text-4xl sm:text-6xl font-bold tracking-tight text-white">
                  {time.minutes}
                </span>
                <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400 mt-2">
                  DAQIIQO
                </span>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-xl">
                <span className="font-mono-numbers text-4xl sm:text-6xl font-bold tracking-tight text-cyan-400">
                  {time.seconds}
                </span>
                <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400 mt-2">
                  ILBIRIQSI
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 italic">
              Sugitaankaagu wuxuu leeyahay sabab.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
