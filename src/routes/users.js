const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

//Get para obtener datos de estas paginas 
router.get('/users/signin', (req, res)=>{
    res.render('users/signin');
});

router.post('/users/signin', passport.authenticate('local',{
    successRedirect: '/notes',
    failureRedirect: '/users/signin',
    failureFlash: true
}));

router.get('/users/signup', (req,res)=>{
    res.render('users/signup');
}); 

//Una solicitud POST envía datos a un recurso específico para ser procesados
//ya que sus datos ingresados ​​se procesarán y clasificarán en una base de datos, etc.
router.post('/users/signup', async (req, res) => {
    const { name, email, password, confirm_password } = req.body;
    const errors = [];

    //If-else son para la validación de los valores ingresados 
    if(name.length <= 0){
        errors.push({text: 'Ingresa tu nombre'});
    }
    if(password != confirm_password){
        errors.push({text: 'Las contraseñas no coinciden'});
    }
    if(password.length < 6){
        errors.push({text: 'La contraseña debe de tener mas de 6 digitos'});
    }
    if(errors.length > 0){
        res.render('users/signup', { errors, name, email, password, confirm_password });
    } else{
        //Devuelve un documento que satisface los criterios de consulta especificados en la colección o vista
        const emailUser = await User.findOne({email: email});
        if(emailUser){
            //tienen acceso al objeto de solicitud (req), al objeto de respuesta (res)
            req.flash('error_msg','El correo esta siendo usado');
            res.redirect('/users/signup');
        }else{
            const newUser = new User({name, email, password});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg','Registrado',200);
            res.redirect('/users/signin');
        }
    }
});

router.get('/users/logout', (req, res) =>{
    req.logout();
    res.redirect('/');
});

module.exports=router;