require('dotenv').config()
const config = require('../config/config')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const {connectToDb} = require('./models')
const router = require('./routes')
const cors = require('cors');
const session = require('express-session')



app.use(cors({
    origin: 'http://127.0.0.1:5500',  // Permite cualquier origen, solo el dominio, no el archivo específico
    credentials: true,  // Permite el envío de cookies y credenciales
  }));
  
app.use(session({
    secret: '123',
    resave: false,
    saveUninitialized: true,
    cookie: {secure:false}
}));

app.use(express.json())
app.use(router)
connectToDb(); 

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
    
})