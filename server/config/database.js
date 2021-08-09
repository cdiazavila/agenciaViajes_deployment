const  Sequelize  = require('sequelize');
require('dotenv').config({path: 'variables.env'})
console.log(process.env.BD_HOST)
module.exports= new Sequelize(process.env.BD_NOMBRE,process.env.BD_USER,process.env.BD_PASS,{
    host:process.env.BD_HOST,
    dialect: 'mysql'
    
});
