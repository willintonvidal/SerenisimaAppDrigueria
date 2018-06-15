var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = new Schema({
  name: { type: String },
  price: { type: Number },
  descripcion:{type:String},
  usos:{type:String},
  fechaVencimiento:{type:Date},
  fechaIngreso:{ type: Date, default: Date.now },
  tabletasTotal:{type:Number},
  cuanTabletasSobre:{type:Number},
  cuanSobresCaja:{type:Number}
  
},{
    collection: 'items'
});

module.exports = mongoose.model('Item', Item);

