const {Router} = require('express')
const ventaControllers = require('../controllers/ventaControllers')

const router = Router()

router.get('/:id', ventaControllers.getVentaById)
router.post('/',ventaControllers.crearVenta)

module.exports = router