import React from 'react';
import { DiagonalSection } from '../ui/DiagonalSection';
import { Target, Cpu, CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <DiagonalSection id="about" tilt="down" bgClassName="bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-navy-900">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900">
            Sobre Mí
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-navy-700/80 leading-relaxed">
            Ingeniero y Coordinador de Proyectos TI enfocado en la convergencia entre estrategia organizacional, agilidad y automatización técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Detailed Paragraphs */}
          <div className="space-y-4 text-navy-900/90 leading-relaxed">
            <p>
              Cuento con una trayectoria sólida liderando la planificación, ejecución y gobernanza de proyectos de transformación digital. Mi enfoque integra metodologías ágiles (Scrum, Kanban) con marcos de control de PMO para asegurar visibilidad en tiempo real y cumplimiento estricto de hitos.
            </p>
            <p>
              Apasionado por la cultura DevOps, promuevo la automatización continua (CI/CD), la infraestructura como código (IaC) y arquitecturas basadas en contenedores para reducir tiempos de salida a producción y mitigar riesgos operativos.
            </p>

            <ul className="space-y-3 pt-4">
              {[
                'Gestión integral de portafolios y gobernanza PMO Enterprise.',
                'Diseño de arquitectura CI/CD y despliegue automatizado en la nube.',
                'Liderazgo de equipos multidisciplinarios de ingeniería y desarrollo.',
                'Optimización continua de procesos operativos e indicadores de calidad.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-medium text-navy-900">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-navy-900/5 flex items-center justify-center text-navy-700 mb-4">
                <Target size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Visión Estratégica PMO</h3>
              <p className="text-xs text-navy-700/70 mt-2 leading-relaxed">
                Alineación de objetivos de negocio con indicadores clave (OKRs), mitgación activa de riesgos y comunicación transparente con directivos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-navy-900/5 flex items-center justify-center text-navy-700 mb-4">
                <Cpu size={24} className="text-teal-500" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">DevOps & Cloud</h3>
              <p className="text-xs text-navy-700/70 mt-2 leading-relaxed">
                Implementación de pipelines de automatización resilietes, contenedorización y monitorización de infraestructura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DiagonalSection>
  );
}
