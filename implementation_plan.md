# Plan de Implementación de Nubefa (Rework)

¡Genial! Este es un proyecto estupendo. Trabajar la estética de QuickBooks y prepararlo para on-premise con Docker desde el día uno nos va a ahorrar muchos dolores de cabeza. 

El objetivo general es establecer la arquitectura inicial del proyecto e implementar la landing page con todos los contenidos de nubefa.com utilizando Next.js y una estética "premium" inspirada en QuickBooks.

> [!WARNING]
> **REGLA DE ORO DE ESTE PROYECTO:** Absolutamente ningún comando de terminal será ejecutado automáticamente por el asistente. Todo comando de instalación de paquetes, creación del proyecto y ejecución de Docker será proporcionado en texto plano y el **usuario lo ejecutará manualmente**.

## Resumen de Cambios Propuestos

### Fase 1: Infraestructura Base (Next.js + Docker)
- **Next.js:** Inicializar el proyecto con `create-next-app` (Comando será proporcionado para ejecución manual). Usaremos CSS Modules / CSS Puro para la estética.
- **Docker:** Creación de un `Dockerfile` optimizado para Next.js (estrategia de multi-stage build).
- **Docker Compose:** Creación de `docker-compose.yml` que incluya el servicio Next.js para desarrollo y la imagen de **PostgreSQL** para la futura base de datos.
*(Estos archivos se generarán una vez creado el proyecto base).*

### Fase 2: Sistema de Diseño y Maquetación (Landing Page)
- **CSS y Animaciones (Factor WOW):** 
  - Crear variables y utilidades en `globals.css` capturando la estética corporativa de QuickBooks (verdes #2ca01c, fondos blancos/grises claros, tipografía limpia).
  - Implementar **animaciones fluidas e interactivas** en componentes clave usando utilidades de Vanilla CSS o CSS Modules (ej: *fade-in* y transiciones *smooth slide-up* al hacer scroll en las secciones, micro-interacciones hover en los botones y en las tarjetas de `Pricing`). Todo diseñado para que la web se sienta "Premium y Viva".
- **Componentes:**
  - `Header` (Dashboard simulado con transiciones suaves en navegación).
  - `HeroSection` (con el texto: Software ERP La Telegestión y CTA de Prueba 30 días, con animación de entrada).
  - `Features` (Cards interactivas con efectos de hover para Compras, Ventas, Sujetos, Factura Electrónica, etc).
  - `Pricing` (Plan Gratis, Local, Duo Local, Tri Local, con destaque dinámico del plan recomendado).
  - `Footer` (Con teléfonos y correos de Nubefa).

### Fase 3: Integración de Contenidos Exactos
- Uso del contenido recién extraído de `nubefa.com` para rellenar los componentes maquetados.

## Plan de Verificación

### Verificación del Entorno
- El usuario ejecutará `npm run dev` y `docker-compose up` manualmente para confirmar que el contenedor Docker carga correctamente la imagen en local.

### Verificación Visual (Usuario)
- Acceder al `localhost:3000` y comprobar que la página luzca premium, respetando los datos extraídos de Nubefa y la experiencia visual y colorimetría de QuickBooks.
