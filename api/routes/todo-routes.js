'use strict'

// =============================================================================
// ROUTES FOR OUR API
// =============================================================================

var express     = require('express');

// import Todo Controller
var todoList    = require('../controllers/todo-controller.js');

module.exports = function(app) {

  // get an instance of the express Router
  var router = express.Router();

  //
  // configure routes
  //

  // test route, to check if server is up and running
  router.route('/')
  .get(function(req, res) {
    res.json({ message: 'NodeJS TODO REST API' });
  });

  //
  // TODO REST ROUTES
  //

  // all URLs ending with '/todos' will be routed here
  router.route('/todos')
  .get(todoList.readAll)              // GET requests will execute this function
  .post(todoList.create)              // POST requests will execute this function
  .delete(todoList.deleteCompleted);  // DELETE requests will execute this function

  // all URLs ending with '/todos/:todoId' will be routed here
  router.route('/todos/:todoId')
  .get(todoList.read)                 // GET requests will execute this function
  .put(todoList.update)               // PUT requests will execute this function
  .delete(todoList.delete);           // DELETE requests will execute this function

  // register routes: all of our routes will be prefixed with /api
  app.use('/api', router);

}
