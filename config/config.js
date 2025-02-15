require('dotenv').config()
module.exports = {
    username: process.env.DB_USERNAME || 'postgres',  // Usa variable de entorno o un valor por defecto
    password: process.env.DB_PASSWORD || '123',      // Lo mismo para la contraseña
    database: process.env.DB_NAME || 'db',   // Nombre de la base de datos
    host: process.env.DB_HOST || 'localhost',                  // Dirección del servidor de la base de datos
    dialect: 'postgres'
}