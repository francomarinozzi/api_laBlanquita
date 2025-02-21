
const Producto = require("../models/producto")


const getProductos = async (req,res) => {
    try {
        const productos = await Producto.findAll()
        if(productos.length == 0){return res.status(404).json({message:'No se encontraron productos'})}
        res.status(200).json(productos)
    } catch (error) {
        return res.status(500).json({message:`Error al mostrar productos: ${error.message}`})
    }
}


const crearProducto = async(req,res)=>{
    const producto = req.body
    try { 
        const nuevoProducto = await Producto.create(producto)
        return res.status(200).json({message:`Producto '${producto.nombre}' creado con éxito.`, paciente:nuevoProducto.toJSON()})
    } catch (error) {
        return res.status(500).json({message:`Error al crear producto.${error.message}`})
    }
}

const modificarPrecio = async(req,res) =>{
    const id = req.params.id
    const {precio} = req.body
    try {
        const producto = await Producto.findByPk(id)
        if(!producto){return res.status(404).json({message:'Producto no encontrado'})}
        const productoActualizado = await Producto.update(
            { precio: precio },
            {where: {id:id}}
        )
        return res.status(200).json(`Nuevo precio de '${producto.nombre}': ${precio}`)
    } catch (error) {
        return res.status(500).json({error:'Error al actualizar el precio', details:error.message})
    }
}

const eliminarProducto = async(req,res) =>{
    const id = req.params.id
    try {
        const producto = await Producto.findByPk(id)
        if(!producto){return res.status(404).json({message:'Producto no encontrado'})}
        await Producto.destroy({where:{id:id}}
        )
        return res.status(200).json({message:`Producto '${producto.nombre}' eliminado con exito`})
    } catch (error) {
        return res.status(500).json({message:`Error al eliminar producto. ${error.message}`})       
    }
}

module.exports = {
    getProductos,
    crearProducto,
    modificarPrecio,
    eliminarProducto
}