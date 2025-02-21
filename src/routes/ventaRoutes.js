const {Router} = require('express')
const ventaControllers = require('../controllers/ventaControllers')
const auth = require('../middleware/session')
const router = Router()

router.get('/:id',auth, ventaControllers.getVentaById)
router.post('/',auth, ventaControllers.crearVenta)
router.delete('/:id', auth, ventaControllers.eliminarVenta)
module.exports = router