const { Model, DataTypes } = require('sequelize');
const {sequelize} = require('../../config/database')

class Producto extends Model {}

Producto.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique:true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  }
},{
    sequelize,
    modelName:'Producto'
    }
)



module.exports = Producto