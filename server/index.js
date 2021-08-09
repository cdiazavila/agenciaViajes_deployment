//importar express
const express= require('express');
const { dirname } = require('path');
const path = require('path');
const bodyParser= require('body-parser')
const routes = require('./routes');
const configs = require('./config');


 /* db.authenticate()
     .then(()=>console.log('DB conectada'))
     .catch(error=>console.log(error))
     */
// configurar express
const app = express();
// habilitar pug 
app.set('view engine','pug');
// Añadir las vistas
app.set('views', path.join(__dirname, './views'));

// cargar una carpeta estatica llamada Public 
app.use(express.static('public'));

// validar si estamos en desarrollo o en produccion 
const config = configs[app.get('env')];
 // creamos la variable para el sitio web 
 app.locals.titulo = config.nombresitio;

// Mostrar la Fecha Actual y la ruta 
app.use((req, res, next)=>{
   const fecha = new Date();
   res.locals.fechaActual= fecha.getFullYear();
   res.locals.ruta=req.path;
   return next();
})

// Ejecutamos el Body Parser 
app.use(bodyParser.urlencoded({extended: true}));
//cargar las rutas
app.use('/',routes());
/* puertos y host para la app*/
const host =process.env.HOST || '0.0.0.0';
const port =process.env.PORT || 3000;

app.listen(port,host,()=>{
   console.log('El Servidor esta funcinando');
});