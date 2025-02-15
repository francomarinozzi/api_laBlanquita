const { Sequelize } = require('sequelize')
const config = require('../../config/config')


const sequelize = new Sequelize(config.database, config.username, config.password,{
    host:config.host,
    dialect:config.dialect,
    logging:false
})


const connectToDb = async()=>{
    try {
        await sequelize.authenticate()
        await sequelize.sync({force:false})
        console.log(`Conexion a '${process.env.DB_NAME}' exitosa`)
    } catch (error) {
        console.error(`Error al conectarse a la base de datos.${error.message}`)
    }
}

module.exports = { sequelize, connectToDb }