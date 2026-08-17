import React from 'react';
import { ArrowRight, Download, Terminal, Layers, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative bg-navy-900 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Text & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-700/60 border border-sky-300/20 text-sky-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck size={14} className="text-accent" />
            Gobernanza TI & Automatización de Infraestructura
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Liderazgo PMO & Integración <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-300 to-accent">DevOps Enterprise</span>
          </h1>

          <p className="text-lg text-sky-100/80 max-w-2xl leading-relaxed">
            Conecto la estrategia ejecutiva y la gobernanza de proyectos con la ingeniería de software moderna, pipelines CI/CD automatizados y arquitectura en la nube de alta disponibilidad.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold text-base transition-all shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              Explorar Proyectos
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-700/80 hover:bg-navy-700 text-sky-100 border border-sky-300/20 font-semibold text-base transition-all hover:-translate-y-0.5"
            >
              <Download size={18} />
              Descargar CV / Contacto
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-navy-700/50">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-sky-300">15+</div>
              <div className="text-xs text-sky-100/60">Años Experiencia TI</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-accent">45%</div>
              <div className="text-xs text-sky-100/60">Optimización CI/CD</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-teal-300">100%</div>
              <div className="text-xs text-sky-100/60">Gobernanza de Proyectos</div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md p-6 rounded-2xl bg-gradient-to-b from-navy-700/80 to-navy-900 border border-sky-300/20 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between pb-4 border-b border-navy-700">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-xs font-mono text-sky-300/70">devops-pmo-pipeline.ts</span>
            </div>

            <div className="py-6 space-y-4 font-mono text-sm">
              <div className="flex items-center gap-3 text-sky-300">
                <Terminal size={18} className="text-accent" />
                <span>$ init pmo-governance --agile</span>
              </div>
              <div className="p-3 rounded-lg bg-navy-900/80 text-sky-100/90 text-xs leading-relaxed border border-navy-700">
                <p className="text-green-400">✓ OKRs & KPIs Sincronizados</p>
                <p className="text-sky-300">✓ Pipelines Kubernetes & Docker Desplegados</p>
                <p className="text-accent">✓ Control de Riesgos & Entregables Activo</p>
              </div>
              <div className="flex items-center justify-between text-xs text-sky-100/60 pt-2">
                <span className="flex items-center gap-1">
                  <Layers size={14} className="text-teal-300" /> Multi-Cloud Ready
                </span>
                <span className="text-accent font-semibold">Status: Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
