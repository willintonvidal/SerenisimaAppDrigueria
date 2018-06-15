const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const morgan = require('morgan');
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  { DB } = require('./config/DB'),
  itemRoutes = require('./routes/item');
  usuarioRoutes = require('./routes/usuario');

mongoose.Promise = global.Promise;
mongoose.connect(DB)
  .then(() => console.log('Db is conencted'))
  .catch(err => console.error(err));

const app = express();
var port = process.env.PORT || 4000;

// middlewares
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/items', itemRoutes);
app.use('/usuario', usuarioRoutes);


// static file
app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.static(__dirname + "/dist/"));
//app.get(/.*/,function(req,res){
  //res.sendfile(__dirname + "/dist/index.html");
//});



// start the server
var server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
