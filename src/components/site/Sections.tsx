import React from 'react';
import { ArrowUpRight, Cpu, Globe, Server, Database, Sparkles, CheckCircle2 } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'Luxevia Global',
    category: 'High-Scale E-Commerce & Systems',
    description: 'Sub-second catalog search, headless checkout pipeline, aur dynamic localized pricing system for enterprise luxury retail.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis Cache'],
    metrics: '99.98% Uptime | <45ms API Latency',
    link: '#',
  },
  {
    title: 'ShopTop Engine',
    category: 'Distributed Marketplace Architecture',
    description: 'Microservices-based order processing system handling high-concurrency peak traffic with automated webhook reconciliations.',
    tags: ['TypeScript', 'Tailwind CSS', 'Docker', 'REST APIs'],
    metrics: '3.4x Faster TTFB | Zero Hydration Mismatch',
    link: '#',
  },
  {
    title: 'USA Luxe Portal',
    category: 'Client Portal & Internal SaaS',
    description: 'Bespoke administrative dashboard with role-based access control (RBAC), analytical data grids, and auditable event logs.',
    tags: ['React', 'Express', 'Tailwind', 'Zod Validation'],
    metrics: 'SOC-2 Compliant Patterns | 100% WCAG AA',
    link: '#',
  },
];

const capabilities = [
  {
    icon: Globe,
    title: 'Frontend Engineering',
    description: 'Component architecture engineered for zero CLS (Cumulative Layout Shift), optimal INP, and micro-interaction responsiveness.',
  },
  {
    icon: Server,
    title: 'Backend Systems & APIs',
    description: 'Deterministic REST/GraphQL architectures with defensive rate limiting, unified error layers, and strict input validation schemas.',
  },
  {
    icon: Database,
    title: 'Database Architecture',
    description: 'Normalized, high-throughput relational & document databases indexed to eliminate N+1 traps and lock contention.',
  },
  {
    icon: Cpu,
    title: 'Autonomous Tooling & Integrations',
    description: 'Production-ready function calling interfaces, strict JSON schemas, and deterministic automation pipelines.',
  },
];

export const Sections: React.FC = () => {
  return (
    <div className="w-full bg-[#05070B] text-slate-100 py-16 px-6 sm:px-10 lg:px-16 space-y-32">
      
      {/* SECTION 1: Capabilities & Architecture (Bento Grid) */}
      <section id="capabilities" className="max-w-7xl mx-auto scroll-mt-28">
        <div className="flex flex-col items-start max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-400/20 bg-sky-400/5 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Core Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            High-Performance Systems. <br className="hidden sm:inline" />
            <span className="text-slate-400 font-normal">Engineered without shortcuts.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-[#0A0F19]/80 border border-white/5 transition-all duration-300 hover:border-sky-500/30 hover:bg-[#0E1524] hover:shadow-[0_0_30px_rgba(56,189,248,0.06)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 text-sky-400 group-hover:scale-110 group-hover:text-white group-hover:bg-sky-500 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-sky-400 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-sky-400/60" /> Production Audited &amp; Battle-Tested
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: Featured Work & Systems Showcase */}
      <section id="work" className="max-w-7xl mx-auto scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-400/20 bg-sky-400/5 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Selected Deployments
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Production web platforms built for reliability, accessibility, and high conversion throughput.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <article
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#0A0F19] border border-white/10 p-8 transition-all duration-300 hover:border-sky-400/40 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              <div>
                <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
                  {proj.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4 tracking-tight flex items-center justify-between">
                  {proj.title}
                  <ArrowUpRight className="w-5 h-5 text-slate-500 transition-transform duration-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-white/5 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-1">Impact Metric</span>
                  <span className="text-xs font-semibold text-emerald-400">{proj.metrics}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 3: High-Conversion CTA Panel */}
      <section id="contact" className="max-w-7xl mx-auto scroll-mt-28">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0E1526] to-[#0A0F19] p-10 sm:p-16 text-center">
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/10 blur-[120px] rounded-full" 
          />
          <h2 className="relative text-3xl sm:text-5xl font-black text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Ready to architect your next digital leap?
          </h2>
          <p className="relative mt-6 text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            CraftLogic delivers end-to-end full stack architecture for startups, enterprises, and ambitious digital brands.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@craftlogic.agency"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(56,189,248,0.25)]"
            >
              Start an Architectural Consultation
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};