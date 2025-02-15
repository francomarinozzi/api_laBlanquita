const {Model,DataTypes} = require('sequelize')
const {sequelize} = require('./index')

class Venta extends Model {}

Venta.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  fecha_hora: {
    type: DataTypes.DATE,
    allowNull: false, 
  },
  forma_pago:{
    type: DataTypes.STRING,
    allowNull:false
  },
  id_pedido: {
    type: DataTypes.INTEGER,
    allowNull: true, 
    references: {
      model: 'Pedidos', 
      key: 'id', 
    }
  }
},{
        sequelize,
        modelName:'Venta'
    }
)



module.exports = Venta 