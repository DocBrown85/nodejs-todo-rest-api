'use strict';

// =============================================================================
// TODO MODEL FOR OUR API
// =============================================================================

// import mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define a schema for our TODO
var TodoSchema = new Schema({
  // each todo has

  // a text field stating its description
  text: {
    type: String,
    required: 'enter the name of the task'
  },

  // a boolean done field to mark whether it's completed or not
  done: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Todo', TodoSchema);
