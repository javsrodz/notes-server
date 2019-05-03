const mongoose = require('mongoose');
const { Schema } = mongoose;
//Bcrypt es una función de hashing de passwords
const bcrypt = require('bcryptjs');

//Constante de esquema de usuario
//Para poder usar guardar un arreglo de datos de los usuarios en la BD
const UserSchema = new Schema({
    name: { type: String, required: true},
    email: {type: String, required: true},
    password: { type: String, required: true},
    date: { type: Date, default: Date.now}
});

//Encriptación de datos (Password) 
//Valor salt, es un fragmento aleatorio que se usará para generar el hash asociado a la password, y se guardará junto con ella en la base de datos.
UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
};

UserSchema.methods.matchPassword = async function (password){
    return await bcrypt.compare(password, this.password)
};

module.exports = mongoose.model('User', UserSchema);