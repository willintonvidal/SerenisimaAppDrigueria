var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Usuario = new Schema({
  name: { type: String },
  apellido: { type: String },
  correo:{type: String},
  celular:{type: String}
},{
    collection: 'usuarios'
});


module.exports = mongoose.model('Usuario', Usuario);
