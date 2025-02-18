const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../../config/database')
const Producto = require('./producto')
const Venta = require('./venta')
class DetalleVenta extends Model {}

DetalleVenta.init({
    id_venta: {
        type: DataTypes.INTEGER,
        references: {
        model: 'Venta',  
        key: 'id',
        },
        allowNull: false,  
    },
    id_producto: {
        type: DataTypes.INTEGER,
        references: {
        model: 'Productos',  
        key: 'id',
        },
        allowNull: false,  
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
        }
    },{
    sequelize,
    modelName: 'DetalleVenta',
    tableName: 'detalle_venta'
}
);

module.exports = DetalleVenta;