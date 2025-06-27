const mongoose = require('mongoose')//Importar. Libreria que Sirve para la sintaxis de la bd, sin necesidad de hacer la consulta
const CONFIG = require('./configuracion')//importando cadena de q

module.exports={
    conection : null,//
    connect : () => {
        if(this.conection)return this.conection//si ya existe una conexion
        return mongoose.connect(CONFIG.DB)//pidiendo conexio a servidor
        .then(conn => { //
            this.conection = conn 
            console.log('La conexión se realizó con éxito')//aparece eso cuando la conexion es correcta
        })
        .catch(e => console.log('Error en la conexión', e))//Conexion incorrecta
    }//exportar informacion
}