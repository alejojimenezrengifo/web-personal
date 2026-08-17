import React from 'react';
import { DiagonalSection } from '../ui/DiagonalSection';
import projectsData from '@/content/projects.json';
import { ExternalLink, FolderGit2, Star } from 'lucide-react';

export function Projects() {
  return (
    <DiagonalSection id="projects" tilt="down" bgClassName="bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-navy-900">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900">
            Proyectos Destacados
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-navy-700/80 leading-relaxed">
            Una selección de casos de éxito en implementación de infraestructura, plataformas web y gobernanza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-sky-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-900/5 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    <FolderGit2 size={24} />
                  </div>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/20">
                      <Star size={12} className="fill-amber-500 text-amber-500" />
                      Destacado
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-navy-700/80 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-fill-1 text-navy-700 text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-accent-hover transition-colors"
                >
                  Ver Detalle
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DiagonalSection>
  );
}
