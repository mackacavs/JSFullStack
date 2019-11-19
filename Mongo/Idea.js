const mongoose = require('mongoose')
// Requires the schema for creating databases
const Schema = mongoose.Schema;

const IdeaSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//Creates the model
mongoose.model('ideas', IdeaSchema);
const Idea = mongoose.model('ideas')