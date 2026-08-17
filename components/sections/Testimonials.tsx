'use client';

import React, { useState } from 'react';
import { DiagonalSection } from '../ui/DiagonalSection';
import testimonialsData from '@/content/testimonials.json';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <DiagonalSection id="testimonials" tilt="up" bgClassName="bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Testimonios & Recomendaciones
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto relative">
          <div className="p-8 sm:p-12 rounded-3xl bg-navy-700/50 border border-sky-300/15 shadow-2xl relative">
            <Quote size={48} className="text-accent/30 absolute top-6 left-6" />

            <div className="relative z-10 text-center space-y-6">
              <p className="text-base sm:text-xl text-sky-100/90 italic leading-relaxed">
                "{current.content}"
              </p>

              <div>
                <h4 className="text-lg font-bold text-white">{current.name}</h4>
                <p className="text-xs text-sky-300 font-medium mt-0.5">{current.role}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-navy-700/60">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-navy-900 hover:bg-accent text-sky-100 hover:text-white transition-colors"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-accent w-6' : 'bg-sky-100/30'
                    }`}
                    aria-label={`Ir al testimonio ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-navy-900 hover:bg-accent text-sky-100 hover:text-white transition-colors"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DiagonalSection>
  );
}
