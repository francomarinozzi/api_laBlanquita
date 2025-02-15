const {Model,DataTypes} = require('sequelize')
const {sequelize} = require('./index')

class Pedido extends Model {}

Pedido.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  direccion:DataTypes.STRING,
  nombre_cliente:{
    type: DataTypes.STRING,
    allowNull:false
  },
  estado:{
    type:DataTypes.STRING,
    allowNull:false
  },
  id_venta: {
    type: DataTypes.INTEGER,
    references: {
        model: 'Ventas',  // Relación con la tabla 'Ventas'
        key: 'id'
    },
    allowNull: false, // Permitir que no haya venta asociada si es necesario
}
},{
    sequelize,
    modelName:'Pedido'
    }
)



module.exports = Pedido