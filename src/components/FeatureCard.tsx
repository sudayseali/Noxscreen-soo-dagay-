/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BatteryCharging, Headphones, Smartphone, Moon } from 'lucide-react';

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  accent: string;
}

const features: FeatureItem[] = [
  {
    icon: BatteryCharging,
    title: "BADBAADINTA BAYTARIGA",
    description:
      "Shaashad madow waxay si gaar ah faa'iido ugu yeelan kartaa taleefannada leh AMOLED/OLED, halka pixels-ka madow ay isticmaali karaan tamar yar.",
    accent: "text-emerald-400 group-hover:text-emerald-300",
  },
  {
    icon: Headphones,
    title: "DHAGEYSO ADIGOON SHAASHAD U BAAHNAYN",
    description:
      "Dhagayso waxyaabaha aad rabto adigoon shaashad ifaysa mar kasta u baahnayn.",
    accent: "text-cyan-400 group-hover:text-cyan-300",
  },
  {
    icon: Smartphone,
    title: "JEEBKAAGA KU QAADO",
    description:
      "Marka taleefanka jeebka lagu jiro, shaashaddu uma baahna inay mar kasta ifto.",
    accent: "text-blue-400 group-hover:text-blue-300",
  },
  {
    icon: Moon,
    title: "SHAASHAD NADIIF AH",
    description:
      "Markaad rabto shaashad madow oo aan ku mashquulin, NoXScreen ayaa kuu fududaynaya.",
    accent: "text-indigo-400 group-hover:text-indigo-300",
  },
];

export const FeatureCard: React.FC = () => {
  return (
    <section id="faaidooyinka" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase font-display">
            Ujeeddada & Faa'iidooyinka
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
            MAXAA LOOGU TALAGALAY?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Afar sababood oo waawayn oo aad ugu baahan doonto NoXScreen maalin kasta.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/[0.03] group-hover:bg-cyan-500/[0.07] rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                <div className="h-12 w-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Icon className={`h-6 w-6 ${feature.accent} transition-colors`} />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
