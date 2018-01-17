'use strict'

var express     = require('express');

var todoList    = require('../controllers/todo-controller.js');

// ROUTES FOR OUR API
// =============================================================================

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

  router.route('/todos')
  .get(todoList.readAll)
  .post(todoList.create);

  router.route('/todos/:todoId')
  .get(todoList.read)
  .put(todoList.update)
  .delete(todoList.delete);

  // register routes: all of our routes will be prefixed with /api
  app.use('/api', router);

}
