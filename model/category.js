const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    city: {type: String, required: true},
});

var categoryData = mongoose.model("categoryData", categorySchema);
module.exports = categoryData;