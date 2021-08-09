const Viaje = require('../models/Viajes');

// usando async await metodo asincrono 
exports.cosultasViajes= async (req, res)=>{
   const viajes= await Viaje.findAll({attributes:['id','titulo','precio','fecha_ida','fecha_vuelta','imagen','descripcion','disponibles']})
     res.render('viajes',{
    pagina: 'Proximos Viajes',
    viajes
});


}


exports.mostrarViaje= async(req, res)=>{
    const Id = req.params.id;
  const viaje= await  Viaje.findByPk(Id,{ attributes: ['id','titulo','precio','fecha_ida','fecha_vuelta','imagen','descripcion','disponibles'] })
     res.render('viaje',{
        viaje
   });
     

}
/*
usando arros funtion o funcion se flechas 
exports.mostrarViaje=(req, res)=>{
    const Id = req.params.id;
    Viaje.findByPk(Id,{ attributes: ['id','titulo','precio','fecha_ida','fecha_vuelta','imagen','descripcion','disponibles'] })
        .then(viaje => res.render('viaje',{
         viaje
     }))
     .catch(error=>console.log(error))
     

}*/