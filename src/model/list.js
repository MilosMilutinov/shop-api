const mongoose = require("mongoose");

const { shopSchema } = require("./shop.js");

const listSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    required: true,
    unique: true,
  },
  updated: {
    type: Date,
  },
  items: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Item",
    },
  ],
  // referenciraj na shop - nisam stigao..
  shop: [shopSchema],
});

const List = mongoose.model("List", listSchema);
module.exports = List;