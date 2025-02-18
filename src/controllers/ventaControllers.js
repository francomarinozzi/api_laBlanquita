const Venta = require('../models/venta')

const sequelize = require('sequelize')

const getVentaById = async(req, res) => {
    const idVenta = req.params.id
    try{
        const venta = await Venta.findByPk(idVenta)
        if(!venta){return res.status(404).json({message:`No se encontró la venta`})}

        const productos = await Detalle.findAll({
            where:{
                id_venta:idVenta
            }}
        )
        return res.status(200).json({venta, productos})
    }
    catch(error){
        return res.status(500).json({message:`Error: ${error.message}`})
    }
    
    
}

const crearVenta = async (req,res) =>{
    try{
        const nuevaVenta = await Venta.create({
            ...req.body,
            fecha_hora:sequelize.fn('NOW')
        })
        return res.status(200).json(nuevaVenta)
    }
    catch(error){
        return res.status(500).json({message:`Error al crear venta:${error.message}`})
    }
}

module.exports = {
    getVentaById,
    crearVenta
}