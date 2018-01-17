// BASE SETUP
// =============================================================================

// call the packages we need
var express     = require('express');       // call express
var app         = express();                // define a new app with express
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

// setup database connection
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://todo-db-user:todo-db-password@ds159707.mlab.com:59707/tododb',
  {
    useMongoClient: true
  }
);

//
var Todo        = require('./api/models/todo-model.js');

// import out route module
var routes      = require('./api/routes/todo-routes.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// this will allow CORS request: the client application can be anywhere
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// define application port
var port        = process.env.PORT || 3000;

// register todo routes
routes(app);

app.listen(port, function() {
  console.log('NodeJS TODO REST API server started on: ' + port);
});
