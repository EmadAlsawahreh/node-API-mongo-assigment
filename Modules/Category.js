const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const Category = new Schema({
  _id: {
    type: Number,
    required: true,
    default: "No id"
  },
  CategoryName: {
    type: String,
    required: true,
    default: "No CategoryName"
  },
});
module.exports = mongoose.model('Category', Category)