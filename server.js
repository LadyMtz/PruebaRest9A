const app = require('./app/app')
const config = require('./app/config/configuracion')
const conexion = require('./app/config/conexion')

conexion.connect()//.connect es un método y siempre llevan ()

app.listen(config.PORT,()=>{
    console.log(`Aplicacion corriendo en puerto ${config.PORT}`);
})