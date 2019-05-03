const mongoose = require('mongoose');
const { Schema } = mongoose;

//La constante es para que mongoose conozca el modelo de las notas
//Schema que consta de los valores que ingresan a las notas
const NoteSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now},
    user: { type: String}
});

module.exports = mongoose.model('Note', NoteSchema);