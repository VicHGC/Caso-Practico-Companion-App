# Companion App

Aplicación móvil para operadores de campo que registran sesiones de recolección de datos espaciales. Construida con **React Native + Expo**.

---

## ⚙️ Requisitos

* Node.js 18+
* npm o yarn

---

## 🚀 Instalación

Clona el repositorio en tu computadora y ejecuta los siguientes comandos:

```bash
cd companion-app
npm install
```
## Ejecutar en local

### Opcion 1 - web (Recomendada, sin instalaciones adicionales).
```bash
npx expo start
```
Cuando se abra Expo Dev Tools en tu terminal, presiona la tecla w para abrir la app en el navegador.

Alternativamente, puedes ejecutar directamente:

```bash
npm run web
```

### Opcion 2 - dispositivo fisico (Expo Go).

1. Instala Expo Go desde la App Store (iOS) o Google Play (Android).
2. Ejecuta ``` npm start ``` en tu terminal.
3. Escanea el código QR que aparece en la consola utilizando la aplicación Expo Go.

## Funcionalidades
- Lista de equipos disponibles para recolección.

- Selección de equipo mediante interfaz tipo tarjetas.

- Inicio y detención de sesión con cronómetro en vivo.

- Reporte de incidentes al finalizar la sesión.

- Simulación de comunicación con API REST.

- Persistencia local y soporte offline-first.
