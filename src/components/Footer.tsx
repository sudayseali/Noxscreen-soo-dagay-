/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Moon } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 bg-black py-12 text-center select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        {/* Brand */}
        <div className="inline-flex items-center gap-2 text-white font-display font-bold text-lg">
          <Moon className="h-5 w-5 text-cyan-400" />
          <span>NoXScreen</span>
        </div>

        {/* Tagline */}
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Shaashaddu way madoobaanaysaa. Dhagaysiguna wuu sii soconayaa.
        </p>

        {/* Developer attribution (subtle and beautiful as requested) */}
        <div className="pt-2 text-xs text-slate-500 font-medium">
          Waxaa soo saaray <span className="text-slate-300 font-semibold">c/kariim</span>
        </div>

        {/* Copyright */}
        <div className="text-[11px] text-slate-600">
          © 2026 NoXScreen
        </div>
      </div>
    </footer>
  );
};
