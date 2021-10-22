const mongoose = require('mongoose');
const categSchema = require("./category.js")

const itemSchema = mongoose.Schema({
    name: { type: String, required: true },
    created: { type: Date, required: true, unique: true },
    category: [categSchema.categorySchema],
    quantity: { type: Number, required: true }
});

module.exports.ItemData = mongoose.model("itemData", itemSchema);
module.exports.itemSchema = itemSchema;