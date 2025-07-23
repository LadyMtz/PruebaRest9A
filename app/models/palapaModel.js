const mongoose =require('mongoose')

const palapaEsquema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
     precio:{
        type:Number,
        required:true
    },
     capacidad:{
        type:Number,
        required:true
    },
    existencia:{
        type:Number,
        default:10
    }
})

const palapaModel = mongoose.model('bebidas',palapaEsquema)

module.exports=palapaModel