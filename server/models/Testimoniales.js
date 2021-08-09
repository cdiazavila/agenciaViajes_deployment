const Sequelize = require('sequelize');
const db = require('../config/database');

const Testimonial = db.define('testimoniales',{
    id:{
        type:Sequelize.INTEGER, primaryKey:true
     },
     nombre:{
         type: Sequelize.STRING
     },
     correo:{
        type: Sequelize.STRING
    },
    mensaje:{
        type: Sequelize.STRING
    }
});

module.exports=Testimonial; 