const { Router } = require('express') 
const detalleControllers = require('../controllers/detalleControllers')
const router = Router()
const auth = require('../middleware/session')

router.post('/',auth,  detalleControllers.agregarProducto)

module.exports = router