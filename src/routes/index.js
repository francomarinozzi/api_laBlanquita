const {Router} = require('express')
const productoRoutes = require('./productoRoutes')
const userRoutes = require('./userRoutes')

const ventaRoutes = require('../routes/ventaRoutes')
const router = Router()

router.use('/productos', productoRoutes)
router.use('/users', userRoutes)

router.use('ventas', ventaRoutes)

module.exports = router