const mongoose = require('mongoose');
const categSchema = require("./category.js")

const itemSchema = mongoose.Schema({
    name: {type: String, required: true},
    created: {type: Date, required: true, unique: true},
    category: [categSchema],
    quantity: {type: Number, required: true}
});

var itemData = mongoose.model("itemData", itemSchema);
module.exports = itemData;