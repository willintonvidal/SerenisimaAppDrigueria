const itemRoutes = require('express').Router();
const usuRoutes = require('express').Router();
// Require Item model in our routes module
var Usuarios = require('../models/Usuario');

// Defined store route
usuRoutes.route('/addusuarios').post((req, res, next) => {
  var item = new Usuarios(req.body);
  item.save()
  .then(item => {
    res.status(200).json({'item': 'Item added successfully'});
  })
  .catch(err => {
    res.status(400).send("unable to save to database");
  });
});


usuRoutes.route('/Mostrarusuarios').get((req, res, next) => {
  Usuarios.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Defined edit route
usuRoutes.route('/editusuario/:id').get(function (req, res) {
  var id = req.params.id;
  Usuarios.findById(id, function (err, item){
      res.json(item);
  });
});

//  Defined update route
usuRoutes.route('/updateusuario/:id').post(function (req, res) {
  Usuarios.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.name = req.body.name;
      item.apellido = req.body.apellido;
      item.correo = req.body.correo;
      item.celular = req.body.celular;

      item.save().then(item => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});


usuRoutes.route('/eliminarusu/:id').get(function (req, res) {
  Usuarios.findByIdAndRemove({_id: req.params.id}, function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


module.exports = usuRoutes;
