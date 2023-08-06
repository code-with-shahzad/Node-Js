const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todos = new Schema({
  title: String,
  body: String,
  isCompleted: Boolean
});
module.exports = mongoose.model("todo",Todos);

