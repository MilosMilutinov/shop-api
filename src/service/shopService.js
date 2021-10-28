
const { ShopData } = require('../model/shop.js');

// Finding a shop by name
const findShopByName = async (name) => {
    try {
        return await ShopData.findOne({ name: name });
    } catch (error) {
        console.log(error);
    }
}

module.exports.findShopByName = findShopByName;
