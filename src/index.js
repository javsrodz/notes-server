/*Inicializaciones*/ 

//Constante de express realizando un constructor
const express = require('express');
//Un path para poder usar un metodo join para unir directorios
const path = require('path');
const exphbs = require('express-handlebars');
const methodrOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

//Constante de express para la app
const app = express()
require('./database');
require('./config/passport');


/*Ajustes*/

//Para asignar el puerto
//La primera app.set le dice a Express qué motor de plantilla usar
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));

//Configuración de vistas
app.engine('.hbs', exphbs({
    defaultLayout:'main.hbs',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine','.hbs');


/*Middlewares*/
app.use(express.urlencoded({extended: false}));
app.use(methodrOverride('_method'));
//Autenticazión de usuario para almacenar datos de manera temporal
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


/*Variables goblales*/
app.use((req, res, next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

/*Rutas*/

//Para hacerle saber al servidor
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

/*Archivos estaticos*/
app.use(express.static(path.join(__dirname,'public')));


/*Servidor*/

//Asignar puerto y corroborar si el puerto funciona
app.listen(app.get('port'), ()=>{
    console.log('Server', app.get('port'));
});