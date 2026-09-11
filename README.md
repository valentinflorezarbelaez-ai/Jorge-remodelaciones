# JV Construcciones • Reformas y Acabados

<div align="center">

[![Production Deployment](https://img.shields.io/badge/Vercel-Production%20Live-brightgreen?style=for-the-badge&logo=vercel)](https://jvconstrucciones.vercel.app/)
[![Code Standard](https://img.shields.io/badge/Vanilla%20Architecture-Zero%20Dependencies-gold?style=for-the-badge&logo=javascript)](https://jvconstrucciones.vercel.app/)
[![Accessibility](https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-blue?style=for-the-badge)](https://jvconstrucciones.vercel.app/)
[![SEO](https://img.shields.io/badge/Schema.org-LocalBusiness%20Verified-purple?style=for-the-badge)](https://jvconstrucciones.vercel.app/)
[![Contract Guarantee](https://img.shields.io/badge/Garantía-12%20Meses%20por%20Escrito-emerald?style=for-the-badge)](https://jvconstrucciones.vercel.app/)

**Plataforma web de alta conversión y dossier técnico interactivo para servicios residenciales de remodelación y transformación total de obra gris en el Oriente Antioqueño.**

[Explorar Landing en Vivo](https://jvconstrucciones.vercel.app/) • [Dossier Técnico Interactivo](https://jvconstrucciones.vercel.app/MANUAL_INTERACTIVO.html) • [Descargar Dossier PDF](https://jvconstrucciones.vercel.app/dossier.pdf)

</div>

---

## 🏛️ 1. Visión & Propuesta de Valor

**JV Construcciones** es una firma constructora especializada en la materialización y acabado integral de apartamentos entregados en obra gris dentro de los desarrollos inmobiliarios más destacados de Rionegro, La Ceja, El Carmen de Viboral y el Valle de Aburrá.

### Pilares Fundamentales:
1. **Calidad Constructiva & Tolerancia Cero**: Ejecución milimétrica de aplomados con nivel láser, adhesivos cementosos flexibles de alta especificación (C2TES1) y boquillado epóxico antibacteriano.
2. **Garantía Contractual Escrita**: Póliza de seriedad, cronograma vinculante por hitos, pagos contra avance supervisado y 12 meses de garantía real documentada.
3. **Quiet Luxury & Diseño Contemporáneo**: Paleta refinada inspirada en piedra porcelainada, cuarzos antibacteriales no porosos, cajillos de luz indirecta (3000K cálido) y carpintería arquitectónica en melamina RH hidrófuga.
4. **Atención Directa sin Intermediarios**: Supervisión diaria en sitio por **Jorge** (Fundador y Líder de Proyectos) con bitácora semanal en video para propietarios.

---

## 📐 2. Arquitectura de Software & UI/UX

El proyecto fue desarrollado bajo una arquitectura de alto rendimiento con **cero dependencias externas en tiempo de ejecución**, garantizando tiempos de carga inferiores a 800 ms y puntuaciones superiores a 95 en Google Lighthouse.

```
jorge_landing page/
├── index.html                      # Landing page principal con marcado semántico y Schema.org
├── MANUAL_INTERACTIVO.html         # Dossier técnico interactivo con calculador dinámico de inversión
├── dossier.pdf                     # Dossier técnico compilado en alta resolución (880 KB)
├── styles.css                      # Motor de estilos Dark Luxury, variables CSS y responsive design
├── app.js                          # Controladores interactivos, canvas GPU, sliders y modal de proyectos
├── favicon.svg                     # Identidad vectorial corporativa
├── robots.txt                      # Directivas de indexación limpia para motores de búsqueda
├── sitemap.xml                     # Mapa de sitio optimizado
├── vercel.json                     # Configuración de headers de caché y compresión en Vercel
└── assets/                         # Multimedia de alta resolución
    ├── audio/                      # Pistas de narración técnica de procesos
    ├── flyers/                     # Material publicitario y piezas editoriales de marca
    ├── images/
    │   ├── proceso/                # Fotografía de obra real (enchapes, nivelación láser, tuberías)
    │   ├── tiktok/                 # Recursos de contenido vertical
    │   ├── units/                  # Logos de unidades residenciales intervenidas
    │   └── *.webp                  # Renders antes/después y texturas porcelainadas
    └── videos/                     # Recorridos completos y videos de acabados con posters optimizados
```

---

## ⚡ 3. Características Técnicas Destacadas

### ✦ Canvas de Partículas Espaciales Acelerado por GPU
Canvas interactivo vanilla (`app.js`) que simula polvo de cantera y partículas de luz flotantes con física de amortiguación elástica ante la proximidad del puntero o interacción táctil.

### ✦ Sliders Táctiles de "Antes & Después"
Comparador deslizante milimétrico bidireccional desarrollado con eventos pointer unificados (`pointerdown`, `pointermove`, `pointerup`), que permite a los propietarios contrastar la obra gris cruda frente a la transformación final de cocina, baño y zona social.

### ✦ Dossier Técnico & Calculador de Inversión Interactivo
Módulo integral (`MANUAL_INTERACTIVO.html`) con:
- Desglose cronológico de las 7 fases constructivas (Replanteo → Redes RETIE → Revoques → Porcelanatos → Drywall 3000K → Carpintería RH → Remates).
- Calculador en tiempo real de semanas estimadas de ejecución según metraje cuadrado (35 m² a 130 m²).
- Generador instantáneo de enlaces de cotización hacia WhatsApp con parámetros pre-configurados.

### ✦ Catálogo de Unidades Residenciales con Experiencia
Validación de trayectoria en copropiedades reales del Oriente Antioqueño:
- **Bosque Ceibal** (Rionegro)
- **Bosque Robledal** (Rionegro)
- **Altos de Santa María** (El Carmen de Viboral)
- **Pinares Residencial** (La Ceja)
- **Origen Lago** (Rionegro)
- **Nativa Condominio** (Rionegro)
- **Cerros del Carmen** (El Carmen de Viboral)
- **Torres de San Juan** (Marinilla)
- **Terracina Park** (Oriente Antioqueño)

---

## 🚀 4. Despliegue en Producción & Enlaces Oficiales

El proyecto se encuentra desplegado en la red perimetral global de **Vercel** con compresión Brotli/Gzip automática:

| Canal | URL Oficial | Estado |
|---|---|---|
| **Landing Principal** | [jvconstrucciones.vercel.app](https://jvconstrucciones.vercel.app/) | ![Live](https://img.shields.io/badge/Status-Activo-brightgreen) |
| **Alias de Producción** | [jorge-remodelaciones.vercel.app](https://jorge-remodelaciones.vercel.app/) | ![Live](https://img.shields.io/badge/Status-Activo-brightgreen) |
| **Dossier & Manual Técnico** | [jvconstrucciones.vercel.app/MANUAL_INTERACTIVO.html](https://jvconstrucciones.vercel.app/MANUAL_INTERACTIVO.html) | ![Live](https://img.shields.io/badge/Status-Activo-brightgreen) |
| **Descarga Directa PDF** | [jvconstrucciones.vercel.app/dossier.pdf](https://jvconstrucciones.vercel.app/dossier.pdf) | ![PDF](https://img.shields.io/badge/Documento-PDF%20880KB-gold) |

---

## 📞 5. Directorio Comercial & Técnico

- **Líder de Obra & Fundador:** Jorge
- **Canal Oficial WhatsApp:** [+57 311 396 4146](https://wa.me/573113964146?text=Hola%20JV%20Construcciones,%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20mi%20apartamento%20en%20obra%20gris.)
- **Área de Cobertura:** Rionegro, La Ceja, El Carmen de Viboral, Marinilla, Guarne y Valle de Aburrá (Antioquia, Colombia).
- **Horario de Operaciones:** Lunes a Sábado: 08:00 – 18:00

---

<div align="center">
  <sub>Diseñado y desarrollado con los estándares de ingeniería y estética de <strong>EOS System</strong>. © 2026 JV Construcciones.</sub>
</div>
