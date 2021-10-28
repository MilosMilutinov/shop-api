const { ItemData } = require('../model/item.js');
const categoryService = require('../service/categoryService.js');


// List all items from database
const findAllItems = async () => {
    try {
        const item = await ItemData.find();

        return item;
    } catch (error) {
        console.log(error);
        return;
    }
}

// Finding an item by name
const findItemByName = async (name) => {

    try {
        const item = await ItemData.findOne({ name: name });

        return item;
    } catch (error) {
        console.log(error);
        return;
    }

}



module.exports.findItemByName = findItemByName;
module.exports.findAllItems = findAllItems;
