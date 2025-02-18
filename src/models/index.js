const {sequelize} = require('../../config/database')
const { Sequelize } = require('sequelize')
const Pedido = require('./pedido')
const Venta = require('./venta')
const Producto = require('./producto')
const DetalleVenta = require('./detalleVenta')
const config = require('../../config/config')


Pedido.belongsTo(Venta, { foreignKey: 'id_venta', allowNull: false, constraints:false });
Venta.hasOne(Pedido, { foreignKey: 'id_pedido' , allowNull:true, constraints:false});


DetalleVenta.belongsTo(Venta, { foreignKey: 'id_venta' });
DetalleVenta.belongsTo(Producto, { foreignKey: 'id_producto' });

//Venta.belongsToMany(Producto, { through: DetalleVenta, foreignKey: 'id_venta' });
//Producto.belongsToMany(Venta, { through: DetalleVenta, foreignKey: 'id_producto' });
//Agregar detalleVenta (model)x|

const connectToDb = async()=>{
    try {
        
        await sequelize.sync({force:true})
        
        await sequelize.authenticate()  
        
        console.log(`Conexion a '${config.database}' exitosa`)
    } catch (error) {
        console.error(`Error al conectarse a la base de datos.${error.message}`)
    }
}


module.exports = { sequelize, connectToDb }