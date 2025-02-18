const DetalleVenta = require('../models/detalleVenta')

const agregarProducto = async(req,res) =>{
    /*Agrega productos a una venta
    Ejemplo tablas:
    id_venta | id_producto | cantidad
    1          2             3
    1          4             1
    La venta de id=1 contiene el producto id=2 x3 y el producto id=4 x1
    
    */
    const {id_producto, cantidad} = req.body

    try{
        const detalle = await DetalleVenta.create({id_producto,cantidad})
        if(!detalle){return res.status(400).json({message:`Error al agregar producto`})}
        return res.status(200).json({message:`Producto agregado`})
    }
    catch(error){
        return res.status(500).json({message:`Error al agregar producto:${error.message}`})
    }
}


module.exports = {agregarProducto}