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
npm install
```
## Ejecutar en local

### Opcion 1 - web (Recomendada, sin instalaciones adicionales).
```bash
npm start
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
- Lista de equipos disponibles.

- Selección de equipo mediante interfaz tipo tarjetas.

- Reporte de incidentes al finalizar la sesión.

- Simulación de comunicación con API REST.


## API Mock

| Método | Endpoint | Descripción |
| ------ | -------- | ----------- |
| **GET** | `/api/v1/devices` | Obtiene lista de equipos disponibles |
| **POST** | `/api/v1/sessions` | Envía registro de sesión recolectada |

## Estructura del proyecto

```bash

companion-app/
├── App.js                    # Punto de entrada principal
├── screens/
│   └── SessionScreen.js      # Pantalla principal (flujo completo)
├── components/
│   ├── RecordingView.js      # Vista de sesion activa con cronómetro
│   └── FeedbackModal.js      # Modal de reporte de incidentes
├── services/
│   ├── deviceService.js      # Mock de GET /api/v1/devices
│   └── sessionService.js     # Mock de POST /api/v1/sessions
├── mocks/
│   └── equipments.js         # Datos simulados de equipos
├── hooks/
│   └── useTimer.js           # Hook personalizado del cronómetro
├── constants/
│   └── theme.js              # Paleta de colores y estilos globales
├── assets/
│   └── wireframes/           # Prototipos de la Fase 1
├── fase3.md                  # Estrategia offline-first
└── README.md
```
## Wirefrimes del prototipo

<img width="150" alt="MainView" src="https://github.com/user-attachments/assets/29db6c00-c064-4c00-8dc9-64daeef1b3c1" />
<img width="150" alt="SessionRecordingView" src="https://github.com/user-attachments/assets/8f320b7f-8888-4dc6-98b1-abed6676da29" />
<img width="150" alt="SessionIncidentReport" src="https://github.com/user-attachments/assets/8a1288e9-ba9e-4f1e-b5a4-a40fdb3c314d" />






