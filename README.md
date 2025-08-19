# 🚀 Mi Primer Proyecto React - Aplicación Web con Modo Nocturno

Una aplicación web moderna construida con React que incluye un sistema de modo nocturno/claro, un slider de imágenes interactivo y componentes modulares reutilizables.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Componentes](#-componentes)
- [Funcionalidades](#-funcionalidades)
- [Modo Nocturno](#-modo-nocturno)
- [Uso](#-uso)
- [Personalización](#-personalización)

## ✨ Características

- 🌙 **Modo Nocturno/Claro**: Sistema completo de cambio de tema
- 🖼️ **Slider de Imágenes**: Carrusel interactivo con navegación automática y manual
- 📱 **Diseño Responsive**: Adaptable a diferentes tamaños de pantalla
- 🎨 **Interfaz Moderna**: Diseño limpio y profesional
- 💾 **Persistencia de Datos**: Las preferencias del tema se guardan en localStorage
- ⚡ **Rendimiento Optimizado**: Construido con Vite para desarrollo rápido

## 🛠️ Tecnologías Utilizadas

- **React 18**: Biblioteca de JavaScript para interfaces de usuario
- **Vite**: Herramienta de construcción rápida para desarrollo
- **CSS Variables**: Para el sistema de temas
- **Context API**: Para el manejo del estado global del tema
- **Hooks de React**: useState, useEffect, useContext

## 📦 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd mi-primer-proyecto
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador en:**
   ```
   http://localhost:5173
   ```

## 📁 Estructura del Proyecto

```
mi-primer-proyecto/
├── public/
│   ├── docs/
│   ├── img/
│   ├── videos/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── imagen2.png
│   │   └── react.svg
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ImageSlider.jsx
│   │   ├── PostCard.jsx
│   │   ├── PostList.jsx
│   │   └── ThemeToggle.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🧩 Componentes

### 📄 **App.jsx** - Componente Principal
El componente raíz que orquesta toda la aplicación.

**Características:**
- Importa y renderiza todos los componentes principales
- Mantiene la estructura general de la página
- Incluye el botón de cambio de tema

**Estructura:**
```jsx
<Header/>
<Hero/>
<ImageSlider/>
<PostList/>
<Footer/>
<ThemeToggle/>
```

### 🎯 **Header.jsx** - Encabezado de Navegación
Componente de navegación principal con menú de enlaces.

**Características:**
- Logo/título de la página
- Menú de navegación con enlaces
- Compatible con modo nocturno
- Diseño responsive

**Props:** No requiere props

### 🚀 **Hero.jsx** - Sección Principal
Sección de bienvenida con llamada a la acción.

**Características:**
- Título principal atractivo
- Descripción de la página
- Botón de llamada a la acción
- Adaptable al tema actual

**Props:** No requiere props

### 🖼️ **ImageSlider.jsx** - Carrusel de Imágenes
Slider interactivo con navegación automática y manual.

**Características:**
- 5 imágenes (usando imagen2.png replicada)
- Auto-slide cada 5 segundos
- Botones de navegación (‹ ›)
- Indicadores de puntos
- Overlay con título y descripción
- Transiciones suaves
- Responsive design

**Funcionalidades:**
- `nextSlide()`: Avanza al siguiente slide
- `prevSlide()`: Retrocede al slide anterior
- `goToSlide(index)`: Va directamente a un slide específico
- Auto-navegación con `useEffect`

**Props:** No requiere props

### 📝 **PostList.jsx** - Lista de Publicaciones
Contenedor que renderiza múltiples tarjetas de posts.

**Características:**
- Grid responsive de publicaciones
- Título de sección
- Renderizado dinámico de PostCard

**Datos:**
```javascript
const posts = [
  { id: 1, title: "Primera Publicación", description: "Este es un ejemplo de post." },
  { id: 2, title: "Segunda Publicación", description: "Renderizado dinámicamente con props." },
  { id: 3, title: "Tercera Publicación", description: "Usando un array en React." }
];
```

**Props:** No requiere props

### 🃏 **PostCard.jsx** - Tarjeta de Publicación
Componente individual para mostrar información de un post.

**Características:**
- Título y descripción
- Diseño de tarjeta con sombra
- Compatible con modo nocturno
- Efectos hover

**Props:**
- `title` (string): Título de la publicación
- `description` (string): Descripción del contenido

### 🦶 **Footer.jsx** - Pie de Página
Componente de pie de página con información de copyright.

**Características:**
- Información de copyright
- Compatible con modo nocturno
- Diseño centrado

**Props:** No requiere props

### 🌙 **ThemeToggle.jsx** - Botón de Cambio de Tema
Botón flotante para cambiar entre modo claro y oscuro.

**Características:**
- Posición fija en esquina inferior derecha
- Iconos SVG (sol/luna)
- Animaciones suaves
- Tooltip informativo
- Accesibilidad (aria-label)

**Props:** No requiere props

### 🔧 **ThemeContext.jsx** - Contexto del Tema
Contexto React para manejar el estado global del tema.

**Características:**
- Hook personalizado `useTheme()`
- Persistencia en localStorage
- Detección automática de preferencia del sistema
- Provider para envolver la aplicación

**Funciones:**
- `toggleTheme()`: Cambia entre modo claro y oscuro
- `isDarkMode`: Estado actual del tema

## 🌙 Modo Nocturno

### **Sistema de Variables CSS**
El proyecto utiliza variables CSS para manejar los colores del tema:

```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #333333;
  --text-secondary: #666666;
  --border-color: #e0e0e0;
  --header-bg: #2563eb;
  --header-text: #ffffff;
  --card-bg: #ffffff;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

body.dark-mode {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --border-color: #404040;
  --header-bg: #1e40af;
  --header-text: #ffffff;
  --card-bg: #2d2d2d;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
```

### **Características del Modo Nocturno:**
- **Persistencia**: Las preferencias se guardan en localStorage
- **Detección Automática**: Respeta la preferencia del sistema operativo
- **Transiciones Suaves**: Cambios animados entre temas
- **Consistencia**: Todos los componentes se adaptan automáticamente

## 🎮 Funcionalidades

### **Navegación del Slider:**
- **Automática**: Cambia cada 5 segundos
- **Manual**: Botones de navegación laterales
- **Directa**: Indicadores de puntos en la parte inferior
- **Responsive**: Se adapta a diferentes tamaños de pantalla

### **Sistema de Temas:**
- **Cambio Instantáneo**: Botón flotante siempre visible
- **Persistencia**: Recuerda la preferencia del usuario
- **Detección Inteligente**: Usa la preferencia del sistema por defecto

## 🎨 Personalización

### **Cambiar Colores del Tema:**
Modifica las variables CSS en `src/index.css`:

```css
:root {
  --header-bg: #tu-color-aqui;
  --bg-primary: #tu-color-aqui;
  /* ... más variables */
}
```

### **Agregar Más Imágenes al Slider:**
Modifica el array en `src/components/ImageSlider.jsx`:

```javascript
const images = [
  imagen2,
  nuevaImagen1,
  nuevaImagen2,
  // ... más imágenes
];
```

### **Cambiar Tiempo de Auto-Slide:**
Modifica el valor en `useEffect`:

```javascript
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, 3000); // Cambia 5000 por el tiempo deseado en milisegundos

  return () => clearInterval(interval);
}, [images.length]);
```

### **Agregar Nuevas Publicaciones:**
Modifica el array en `src/components/PostList.jsx`:

```javascript
const posts = [
  // ... posts existentes
  { id: 4, title: "Nueva Publicación", description: "Descripción aquí" }
];
```

## 🚀 Scripts Disponibles

```bash
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la build de producción
npm run lint         # Ejecuta el linter
```

## 📱 Compatibilidad

- **Navegadores**: Chrome, Firefox, Safari, Edge (versiones modernas)
- **Dispositivos**: Desktop, Tablet, Mobile
- **Sistemas Operativos**: Windows, macOS, Linux

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Tu Nombre** - [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

---

⭐ **¡Si te gusta este proyecto, dale una estrella!**
