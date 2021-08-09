const express = require('express');
const router = express.Router();
/* LLAMAMOS LOS CONTROLLERS */
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesCotroller = require('../controllers/testimonialesController');

module.exports = function(){
    // llamamos las consultas para el home pagina principal 
    router.get('/', homeController.consultasHomePege)
    // llamamos a la vista nosotros 
    router.get('/nosotros', nosotrosController.infoNosotros  );
    // mostramos la vista de las rutas viajes 
    router.get('/viajes', viajesController.cosultasViajes);
    // mostramos un viaje en detalle
    router.get('/viajes/:id',viajesController.mostrarViaje);
    // mostramos los testemoniales 
    router.get('/testimoniales',testimonialesCotroller.cosultasTestimoniales);
    // agregamos los Testimoniales
    router.post('/testimoniales',testimonialesCotroller.agregarTestimonial); 
    return router;
}