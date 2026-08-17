'use client';

import React, { useState } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Testimonios', href: '#testimonials' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-navy-900/90 backdrop-blur-md border-b border-navy-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 text-sky-100 hover:text-accent transition-colors">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
            A
          </div>
          <span className="font-bold text-xl tracking-tight text-white">Alejo</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sky-100/80 hover:text-sky-300 font-medium transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-all shadow-md hover:shadow-accent/20"
          >
            Contacto
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-sky-100 hover:bg-navy-700/50 transition-colors"
          aria-label="Abrir menú de navegación"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-900 border-b border-navy-700 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-sky-100 hover:bg-navy-700 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center mt-4 px-4 py-2.5 rounded-lg bg-accent text-white font-medium text-base hover:bg-accent-hover"
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
