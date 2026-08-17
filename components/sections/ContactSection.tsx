'use client';

import React, { useState } from 'react';
import { DiagonalSection } from '../ui/DiagonalSection';
import { Mail, Send, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <DiagonalSection id="contact" tilt="down" bgClassName="bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-navy-900">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900">
            Contacto Directo
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-navy-700/80 leading-relaxed">
            ¿Interesado en coordinar un proyecto, optimizar tus pipelines o discutir una oportunidad?
          </p>
        </div>

        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-white border border-sky-100 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-navy-900">¡Mensaje Enviado!</h3>
              <p className="text-sm text-navy-700/80">
                Gracias por ponerte en contacto. Te responderé a la brevedad.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-accent bg-fill-1/50 text-navy-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-accent bg-fill-1/50 text-navy-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detalla tu propuesta o consulta..."
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-accent bg-fill-1/50 text-navy-900 text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-accent hover:bg-accent-hover text-white font-bold text-base transition-colors shadow-lg hover:shadow-accent/25 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </DiagonalSection>
  );
}
