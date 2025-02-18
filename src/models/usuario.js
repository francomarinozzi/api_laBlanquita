const {Model,DataTypes} = require('sequelize')
const {sequelize} = require('../../config/database')
const bcrypt = require('bcryptjs')


class Usuario extends Model {}

Usuario.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
},{
    sequelize,
    modelName: 'Usuario'
})

Usuario.beforeCreate(async (user) =>{
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
})


module.exports = Usuario
