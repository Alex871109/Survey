# Emaily Survey
Aplicación web para enviar encuestas y obtener feedback sobre nuestros productos o  sevicios, aplicando el patrón de diseño MVC y enfocándome en escribir un código limpio y mantenible. En el frontend, utilicé React junto con Material-UI (MUI), Redux Toolkit e integración con Stripe. En el backend, implementé Node.js con Express y MongoDB para la gestión de datos, integrando además SendGrid Webhooks y autenticación mediante Google OAuth para una mayor seguridad y funcionalidad.

## Instrucciones de Instalación

1. Clonar este repositorio:
git clone https://github.com/Alex871109/Survey

2. Instalar las dependencias del servidor y del cliente:
npm install
cd client
npm install

3. Inicia el servidor y el cliente:
npm run dev

## Estructura del Proyecto
- `/survey`: Directorio raiz. Contiene el código del servidor (backend) de la aplicación desarrollado con Node.js y Express.js.
- `/client`: Contiene el código del cliente (frontend) de la aplicación desarrollado con React.js.
- `/middlewares`:Middlewares utilizados en las rutas.
- `/services`:Codigo de los servicios utilizados en backend
- `/models`: Modelado de los datos almacenados en MongoDb.
- `/routes`: Codigo del manejo de las rutas en el servidor.

## Tecnologías Utilizadas

- MongoDB
- Express.js
- React.js
- Node.js

## Contribuciones y Licencia

Este proyecto no está abierto a contribuciones. 

### Licencia

Este proyecto está bajo la Licencia MIT.
