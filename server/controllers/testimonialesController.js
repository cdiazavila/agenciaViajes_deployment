const Testimonial = require('../models/Testimoniales');
exports.cosultasTestimoniales= async(req, res)=>{
   const testimoniales =await  Testimonial.findAll({attributes:['id','nombre','correo','mensaje']})
   res.render('testimoniales',{
    pagina: 'Testimoniales',
    testimoniales   
});
 }

// add los testimoniles 
 exports.agregarTestimonial= async(req,res)=>{
    // validamos que todo los campos esten llenos 
     let {nombre,correo,mensaje}=req.body;
     let errores =[];

     if(!nombre){
         errores.push({'mensaje':'Agrega tu nombre'})
     }
     if(!correo){
        errores.push({'mensaje':'Agrega tu correo'})
    }
    if(!mensaje){
        errores.push({'mensaje':'Agrega un mensaje'})
    }

    //revisa por errores 
    if(errores.length>0){
        //muestra el error a la vista 
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimonial',
            testimoniales
        })
    }else{
        //Guarda los datos en una BD 
       Testimonial.create({
           nombre,
           correo,
           mensaje})
          .then(testimonial => res.redirect('/testimoniales'))
          .catch(error=> console.log(error))
    }
}