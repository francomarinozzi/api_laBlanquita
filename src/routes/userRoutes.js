const { Router } = require('express') 
const userControllers = require('../controllers/userControllers')
const router = Router()


router.post('/', userControllers.register)
router.post('/login',userControllers.login)
router.post('/logout', userControllers.logout)

module.exports = router