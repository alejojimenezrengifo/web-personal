import React from 'react';
import { Mail, ArrowUp, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-sky-100/70 border-t border-navy-700/50 py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <p className="text-sm font-medium text-white">
            Alejo — Coordinador PMO & Especialista DevOps
          </p>
        </div>

        <div className="flex items-center gap-6">
          {/* GitHub Icon SVG */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-100/70 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          {/* LinkedIn Icon SVG */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-100/70 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="mailto:contacto@ejemplo.com"
            className="text-sky-100/70 hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="text-xs text-sky-100/50 flex items-center gap-4">
          <span>© {new Date().getFullYear()} Alejo. Todos los derechos reservados.</span>
          <a
            href="#hero"
            className="p-2 rounded-full bg-navy-700 hover:bg-accent text-white transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
