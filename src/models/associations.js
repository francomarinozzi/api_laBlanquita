const sequelize = require('./index')
const Producto = require('./producto')
const Pedido = require('./pedido')
const Venta = require('./venta')
const DetalleVenta = require('./detalleVenta')


Venta.belongsToMany(Producto, { through: DetalleVenta, foreignKey: 'id_venta' });
Producto.belongsToMany(Venta, { through: DetalleVenta, foreignKey: 'id_producto' });

Pedido.belongsTo(Venta, { foreignKey: 'id_venta', allowNull: false });
Venta.hasOne(Pedido, { foreignKey: 'id_venta' });

DetalleVenta.belongsTo(Venta, { foreignKey: 'id_venta' });
DetalleVenta.belongsTo(Producto, { foreignKey: 'id_producto' });

module.exports = {
    Producto,
    Pedido,
    Venta,
    DetalleVenta
}