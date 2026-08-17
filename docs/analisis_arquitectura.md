# Análisis Crítico de Arquitectura — Proyecto web-personal

## 1. Evaluación del Stack Propuesto
El documento [contexto_plan.md](file:///c:/Users/Macrobots/Project/web-personal/contexto_plan.md) propone una arquitectura basada en **Next.js 15 (App Router) + TypeScript + Tailwind CSS**.

### Análisis de Ineficiencias y Riesgos Técnicos

#### A. Incompatibilidad de Configuración: Tailwind CSS v4 vs v3
- **Riesgo:** `npx create-next-app@latest` en versiones recientes integra **Tailwind CSS v4** por defecto. Tailwind v4 elimina el archivo tradicional `tailwind.config.ts` en favor de la directiva `@theme` en el archivo CSS global (`app/globals.css`).
- **Solución:** Definir las variables de la paleta directamente en `app/globals.css` utilizando `@theme` (Tailwind v4) o especificar la instalación de Tailwind v3 en caso de requerir el archivo de configuración TypeScript estricto.

#### B. Truncamiento de Elementos Flotantes en `DiagonalSection` (`clip-path`)
- **Riesgo:** La propiedad CSS `clip-path: polygon(...)` recorta de forma absoluta todo contenido que sobrepase los límites geométricos definidos. Las sombras (`box-shadow`), menús desplegables (`dropdown`), tooltips y modals contenidos dentro de `DiagonalSection` serán invisibles o aparecerán cortados.
- **Solución:**
  1. Utilizar `filter: drop-shadow(...)` en el contenedor padre si se requiere sombra en el borde diagonal.
  2. Implementar portales de React (`createPortal`) o elevar z-index fuera del wrapper clippeado para menús móviles y modales.

#### C. Hidratación y Client Components (`'use client'`)
- **Riesgo:** Si el carousel de testimonios o las animaciones con `framer-motion` envuelven páginas completas, se forzará la renderización del lado del cliente (CSR), invalidando los beneficios de rendimiento de SSG en Next.js App Router.
- **Solución:** Aislar estrictamente los componentes interactivos (`TestimonialsCarousel.tsx`, elementos animados) como Client Components aislados, manteniendo `app/page.tsx` y las secciones puramente informativas como Server Components estáticos.

---

## 2. Definición del Esquema de Datos Locales

Para mantener el principio DRY y evitar sobre-ingeniería sin CMS, los datos de proyectos, habilidades y testimonios se estructurarán en formato JSON estrictamente tipado dentro de `./content/`:

- `./content/projects.json`
- `./content/testimonials.json`
- `./content/skills.json`
