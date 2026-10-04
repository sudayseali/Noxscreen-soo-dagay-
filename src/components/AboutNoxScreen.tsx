/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Youtube, Music, Film, Check, EyeOff, Layers, Sliders } from 'lucide-react';

export const AboutNoxScreen: React.FC = () => {
  return (
    <section id="waa-maxay" className="py-16 sm:py-24 border-t border-slate-900 bg-gradient-to-b from-[#030712] via-slate-950 to-[#030712]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            <EyeOff className="h-4 w-4" />
            <span>Fikradda Ka Dambaysa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
            NOXSCREEN WAA MAXAY?
          </h2>

          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
            NoXScreen waa app kuu oggolaanaya inaad shaashadda madoobayso iyadoo codka aad dhagaysanayso ama shaqadaadu ay si toos ah u sii soconayaan.
          </p>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Tusaale ahaan, haddii aad YouTube, Facebook, Gallery ama meel kale wax ka dhagaysanayso, waxaad shaashadda ka dhigi kartaa madow adigoon khasab ku noqon inaad wax kasta joojiso.
          </p>
        </div>

        {/* 3 Step Practical Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-cyan-400 font-bold font-mono">
                01
              </div>
              <h3 className="text-base font-bold text-white">Fur waxa aad rabto</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Ka daar muuqaalka, muxaadarada, ama codka aad doonayso YouTube, baraha bulshada, ama faylashaada gaarka ah.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-xs text-slate-500 border-t border-slate-800/60 mt-4">
              <Youtube className="h-3.5 w-3.5 text-red-400" />
              <span>YouTube & Cajalado</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-cyan-500/30 glow-subtle flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold font-mono">
                02
              </div>
              <h3 className="text-base font-bold text-white">Madoobee shaashadda</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Hal taabasho oo fudud ku dami iftiinka shaashadda. App-ku wuxuu abuuraa daah madow oo AMOLED ah.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-xs text-cyan-400 border-t border-slate-800/60 mt-4">
              <EyeOff className="h-3.5 w-3.5" />
              <span>Xakamayn toos ah</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-emerald-400 font-bold font-mono">
                03
              </div>
              <h3 className="text-base font-bold text-white">Khibraddu way sii socotaa</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Codku ma kala go’ayo, taleefankana waxaad ku ridi kartaa jeebkaaga adigoon ka baqayn taabasho khaldan.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-xs text-emerald-400 border-t border-slate-800/60 mt-4">
              <Check className="h-3.5 w-3.5" />
              <span>Dhib la’aan & xasilooni</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
