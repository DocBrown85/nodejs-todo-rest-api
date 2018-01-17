'use strict';

var mongoose = require('mongoose'),

Todo = mongoose.model('Todo');

module.exports = {

    readAll: function(req, res) {

      Todo.find(function(err, todos) {

        if (err) {

          res.status(400).send(err);

          return;

        }

        res.json(todos);

      });

    },

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

    read: function(req, res) {

      Todo.findById(req.params.todoId, function(err, todo) {

        if (err) {

          res.status(400).send(err);

          return;

        }

        res.json(todo);

      });

    },

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

    delete: function(req, res) {

      Todo.remove(
        {
          _id: req.params.todoId
        },
        function(err, todo) {

            if (err) {

              res.status(400).send(err);

              return;
            }

            res.json({ message: 'Todo Deleted!' });
        }

      );

    }

}
