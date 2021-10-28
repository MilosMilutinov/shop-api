const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
});

const categoryData = mongoose.model("categoryData", categorySchema);
module.exports.categoryData = categoryData;
module.exports.categorySchema = categorySchema;