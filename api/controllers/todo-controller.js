'use strict';

// =============================================================================
// TODO CONTROLLER FOR OUR API
// =============================================================================

var mongoose = require('mongoose'),

Todo = mongoose.model('Todo');

module.exports = {

    //
    // function to read the current todo list
    //
    readAll: function(req, res) {

      Todo.find(function(err, todos) {

        if (err) {

          res.status(400).send(err);

          return;

        }

        res.json(todos);

      });

    },

    //
    // function to delete completed todos from
    // the todo list
    //
    deleteCompleted: function(req, res) {

      Todo.remove(
        {
          done: true
        },
        function(err) {

            if (err) {

              res.status(400).send(err);

              return;
            }

            res.json({ message: 'Todos Completed Deleted!' });
        }

      );

    },

    //
    // function to create a new todo item
    //
    create: function(req, res) {

      // create a new instance of the Todo model
      // set todo data (from the request)
      var todo = {};
      todo.text = req.body.text;
      todo.done = req.body.done;

      // save todo and check for errors
      Todo.create(todo, function(err, todo) {

        if (err) {

          res.status(400).send(err);

          return;

        }

        // echo the new created todo
        res.json(todo);

      });

    },

    //
    // function to retrieve a todo from the list
    // by its id
    //
    read: function(req, res) {

      Todo.findById(req.params.todoId, function(err, todo) {

        if (err) {

          res.status(400).send(err);

          return;

        }

        res.json(todo);

      });

    },

    //
    // function to update a todo
    //
    update: function(req, res) {

      Todo.findById(req.params.todoId, function(err, todo) {

        if (err) {

          res.status(400).send(err);

          return;

        }

        todo.text = req.body.text;
        todo.done = req.body.done;

        todo.save(function(err) {

          if (err) {

            res.status(400).send(err);

            return;

          }

          res.json({ message: 'Todo Updated!' });

        });

      });

    },

    //
    // function to delete a todo
    //
    delete: function(req, res) {

      Todo.remove(
        {
          _id: req.params.todoId
        },
        function(err) {

            if (err) {

              res.status(400).send(err);

              return;
            }

            res.json({ message: 'Todo Deleted!' });
        }

      );

    }

}
