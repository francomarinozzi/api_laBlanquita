const {Router} = require('express')
const productoRoutes = require('./productoRoutes')
const userRoutes = require('./userRoutes')
const detalleRoutes = require('./detalleRoutes')
const ventaRoutes = require('../routes/ventaRoutes')
const router = Router()

router.use('/productos', productoRoutes)
router.use('/users', userRoutes)
router.use('detalle', detalleRoutes)
router.use('ventas', ventaRoutes)

module.exports = router