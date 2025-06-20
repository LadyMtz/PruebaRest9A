const express = require('express');
const app = express();//Uso de express e importacion
const routerPalapa = require('./routes/palapaRouter')

app.use(express.urlencoded({extended:false}))//Uso de formatos JSON
app.use(express.json())

app.use('/palapa',routerPalapa)


module.exports=app;