# 🚀 Guía de Deployment en GitHub Pages - The Fenix Barber Shop

Esta guía te ayudará a publicar tu sitio web de barbería en GitHub Pages de forma gratuita.

## 📋 Pasos Previos

### 1. Crear repositorio en GitHub
1. Ve a [GitHub.com](https://github.com) y crea una cuenta si no tienes una
2. Crea un nuevo repositorio público llamado `fenix-barber-shop`
3. **NO** inicialices con README, .gitignore o licencia

### 2. Preparar el proyecto
Necesitas hacer algunos ajustes pequeños en tu proyecto:

#### a) Modificar package.json
Agrega este script en la sección "scripts":
```json
"build:static": "vite build"
```

#### b) Modificar vite.config.ts
Agrega esta línea en la configuración:
```typescript
base: process.env.NODE_ENV === "production" ? "/fenix-barber-shop/" : "/",
```

El archivo debería verse así:
```typescript
export default defineConfig({
  // ... otras configuraciones
  base: process.env.NODE_ENV === "production" ? "/fenix-barber-shop/" : "/",
  // ... resto de la configuración
});
```

## 🔧 Subir código a GitHub

### Opción 1: Desde Replit (Recomendado)
1. Ve a la pestaña "Version Control" en Replit
2. Connecta con tu cuenta de GitHub
3. Sube todos los archivos al repositorio `fenix-barber-shop`

### Opción 2: Desde tu computadora
```bash
# En la terminal de tu proyecto
git init
git add .
git commit -m "Initial commit: Fenix Barber Shop website"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/fenix-barber-shop.git
git push -u origin main
```

## ⚙️ Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. Navega a **Pages** en el menú lateral
4. En "Source", selecciona **GitHub Actions**
5. El workflow se ejecutará automáticamente

## 🌐 ¡Tu sitio estará listo!

- URL del sitio: `https://TU_USUARIO.github.io/fenix-barber-shop/`
- El deployment es automático cada vez que hagas cambios
- El proceso toma 2-5 minutos en completarse

## 📁 Archivos importantes creados

✅ `.github/workflows/deploy.yml` - Workflow de GitHub Actions para deployment automático

## 🔄 Hacer cambios futuros

1. Edita los archivos en Replit
2. Sube los cambios a GitHub (Version Control → Commit)
3. GitHub Actions desplegará automáticamente la nueva versión

## 🎯 Características del sitio desplegado

✅ **Totalmente funcional**: Reservas por Google Forms  
✅ **Responsive**: Se ve perfecto en móviles y desktop  
✅ **Rápido**: Hosted en CDN de GitHub  
✅ **Gratuito**: Sin costos de hosting  
✅ **HTTPS**: Seguro por defecto  

## 🚨 Troubleshooting

### Si el sitio no carga correctamente:
1. Verifica que el `base` path en vite.config.ts sea correcto
2. Asegúrate que el repositorio sea público
3. Revisa la pestaña "Actions" en GitHub para ver si hay errores

### Si las imágenes no aparecen:
- Las imágenes están en `attached_assets/` y deberían funcionar automáticamente
- Verifica que las importaciones en los componentes sean correctas

¡Tu barbería estará online en pocos minutos! 💈✨