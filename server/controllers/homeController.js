const Testimonial = require('../models/Testimoniales');
const Viaje = require('../models/Viajes');

// usamos Async / Await 
exports.consultasHomePege= async(req, res)=>{

const viajes = await Viaje.findAll({
    limit: 3,
    attributes:['id','titulo','precio','fecha_ida','fecha_vuelta','imagen','descripcion','disponibles']
});

  const testimoniales= await Testimonial.findAll({
        limit: 3,
        attributes:['id','nombre','correo','mensaje']})

res.render('index',{
    pagina: 'Proximos Viajes',
    clase: 'home',
    viajes,
    testimoniales
})

}
/*
exports.consultasHomePege=(req, res)=>{

    const  promises =[];
    promises.push(
        Viaje.findAll({
            limit: 3,
            attributes:['id','titulo','precio','fecha_ida','fecha_vuelta','imagen','descripcion','disponibles']})
    )
   
promises.push(
    Testimonial.findAll({
        limit: 3,
        attributes:['id','nombre','correo','mensaje']})
)

// pasar el promises y ejectarlo
 
const resultado = Promise.all(promises);
    resultado.then(resultado => res.render('index',{
     pagina: 'Proximos Viajes',
     clase: 'home',
     viajes: resultado[0],
     testimoniales: resultado[1]
 }))
 .catch(error=>console.log(error))

} */