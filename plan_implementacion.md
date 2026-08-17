# Plan de Desarrollo — Página Web Personal (Alejo)

> Documento de trabajo para pasar del mockup wireframe (`mockup-web-personal.html`) a un prototipo funcional real.
> Última actualización: fase de mockup cerrada, paleta y estructura de secciones definidas.

---

## 1. Contexto y punto de partida

El mockup wireframe (HTML/CSS estático, sin framework) ya definió:
- Estructura de secciones: Header → Hero → About → Work Experience/Education/Skills → Featured Projects → Testimonials → Footer.
- Paleta de 7 azules (`#001D39` a `#BDD8E9`) + 1 acento cálido (`#E8734E`, decisión propia, no viene de una referencia — sigue pendiente de tu validación).
- Tratamiento de "corte diagonal" entre secciones (superposición -50px + `clip-path`, alternando dirección), dejando ver el color real de la sección anterior en el hueco.
- Carousel de testimonios funcional (JS vanilla, sin librería).

Este plan traduce eso a un stack de desarrollo real.

---

## 2. Stack recomendado

**Estoy suponiendo** que quieres un stack consistente con tu otro proyecto activo (el grabador/transcriptor de reuniones: Next.js + Vercel), y con tu perfil de React/TypeScript — no me diste una restricción explícita de stack para esta web, así que razono la elección a partir de eso. Dime si prefieres algo distinto (ej. si quieres usar esto como excusa para practicar otra tecnología).

| Capa | Tecnología | Por qué |
|---|---|---|
| Framework | **Next.js 15 (App Router) + TypeScript** | Coincide con tu stack ya usado, tienes 15+ años de React/TS, y Next.js con App Router da SSG (Static Site Generation) — ideal para una web personal: build una vez, sirve HTML estático, rápido y barato. |
| Estilos | **Tailwind CSS** | El mockup ya usa variables CSS (`--navy-900`, `--accent`, etc.) y utilidades atómicas por sección — Tailwind traduce eso 1:1 vía `tailwind.config.ts` con tu paleta como `theme.colors` custom. Evita reescribir CSS desde cero. |
| Cortes diagonales | **CSS `clip-path` nativo** (vía clases de utilidad de Tailwind con `[clip-path:...]` arbitrario, o un componente `<DiagonalSection>` con estilos inline) | Es exactamente la misma técnica que ya validamos en el mockup — no hay que reinventarla, solo portarla a componentes React. |
| Animaciones (opcional) | **Framer Motion** | Si quieres que las secciones aparezcan con fade/slide al hacer scroll (común en portfolios), es la librería estándar en el ecosistema React/Next. No es indispensable — el sitio funciona sin esto. |
| Iconos | **lucide-react** | Ligera, tree-shakeable, tipada en TS, cubre iconos de redes sociales y skills genéricos. |
| Fuentes | **`next/font`** (auto-hosting, sin llamadas externas a Google Fonts) | Mejor performance (Core Web Vitals), evita layout shift. |
| Formulario de contacto | **Next.js Route Handler (`app/api/contact/route.ts`) + Resend** (o similar) | Sin backend separado — usas la misma app Next.js. Resend tiene tier gratuito razonable para volumen personal. **Alternativa sin código de servidor**: Formspree o Web3Forms si prefieres no mantener ni un endpoint propio. |
| Datos de proyectos/testimonios | **Archivos locales (JSON o MDX) dentro del repo**, no un CMS | Para una web personal con contenido que cambia poco, un CMS headless es sobre-ingeniería. Si en el futuro quieres editar contenido sin tocar código, ahí sí evaluar Contentlayer/Sanity — no antes. |
| Hosting/Deploy | **Vercel** | Mismo proveedor que tu otro proyecto, integración nativa con Next.js, preview deployments automáticos por PR — así puedes "ir viendo el resultado" en cada push, que es justo lo que pediste. |
| Control de versiones | **GitHub** | Nota aparte, relevante para tu búsqueda laboral: tu perfil de GitHub está señalado como disperso/con poco historial de commits reales. Este proyecto, si lo desarrollas con commits incrementales genuinos (no un solo commit gigante), te sirve como pieza de portafolio verificable para las postulaciones de Coordinador PMO / DevOps que estás evaluando. |
| Analytics (opcional) | **Vercel Analytics** | Gratuito en el tier hobby, sin configuración de cookies compleja. |

### Lo que NO estoy recomendando, y por qué
- **CMS headless** (Sanity, Contentful): sobra para una web personal con contenido estático. Añade complejidad de configuración sin beneficio claro hoy.
- **Backend separado (FastAPI/Django)**: aunque es tu stack de trabajo, para esta web no hay lógica de negocio que lo justifique — el único punto que "necesita servidor" es el formulario de contacto, y Next.js Route Handlers lo cubren sin un segundo servicio que mantener.
- **Base de datos (Postgres)**: no hay datos dinámicos que persistir en este sitio (a menos que quieras un contador de visitas o guestbook — dímelo si es el caso, cambia el análisis).

---

## 3. Estructura de carpetas propuesta

```
web-personal/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                 # ensambla todas las secciones
│   ├── globals.css              # variables de paleta + estilos base Tailwind
│   └── api/
│       └── contact/route.ts     # endpoint del formulario de contacto
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── ExperienceEducationSkills.tsx
│   │   ├── Projects.tsx
│   │   └── Testimonials.tsx     # incluye el carousel
│   └── ui/
│       ├── DiagonalSection.tsx  # wrapper reutilizable con el corte diagonal + overlap
│       ├── Button.tsx
│       └── SkillIcon.tsx
├── content/
│   ├── projects.json
│   ├── testimonials.json
│   └── skills.json
├── lib/
│   └── colors.ts                # paleta como constantes TS (single source of truth)
├── public/
│   ├── images/                  # fotos reales (hero, about, proyectos)
│   └── icons/                   # logos de skills (svg)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 4. Paleta como código (`lib/colors.ts` / `tailwind.config.ts`)

```ts
// lib/colors.ts
export const palette = {
  navy900: '#001D39',
  navy700: '#0A4174',
  blue600: '#49769F',
  teal500: '#4E8EA2',
  teal300: '#6EA2B3',
  sky300: '#7BBDE8',
  sky100: '#BDD8E9',
  accent: '#E8734E',      // decisión propia — pendiente tu validación (ver sección 6)
  accentHover: '#D35F3A',
  canvas: '#F4F8FB',
  fill1: '#EAF2F7',
} as const;
```

Esto se importa tanto en `tailwind.config.ts` (para usar `bg-navy900`, `text-accent`, etc. como clases utilitarias) como en cualquier componente que necesite el valor crudo (ej. gradientes de `clip-path` con colores inline).

---

## 5. El componente `DiagonalSection` (la pieza técnica clave)

Es el único componente verdaderamente "no trivial" de portar, porque encapsula la lógica de corte diagonal + superposición que construimos a mano en el mockup:

```tsx
// components/ui/DiagonalSection.tsx
type DiagonalSectionProps = {
  children: React.ReactNode;
  tilt: 'up' | 'down';       // dirección del corte
  bgClassName: string;       // color de fondo de ESTA sección
  className?: string;
};

export function DiagonalSection({ children, tilt, bgClassName, className }: DiagonalSectionProps) {
  const clipPath =
    tilt === 'down'
      ? 'polygon(0 50px, 100% 0, 100% 100%, 0 100%)'
      : 'polygon(0 0, 100% 50px, 100% 100%, 0 100%)';

  return (
    <div className="relative -mt-[50px] z-[2]">
      <div
        className={`${bgClassName} pt-[50px] ${className ?? ''}`}
        style={{ clipPath }}
      >
        {children}
      </div>
    </div>
  );
}
```

Uso:
```tsx
<DiagonalSection tilt="down" bgClassName="bg-canvas">
  <Projects />
</DiagonalSection>
```

**Nota técnica real, no cosmética**: el mismo problema que resolvimos en el mockup (las notas/anotaciones quedaban recortadas por el `clip-path` si estaban dentro del elemento clippeado) aplica aquí — cualquier elemento que necesite "salirse" del área visible (tooltips, dropdowns, popovers) debe vivir FUERA de este wrapper, no dentro. Tenlo presente cuando agregues el menú de navegación mobile o cualquier overlay.

---

## 6. Decisiones pendientes que quedaron abiertas en el mockup (no las inventé, no las resolví)

Antes de que el desarrollo avance mucho, estas siguen sin resolverse — es mejor cerrarlas ahora que a mitad de implementación:

1. **Los 2 pines de Pinterest** (efecto de botón, estilo de fondo/cajas) — nunca llegaste a describírmelos. El acento `#E8734E` y los estilos de botón actuales son decisión mía, no tuya. Si tenías algo específico en mente, este es el momento de definirlo, antes de codificarlo.
2. **Cantidad real de testimonios**: el carousel está armado para 3 slides de prueba (9 testimonios). Si tienes menos, hay que decidir si el carousel se justifica o si un layout estático de 2-3 columnas es más honesto.
3. **Fotos reales** de Hero y About: el contraste de texto sobre imagen (el scrim que agregamos) está calibrado para un placeholder geométrico — hay que revisarlo con la foto real.
4. **Logos de skills**: la grilla de 12 cajitas asume un tamaño uniforme — si los logos reales tienen proporciones muy distintas entre sí (ej. un logo cuadrado vs. uno muy ancho), puede requerir ajuste.
5. **Copy real**: todo el texto del mockup es placeholder (`lorem`-style vacío). Necesito el contenido real de About, descripciones de proyectos, etc. antes de maquetar el contenido final.

---

## 7. Roadmap de desarrollo (fases, para ir viendo resultado progresivo)

La idea es que cada fase termine en algo visible y desplegado, no en código a medio camino sin mostrar nada.

### Fase 0 — Setup (una sesión corta)
- `npx create-next-app@latest` con TypeScript + Tailwind + App Router.
- Conectar repo a GitHub.
- Conectar repo a Vercel (deploy automático desde el primer commit — aunque sea una página en blanco, ya tienes URL pública).

### Fase 1 — Layout base + paleta
- `globals.css` con la paleta cargada.
- `Header` y `Footer` (los más simples, mismo fondo navy).
- Deploy → primer resultado visible real (aunque sea solo header/footer).

### Fase 2 — Hero + About
- Incluye el primer `DiagonalSection` real.
- Aquí se prueba el componente técnico clave del punto 5 con contenido real por primera vez.
- Deploy → ya se ve la identidad visual completa del sitio.

### Fase 3 — Experience/Education/Skills + Projects
- Grid de skills, timeline de experiencia, grid de proyectos.
- Deploy → contenido "de currículum" ya visible.

### Fase 4 — Testimonials (carousel) + Footer final
- Portar el carousel de vanilla JS a un componente React con `useState` (más simple que mantener refs a DOM manual).
- Deploy → sitio completo navegable.

### Fase 5 — Formulario de contacto + pulido
- Route handler + servicio de email.
- Revisión de accesibilidad básica (contraste, `alt` en imágenes, navegación por teclado).
- Revisión de performance (Lighthouse) antes de considerarlo "terminado".

---

## 8. Comandos base

```bash
# crear proyecto
npx create-next-app@latest web-personal --typescript --tailwind --app

# desarrollo local
cd web-personal
npm run dev

# deploy (una vez conectado el repo a Vercel, esto es automático por push,
# pero también puedes forzarlo manual):
npx vercel --prod
```

---

## 9. Lo que sigue siendo mío, no tuyo (para que quede explícito)

Todo lo marcado como "decisión propia" en el mockup (el acento cálido, los colores aproximados de las secciones sin paleta previa, el tamaño del corte diagonal) sigue siendo una propuesta mía, no un hecho validado por ti. Este documento asume que se mantienen tal cual salieron del mockup — si al revisar el mockup con más calma cambias de opinión sobre alguna, este plan (y el código que salga de él) hay que actualizarlo en consecuencia.