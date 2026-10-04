/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Moon } from 'lucide-react';

interface NavbarProps {
  isLaunched: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isLaunched }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#030712]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-slate-900 to-black border border-cyan-500/40 flex items-center justify-center shadow-lg group-hover:border-cyan-400 transition-colors">
            <Moon className="h-5 w-5 text-cyan-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              NoXScreen
            </span>
            <span className="text-[10px] text-slate-400 tracking-wider">
              {isLaunched ? 'Wuu soo baxay' : 'Wuu soo dhow yahay'}
            </span>
          </div>
        </a>

        {/* Navigation links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <a href="#hordhac" className="hover:text-cyan-400 transition-colors">
            Countdown
          </a>
          <a href="#waa-maxay" className="hover:text-cyan-400 transition-colors">
            Waa maxay?
          </a>
          <a href="#faaidooyinka" className="hover:text-cyan-400 transition-colors">
            Maxaa loogu talagalay?
          </a>
          <a href="#6-bilood" className="hover:text-cyan-400 transition-colors">
            6 Bilood
          </a>
          <a href="#gaar" className="hover:text-cyan-400 transition-colors">
            Maxaa gaar ka dhigaya?
          </a>
        </nav>

        {/* Status indicator (Synchronized with Server) */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
            <span 
              className={`h-2 w-2 rounded-full ${isLaunched ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'}`} 
            />
            <span className="hidden sm:inline">
              {isLaunched ? 'Wuu soo baxay' : 'Dhawaan ayuu soo baxayaa'}
            </span>
            <span className="sm:hidden">
              {isLaunched ? 'Baxay' : 'Dhow'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
