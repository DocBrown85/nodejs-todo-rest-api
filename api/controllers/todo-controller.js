'use strict';

var mongoose = require('mongoose'),

Todo = mongoose.model('Todo');

module.exports = {

    readAll: function(req, res) {

      Todo.find(function(err, todos) {

        if (err) {

          res.send(err);

          return;

        }

        res.json(todos);

      });

    },

    create: function(req, res) {

      // create a new instance of the Todo model
      var todo = new Todo();

      // set todo data (from the request)
      todo.text = req.body.text;
      todo.done = req.body.done;

      // save todo and check for errors
      todo.save(function(err) {

        if (err) {

          res.send(err);

          return;

        }

        res.json({ message: 'Todo Created!' });

      });

    },

    read: function(req, res) {

      Todo.findById(req.params.todoId, function(err, todo) {

        if (err) {

          res.send(err);

          return;

        }

        res.json(todo);

      });

    },

    update: function(req, res) {

      Todo.findById(req.params.todoId, function(err, todo) {

        if (err) {

          res.send(err);

          return;

        }

        todo.text = req.body.text;
        todo.done = req.body.done;

        todo.save(function(err) {

          if (err) {

            res.send(err);

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
        function(err, bear) {

            if (err) {

              res.send(err);

              return;
            }

            res.json({ message: 'Todo Deleted!' });
        }

      );

    }

}
