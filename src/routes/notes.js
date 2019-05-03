//Requise express para poder leer comandos de Express
const express = require('express');
const router = express.Router();

//Constante que usa script de Note.js
const Note = require('../models/Note');
const { isAuthenticated } = require('../helpers/auth')

router.get('/notes/add', isAuthenticated, (req,res)=>{
    res.render('notes/new-note');
});


//Alertas de errores al ingresar datos 
//Async permite que el navegador descargue el archivo script asíncronamente
router.post('/notes/new-note', isAuthenticated, async(req,res)=>{
    //Contantes de titulo, validación y errores para poder hacer validaciones
    const { title, description } = req.body;
    const errors = [];

    //Ifs para una validación de datos, si llega a faltar datos
    if(!title){
        errors.push({text:'Please write a Title'});
    }
    if(!description){
        errors.push({text:'Please write a description'});
    }
    if(errors.length > 0){
        res.render('notes/new-note', {
            errors,
            title,
            description
        });
    }
    //De no haber ni un error se guarda y redirecciona
    else{
        const newNote = new Note({ title, description });
        newNote.user = req.user.id;
        await newNote.save();
        req.flash('success_msg', 'Nota agregada');
        res.redirect('/notes');
    }
});

router.get('/notes', isAuthenticated, async (req, res)=>{
    const notes = await Note.find({user: req.user.id}).sort({date:'desc'});
    res.render('notes/all-notes', { notes });
});

//Sobrecargando los métodos de calcular importe y la edición para editar
router.get('/notes/edit/:id', isAuthenticated, async (req, res)=>{
    const note = await Note.findById(req.params.id)
    res.render('notes/edit-note', { note });
});

//Sobrecargando los métodos de calcular importe y la edición para actualizar
router.put('/notes/edit-note/:id', isAuthenticated, async (req,res)=>{
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    req.flash('succes', 'Nota actualizada satisfactoriamente');
    res.redirect('/notes');
});

//Sobrecargando los métodos de calcular importe y la edición para borrar
router.delete('/notes/delete/:id', isAuthenticated, async (req,res)=>{
    await Note.findByIdAndDelete(req.params.id);
    req.flash('succes', 'Nota borrada satisfactoriamente');
    res.redirect('/notes');
})

module.exports=router;