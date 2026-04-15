# 🚀 Nubefa ERP (Rework)
> La telegestión de MYPEs más completa y robusta. Software contable, inventarios y facturación electrónica ilimitada.

Este proyecto es una reestructuración de la plataforma comercial [Nubefa](https://nubefa.com/), aplicando prácticas modernas de interfaz, optimizaciones de accesibilidad, despliegue estandarizado con Docker (orientación on-premise) y basándose en un sistema de diseño propio y premium inspirado en el rubro contable.

## 🛠️ Tecnologías del Proyecto

- **💻 Frontend:** [Next.js](https://nextjs.org/) (App Router), Vanilla CSS / CSS Modules nativos (sin dependencias para asegurar agilidad), React, Iconos SVG purificados inline.
- **📦 Backing & DevOps:** Arquitectura lista con Docker y `docker-compose` usando un pipeline multi-stage build hacia modo `standalone`.
- **🗄️ Base de Datos:** Entorno aislado de PostgreSQL 15 listo para inyectarse a un futuro ORM.

## 🗂️ Arquitectura del Repositorio

El código actualmente está focalizado en el Frontend (Landing Page) con una separación de responsabilidades estricta.

```text
/app
 ├── globals.css         # Sistema de tokens CSS, paleta de colores y clases de Animación.
 ├── layout.tsx          # Wrapper principal con tipografía 'Inter' y reglas SEO en español.
 └── page.tsx            # Ensamblador de los componentes UI.
/components
 ├── Features.tsx        # Integraciones clave con SVG inline sin dependencias.
 ├── HeroSection.tsx     # Cabecera de captación y CTA de registro de 30 días.
 ├── Pricing.tsx         # Listado tabular interactivo de paquetes SaaS.
 └── Header/Footer       # Módulos de navegación institucional.
```

## 🚀 Ejecución y Despliegue en Local

Acorde a las normativas estrictas de este repositorio, **todos los comandos deben ser ejecutados manualmente por el usuario administrador** y no existen scripts que alteren el sistema local por detrás.

### 1. Servidor de Desarrollo Local Frontend (Pnpm)
Módulo útil para desarrollar las pantallas visuales usando el framework con Hot Reloading:
```bash
# 1. Asegurarse de tener los módulos listos
pnpm install

# 2. Correr entorno de desarrollo
pnpm dev
```
La aplicación se visualizará en `http://localhost:3000`.

### 2. Entorno Dockerizado Completo (On-Premise Ready)
Para emular el comportamiento que tendría la aplicación en el servidor del cliente que incluirá la capa de Base de Datos relacional, compilando una versión súper ligera de Next.js.
```bash
# Construir infraestructura de frontend y Base de Datos PostgreSQL
docker compose up --build
```
