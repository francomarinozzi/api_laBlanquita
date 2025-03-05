# 📌 API - Fábrica de Pastas 'la blanquita' ***(En desarrollo)***

## 📝 Descripción
API para registro de ventas y pedidos en una fábrica de pastas. Permite registrar y administrar pedidos tanto para **delivery** como para **mostrador**, además de incluir una **calculadora** para facilitar la venta en mostrador.

## 🚀 Características principales
- 📦 **Gestión de pedidos:** Registro de pedidos para delivery y mostrador.
- 💰 **Control de ventas:** Registro de ventas realizadas. Monto total, detalle y método de pago.
- 🛒 **Calculadora de precios:** Herramienta para calcular costos en el mostrador.

## 🏗️ Tecnologías utilizadas
- **Backend:** Node.js - Express - Sequelize
- **Base de datos:** PostgreSQL


## 📌 Próximas mejoras
- Implementar autenticación con JWT.
- Generacion de QR con APi Mercadopago.
- Validaciones(JOI).
- UI(en desarrollo).

Aclaración:
La app está configurada para levantar la BD desde un contenedor de docker con docker-compose, y
la app desde localhost.
Recien vez que la app esté 'finalizada' voy a crear la imágen de esta para poder usarla solo con Docker. 
