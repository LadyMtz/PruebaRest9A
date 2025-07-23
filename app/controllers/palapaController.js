const palapaModel = require('../models/palapaModel')

function buscarTodo(req,res){
    palapaModel.find({})//metodo que se ejecuta a partir de mongoose para la visualizacion de la informacion
    .then(bebidas=>{
        if(bebidas.length){
            return res.status(200).send({bebidas})//toda la informacion fue correcto 200
        }
        return res.status(204).send({mensaje:"No hay nada que mostrar"})//manera correcta, pero no hay nada que mostrar
    })
    .catch(e => {return res.status(404).send({mensaje:`Error al solicitar la información ${e}`})})//unicamente manda errores

}

function agregar(req,res){
    //console.log(req.body)
    new palapaModel(req.body).save()
    .then(info =>{
        return res.status(200).send({
            mensaje:"La información se guardo con éxito",
            info
        })
    })
    .catch(e =>{
        return res.status(404).send({
            mensaje:`Error al guardar la información ${e}`})
    })
}
//
function buscarBebida(req,res,next){
    if(!req.body)req.body={}
    let consulta={}
    consulta[req.params.key]=req.params.value//Generando la propiedad(key) y el atributo(value)
    console.log(consulta)
     palapaModel.find(consulta)
    .then(bebidas=>{
        if(!bebidas.length) return next()
            req.body.bebidas=bebidas//creacion de variable
        return next()
    })//error en caso de no mandar bien la informacion
    .catch(e=>{
        req.body.e =e
        return next()
    })
}

//Traer el registro con su respectiva información
function mostrarBebida(req,res){
    if(req.body.e) return res.status(404).send({mensaje:"Error al consultar la información"})
    
        if(!req.body.bebidas)return res.status(204).send({
        mensaje:"No hay información que mostrar"
    })//si no existe o viene vacia !

    let bebidas = req.body.bebidas
    return res.status(200).send({bebidas})
}

function eliminarBebida(req,res){
    var bebidas ={}
    bebidas = req.body.bebidas
    palapaModel.deleteOne(bebidas[0])
    .then(inf =>{
        return res.status(200).send({mensaje:"Bebida eliminada"})
    })
    .catch(e =>{
        return res.status(404).send({mensaje:"Error al eliminar la bebida",e})
    })
}

function actualizarBebida(req,res){
     let filtro = {};
    filtro[req.params.key] = req.params.value;
    palapaModel.updateMany(filtro, req.body)
        .then(inf =>{
        return res.status(200).send({mensaje:"Bebida actualizada"})
    })
         .catch(e =>{
        return res.status(404).send({mensaje:"Error al actualizar la bebida",e})
    })
}
     
 
module.exports={
    buscarTodo,
    agregar,
    buscarBebida,
    mostrarBebida,
    eliminarBebida,
    actualizarBebida
}

