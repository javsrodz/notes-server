//Objeto para facilitar la creación de rutas

/*.Router() =  El enrutador se encargará de simular las
transiciones entre documentos observando los cambios en la URL.*/
const router = require('express').Router();

router.get('/',(reg,res)=>{
    //Render es para enviar un archivo 
    res.render('index');
});

router.get('/about',(reg,res)=>{
    res.render('about');
});

//Lo que asigne a module.exports o exportaciones , se expondrá como un módulo.
module.exports=router;