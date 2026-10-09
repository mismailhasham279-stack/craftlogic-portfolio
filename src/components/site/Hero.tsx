import React from 'react';
import { ArrowUpRight, ShieldCheck, Terminal, Sparkles, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden luxury-noise px-6 pt-32 pb-20">
      {/* Dynamic Ambient Blur Spheres */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-sky-500/20 to-transparent blur-[140px] rounded-full" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-10 right-10 w-[350px] h-[350px] bg-sky-500/10 blur-[100px] rounded-full" 
      />

      <div className="relative max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Elite Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8 animate-fade-in shadow-inner">
          <Sparkles className="w-4 h-4 text-sky-400" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-300">
            CraftLogic &bull; Engineering &amp; Architecture
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-5xl leading-[1.04]">
          Engineered for Scale.{' '}
          <span className="block bg-gradient-to-r from-sky-400 via-indigo-300 to-white bg-clip-text text-transparent">
            Designed for Impact.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed">
          CraftLogic bridges enterprise-grade backend infrastructure with bespoke, ultra-responsive digital systems. Zero bloat. Sub-50ms latency. Pure performance.
        </p>

        {/* Action Controls */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#work"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-slate-950 font-semibold text-sm transition-all duration-300 hover:bg-slate-200 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.25)]"
          >
            Explore Client Systems
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border border-white/15 bg-white/[0.02] hover:bg-white/[0.07] text-white font-medium text-sm transition-all duration-300 backdrop-blur-md"
          >
            <Terminal className="w-4 h-4 text-sky-400" />
            Discuss Architecture
          </a>
        </div>

        {/* Production Metrics Grid */}
        <div className="mt-20 w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl pt-10 border-t border-white/10">
          {[
            { metric: '99+', label: 'Performance Score', icon: ShieldCheck },
            { metric: '<50ms', label: 'Edge TTFB Overhead', icon: Terminal },
            { metric: '100%', label: 'Type-Safe Architecture', icon: Layers },
            { metric: 'SLA 99.9%', label: 'Infrastructure Resiliency', icon: Sparkles },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center p-4 rounded-xl bg-white/[0.01] border border-white/5">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{item.metric}</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};