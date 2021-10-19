const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
});

var shopData = mongoose.model("shopData", shopSchema);
module.exports = shopData;