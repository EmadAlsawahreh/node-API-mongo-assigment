const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;
const TShirt = new Schema({
  _id:{
    type: Number,
    required: true,
    default: "No shirt id"
  },
  TshirtName: {
    type: String,
    required: true,
    default: "No TShirtName"
  },
  TshirtCategoryID: {
    type: Number,
    required: true,
    default: "No Category id"
  },
  TshirtPrice: {
    type: String,
    required: true,
    default: "No id"
  },
  NumberOfAvailableItems: {
    type: Number,
    required: true,
    default: "No items available"
  },
  CategoryName: [{
    type: ObjectId,
    ref: "Category"
  }]
});
module.exports = mongoose.model('TShirt', TShirt)