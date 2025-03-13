const { Router } = require('express') 
const userControllers = require('../controllers/userControllers')
const router = Router()
const auth = require('../middleware/session')

router.post('/register', userControllers.register)
router.post('/login',userControllers.login)
router.post('/logout', userControllers.logout)

router.get('/session_check', auth, (req,res) =>{  
    res.status(200).json({message:`Sesión iniciada`})
})


module.exports = router