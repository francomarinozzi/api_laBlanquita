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
    origin: 'http://localhost:5173',  
    credentials: true,  
  }));
  
app.use(session({
    secret: process.env.SESSION_SECRET,
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