const { Router } = require('express') 
const detalleControllers = require('../controllers/detalleControllers')
const router = Router()

router.post('/', detalleControllers.agregarProducto)

module.exports = router