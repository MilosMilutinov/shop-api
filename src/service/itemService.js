const { ItemData } = require('../model/item.js');


// List all items from database
const findAllItems = async () => {
    try {
        return await ItemData.find();
    } catch (error) {
        console.log(error);
    }
}

// Finding an item by name
const findItemByName = async (name) => {
    try {
        return await ItemData.findOne({ name: name });
    } catch (error) {
        console.log(error);
    }
}

module.exports.findItemByName = findItemByName;
module.exports.findAllItems = findAllItems;
