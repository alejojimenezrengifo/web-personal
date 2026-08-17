# Contexto General del Proyecto: web-personal (Alejo)

## 1. Alcance del Software (Scope)
- **Propósito:** Sitio web personal / Portafolio profesional enfocado en perfiles de Coordinador PMO / DevOps.
- **Estructura de Secciones:** Header → Hero → About → Experience, Education & Skills → Featured Projects → Testimonials (carousel) → Contact → Footer.
- **Identidad Visual:** Paleta de 7 tonos azules (`#001D39` a `#BDD8E9`) + Acento cálido (`#E8734E`) + Cortes diagonales entre secciones (`clip-path`).

## 2. Decisiones Tecnológicas y Arquitectura
- **Framework:** Next.js 15+ (App Router) + TypeScript.
- **Rendimiento / Renderizado:** Static Site Generation (SSG) estático.
- **Estilos:** Tailwind CSS v4 con variables CSS temáticas en [app/globals.css](file:///c:/Users/Macrobots/Project/web-personal/app/globals.css).
- **Componentes:** Componente modular `DiagonalSection` con corte de `clip-path` y compensación de desbordamiento.
- **Iconografía:** `lucide-react`.
- **Datos Locales:** Archivos JSON en `./content/` (`projects.json`, `testimonials.json`, `skills.json`).

## 3. Estado de la Integración
- **Fase 0 - 5 Completadas:** Inicialización de Next.js, sistema de diseño, componentes UI, datos locales estáticos, formulario interactivo de contacto e integración de la Landing Page completa.
