import React from 'react';
import { DiagonalSection } from '../ui/DiagonalSection';
import skillsData from '@/content/skills.json';
import { Briefcase, GraduationCap, Code2, Award } from 'lucide-react';

export function ExperienceEducationSkills() {
  const experiences = [
    {
      role: 'Coordinador PMO & DevOps Lead',
      company: 'Enterprise Tech Solutions',
      period: '2021 — Presente',
      description: 'Liderazgo de la oficina de gestión de proyectos y automatización de procesos de entrega de software para clientes corporativos.'
    },
    {
      role: 'Senior Project Manager & Cloud Engineer',
      company: 'Digital Innovation Hub',
      period: '2017 — 2021',
      description: 'Supervisión de proyectos de migración a la nube, optimización de infraestructura y dirección de equipos Scrum.'
    },
    {
      role: 'Ingeniero de Software & Systems Specialist',
      company: 'Tech Consultores',
      period: '2012 — 2017',
      description: 'Desarrollo de soluciones web avanzadas, administración de sistemas y mantenimiento de redes corporativas.'
    }
  ];

  const education = [
    {
      title: 'Ingeniería en Sistemas / Informática',
      institution: 'Universidad Nacional',
      year: 'Graduación con Honores'
    },
    {
      title: 'Certificación PMP® & Agile Master',
      institution: 'PMI / Scrum Alliance',
      year: 'Certificado Oficial'
    },
    {
      title: 'AWS Certified Solutions Architect & Kubernetes (CKA)',
      institution: 'Amazon Web Services / CNCF',
      year: 'Certificación Profesional'
    }
  ];

  return (
    <DiagonalSection id="experience" tilt="up" bgClassName="bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Experiencia, Formación & Habilidades
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Work Experience Timeline */}
          <div>
            <div className="flex items-center gap-3 text-sky-300 mb-8">
              <Briefcase size={24} className="text-accent" />
              <h3 className="text-2xl font-bold text-white">Experiencia Profesional</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-navy-700">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-navy-700 border-2 border-accent flex items-center justify-center text-accent">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                  </div>
                  <div className="p-5 rounded-xl bg-navy-700/40 border border-sky-300/10 hover:border-sky-300/30 transition-colors">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-1">
                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-navy-900 text-sky-300 border border-sky-300/20">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-teal-300 mb-2">{exp.company}</div>
                    <p className="text-xs text-sky-100/70 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <div className="flex items-center gap-3 text-sky-300 mb-8">
              <GraduationCap size={24} className="text-teal-300" />
              <h3 className="text-2xl font-bold text-white">Educación & Certificaciones</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-navy-700/40 border border-sky-300/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-300/30 flex items-center justify-center text-teal-300 shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{item.title}</h4>
                    <div className="text-xs text-sky-300 mt-1">{item.institution}</div>
                    <div className="text-xs text-sky-100/60 mt-1">{item.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div className="pt-8 border-t border-navy-700/60">
          <div className="flex items-center justify-center gap-3 text-sky-300 mb-8">
            <Code2 size={24} className="text-accent" />
            <h3 className="text-2xl font-bold text-white">Skills & Competencias Tecnológicas</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsData.map((skillGroup, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-navy-700/30 border border-sky-300/10">
                <h4 className="text-lg font-bold text-sky-300 mb-4 pb-2 border-b border-navy-700">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-navy-900/90 text-sky-100 text-xs font-medium border border-sky-300/15"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DiagonalSection>
  );
}
