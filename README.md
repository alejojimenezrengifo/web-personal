# Portafolio Profesional — Alejo

Sitio web personal y portafolio interactivo de alto rendimiento desarrollado con **Next.js 15 (App Router)**, **TypeScript** y **Tailwind CSS v4**. La aplicación está optimizada para Generación de Sitio Estático (**SSG**), garantizando tiempos de carga ultrarrápidos, excelente puntuación en Core Web Vitals y una experiencia de usuario moderna con transiciones visuales avanzadas.

---

## 🚀 Características Principales

* **Secciones Diagonales Geométricas (`clip-path`):** Componente modular `<DiagonalSection />` que encapsula la superposición en diagonal entre bloques visuales sin comprometer la accesibilidad ni el flujo de lectura.
* **Arquitectura de Datos Estática:** Gestión de contenidos de proyectos, testimonios y habilidades mediante esquemas JSON estructurados en `./content/`, facilitando el mantenimiento sin sobrecarga de un CMS.
* **Carousel Interactivo de Testimonios:** Componente desacoplado de cliente (`'use client'`) para la navegación fluida entre recomendaciones manteniendo la página principal como HTML puramente estático.
* **Formulario de Contacto Integrado:** Interfaz de usuario intuitiva con estado de confirmación dinámico.
* **Diseño Responsivo & Adaptativo:** Navegación optimizada para dispositivos móviles con menú desplegable e iconografía vectorial ligera.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Descripción |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | Renderizado estático (SSG), enrutamiento moderno y optimización automática de imágenes y fuentes. |
| **Lenguaje** | TypeScript | Tipado estricto en todos los componentes, props y estructuras de datos locales. |
| **Estilos** | Tailwind CSS v4 | Variables de tema personalizadas (`@theme`) para la paleta de 7 tonos azules y color de acento. |
| **Iconos** | Lucide React / Inline SVG | Iconografía ligera, escalable y totalmente tipada. |
| **Despliegue** | Vercel | Integración continua y despliegues automáticos desde la rama principal. |

---

## 🎨 Paleta de Colores

La aplicación utiliza un sistema de color coordinado configurado en `app/globals.css` y `lib/colors.ts`:

* **Navy 900 (`#001D39`):** Fondo principal y encabezados oscuros.
* **Navy 700 (`#0A4174`):** Tarjetas secundarias y elementos de contenedor.
* **Blue 600 (`#49769F`):** Tonos intermedios y bordes de acento.
* **Teal 500 / 300 (`#4E8EA2` / `#6EA2B3`):** Detalles técnicos e indicadores de estado.
* **Sky 300 / 100 (`#7BBDE8` / `#BDD8E9`):** Textos secundarios y fondos claros (`#F4F8FB`).
* **Accent Warm (`#E8734E`):** Botones de llamada a la acción principales y resaltados clave.

---

## 📁 Estructura del Proyecto

```text
web-personal/
├── app/
│   ├── globals.css         # Estilos globales y tema Tailwind CSS v4
│   ├── layout.tsx          # Layout raíz con configuración de fuentes y metadata
│   └── page.tsx            # Landing Page (ensamblado de componentes)
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Barra de navegación con menú responsivo
│   │   └── Footer.tsx      # Pie de página y enlaces a redes
│   ├── sections/
│   │   ├── Hero.tsx        # Sección de presentación y métricas
│   │   ├── About.tsx       # Antecedentes profesionales
│   │   ├── ExperienceEducationSkills.tsx # Timeline y grid de habilidades
│   │   ├── Projects.tsx    # Tarjetas de proyectos destacados
│   │   ├── Testimonials.tsx # Carousel interactivo
│   │   └── ContactSection.tsx # Formulario de contacto
│   └── ui/
│       └── DiagonalSection.tsx # Wrapper reutilizable con efecto clip-path
├── content/
│   ├── projects.json       # Datos estáticos de proyectos
│   ├── skills.json         # Datos estáticos de habilidades
│   └── testimonials.json   # Datos estáticos de testimonios
├── lib/
│   └── colors.ts           # Definición de constantes de color en TypeScript
├── public/                 # Archivos estáticos e imágenes
├── next.config.ts          # Configuración de Next.js
├── tsconfig.json           # Configuración de TypeScript
└── package.json            # Dependencias y scripts de ejecución
```

---

## 💻 Instalación y Desarrollo Local

### Requisitos Previos
* **Node.js** `>= 18.17.0`
* **npm** `>= 9.x`

### Pasos de Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/alejojimenezrengifo/web-personal.git
   cd web-personal
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el sitio en vivo.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

5. **Iniciar en modo producción:**
   ```bash
   npm run start
   ```

---

## ⚙️ Despliegue

Este proyecto está optimizado para su despliegue inmediato en **Vercel**:

```bash
npx vercel --prod
```

O conectando el repositorio directamente a la consola de Vercel para builds automáticos en cada `push` a la rama `main`.

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
