require('dotenv').config()
module.exports = {
    username: process.env.DB_USERNAME || 'franpostgres',  
    password: process.env.DB_PASSWORD || '123',      
    database: process.env.DB_NAME || 'lablanquita',   
    host: process.env.DB_HOST || 'localhost',         
    dialect: 'postgres',
    db_url:process.env.DB_URL || 'postgres://franpostgres:123@localhost:5432/lablanquita'

}