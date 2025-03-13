const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')
const session = require('express-session')

const register = async(req,res) =>{
    try{
        const newUser = await Usuario.create(req.body)
        return res.status(201).json({message:'Usuario registrado con éxito'})
        /*
        Estructura del json: 
            {
                "username":
                "email":
                "password"
            }
        */
    }
    catch(error){
        return res.status(500).json({message:`Error al registrar usuario. ${error.message}`})
    }
}

const login = async(req,res) =>{
    try{
        const {email,password} = req.body 

        const user = await Usuario.findOne({where:{email:email}})
        
        

        if(!user){
            return res.status(400).json({message:`Usuario con el correo ${email} no encontrado.`})
        }
        
        const match = await bcrypt.compare(password, user.password)

        if(!match){
            return res.status(400).json({message:`Contraseña incorrecta.`})
        }

        req.session.user = {nombre: user.username}

        console.log('Sesión activa:', req.session)
        
        return res.status(200).json({message:`Sesion iniciada con exito.`, user: {
            username: user.username,
            email: user.email
          }})
    }
    catch(error){
        return res.status(500).json({message:`Error al iniciar sesion. ${error.message}`})
    }
}

const logout = async(req,res) =>{
    if (!req.session.user) {
        return res.status(400).json({ message: "No hay sesión activa" });
    }
    req.session.destroy(err =>{
        if(err){
            return res.status(500).json({message:`Error al cerrar sesion`})
        }
        res.clearCookie('connect.sid');
        return res.status(200).json({message:`Sesion cerrada`})
    })
}

module.exports = {
    register,
    login,
    logout
}