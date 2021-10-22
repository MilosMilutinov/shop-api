const mongoose = require('mongoose');

const { itemSchema } = require('./item.js');
const { shopSchema } = require('./shop.js');

const listSchema = mongoose.Schema({
    name: { type: String, required: true },
    created: { type: Date, required: true, unique: true },
    updated: { type: Date },
    items: [itemSchema],
    shop: [shopSchema]
});

module.exports.ListData = mongoose.model("listData", listSchema);
module.exports.listSchema = listSchema;