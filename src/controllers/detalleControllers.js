const Detalle = require('../models/detalleVenta')

const agregarProducto = async(req,res) =>{
    const {id_producto, cantidad} = req.body

    try{
        const detalle = await Detalle.create({id_producto,cantidad})
        if(!detalle){return res.status(400).json({message:`Error al agregar producto`})}
        return res.status(200).json({message:`Producto agregado`})
    }
    catch(error){
        return res.status(500).json({message:`Error al agregar producto:${error.message}`})
    }
}


module.exports = {agregarProducto}