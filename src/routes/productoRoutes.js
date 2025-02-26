const { Router } = require('express') 
const productoControllers = require('../controllers/productoControllers')
const router = Router()
const auth = require('../middleware/session')

router.get('/', productoControllers.getProductos)

router.post('/', auth, productoControllers.crearProducto)

router.patch('/:id', auth, productoControllers.modificarPrecio)

router.delete('/:id', auth, productoControllers.eliminarProducto)

module.exports = router