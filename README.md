<div align="center">

# 🌻 Centro de Jubilados y Pensionados Provinciales de Diamante

### Sitio web accesible para el Centro de Jubilados de Diamante, Entre Ríos

&nbsp;

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

&nbsp;

</div>

---

## 📋 Descripción

Sitio web diseñado especialmente para **adultos mayores**, con foco en **accesibilidad**, **legibilidad** y **facilidad de uso**. Presenta los servicios, talleres y actividades del Centro de Jubilados y Pensionados Provinciales de Diamante.

### ✨ Características principales

- 🎨 **Estética de acuarela** — Diseño cálido con paleta de colores suaves y naturales
- ♿ **Accesibilidad total** — Fuentes engrosadas, contraste adecuado, checklists legibles
- 📱 **Mobile First** — Diseño responsivo que prioriza la experiencia en móviles
- 📅 **Listado de Actividades** — Todas las actividades divididas en categorías lógicas (Movimiento, Arte, Salud, Próximamente) con sus horarios y profesores.
- 💬 **WhatsApp integrado** — Botones de consulta específicos directo para cada actividad o gestión.
- 📋 **Gestiones y Trámites** — Guías claras (requisitos, beneficios) para Salario Familiar, Seguros, Caja de Jubilaciones, etc.
- 📸 **Vida en el Centro (Galería)** — Un espacio dedicado a mostrar momentos, testimonios y fotos reales del centro.
- 🛠️ **Servicios Extra** — Soporte para consultar por acompañantes, nutrición, enfermería particular, viajes, etc.
- 🍔 **Navegación Profesional** — Navbar optimizado sin emojis, responsivo, y una barra superior con los horarios de atención digital.

---

## 🗂️ Estructura del Proyecto

```
📁 CentroJubiladosDiamante/
├── 📁 public/
│   └── 📁 assets/
│       └── 📁 img/               ← Imágenes de acuarela
│           ├── centro.png
│           ├── yoga.png
│           ├── gimnasia.png
│           ├── mano.png
│           ├── baile1.png
│           ├── canto.png
│           ├── ...otras imagenes
│           └── 📁 vida/               ← Fotos reales para Galería
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Hero.tsx              ← Sección principal
│   │   ├── ActivityCard.tsx      ← Tarjeta de actividad con checklist de beneficios
│   │   ├── ActivityCalendar.tsx  ← Grilla semanal estática de actividades
│   │   ├── TramitesSection.tsx   ← Sección Gestiones y Trámites
│   │   ├── TramiteCard.tsx       ← Tarjeta para Salarios, Reclamos, etc.
│   │   ├── SectionGrid.tsx       ← Generador de secciones generales
│   │   ├── ServiciosConsultar.tsx← Grid de servicios on-demand
│   │   ├── VidaEnElCentro.tsx    ← Galería de fotos con testimonios
│   │   └── Footer.tsx            ← Pie de página
│   ├── 📁 data/
│   │   ├── activities.ts        ← Data de talleres, servicios y estructura de la semana
│   │   └── tramites.ts          ← Información legal/administrativa de cada trámite
│   ├── App.tsx                   ← Componente principal + navegación
│   ├── main.tsx                  ← Punto de entrada
│   └── index.css                 ← Estilos globales y tokens de diseño
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── package.json
└── .gitignore
```

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|:------|:---:|:----|
| 🟫 Beige cálido | `#F9F6F0` | Fondo principal |
| 🩵 Celeste etéreo | `#E4EDEF` | Fondos de secciones |
| 🌿 Verde salvia | `#D5DEC9` | Footer y detalles |
| ⬛ Gris marengo | `#2A2C2B` | Texto principal |
| 🩷 Rosa viejo | `#D8B4AD` | Acentos decorativos |
| 🌲 Verde musgo | `#849C8F` | Botones de acción |
| 🔵 Celeste grisáceo | `#A4B8BE` | Botones secundarios |

---

## 🚀 Instalación y Uso

### Requisitos previos
- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Axelirribarren/CentroJubiladosDiamante.git

# Entrar al directorio
cd CentroJubiladosDiamante

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Build de producción

```bash
npm run build
npm run preview
```

---

## 🖼️ Imágenes

Las tarjetas utilizan imágenes con estilo **acuarela** (watercolor wash). Colocá tus imágenes en:

```
public/assets/img/
```

Si falta una imagen, se muestra un emoji representativo automáticamente.

---

## ♿ Reglas de Accesibilidad

| Regla | Valor |
|:------|:------|
| Tamaño mínimo de fuente | 18px (1.125rem) |
| Títulos | 24px – 48px |
| Touch target mínimo | 48 × 48 px |
| Contraste de texto | Gris marengo sobre beige cálido |
| Botones | Forma píldora, ancho completo en cards |
| Foco visible | Outline verde 3px con offset |
| Íconos | SVG outline (Heroicons), sin emojis en footer |

---

## 👨‍💻 Creador

<div align="center">

**Axel Irribarren** — Developer

[![GitHub](https://img.shields.io/badge/GitHub-Axelirribarren-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Axelirribarren)

</div>

---

## 📄 Licencia

Este proyecto fue creado para el **Centro de Jubilados y Pensionados Provinciales de Diamante**, Entre Ríos, Argentina.

---

<div align="center">

Hecho con 💛 para nuestra comunidad

</div>
