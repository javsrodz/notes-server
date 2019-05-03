const mongoose = require('mongoose');

//Mongoose para poder leer e inicializar la base de datos de Mongo
mongoose.connect('mongodb://localhost/notes-db-app',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
})  
    //Promesas para la base datos
    //Los then son para ejecutar acciones asincrónicas en secuencia.
    .then(db => console.log('Conectado'))
    //Catch resolverá cualquier error que haya ocurrido durante la ejecución del código.
    .catch(err => console.log(err));