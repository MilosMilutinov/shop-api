const { ItemData } = require("../model/item.js");

const categoryService = require('./categoryService.js');


// List all items from database
const findAllItems = async () => {
  try {
    return await ItemData.find();
  } catch (error) {
    console.log(error);
  }
};

// Finding an item by name
const findItemByName = async (name) => {
  try {
    return await ItemData.findOne({ name: name });
  } catch (error) {
    console.log(error);
  }
};

// Update Item
const updateItem = async (name, categoryName, quantity) => {
  try {
    const category = await categoryService.findCategoryByName(categoryName);
    console.log(category);
    return await ItemData.findOneAndUpdate(
      {
        name: name,
      },
      {
        category: category,
        quantity: +quantity,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports.findItemByName = findItemByName;
module.exports.findAllItems = findAllItems;
module.exports.updateItem = updateItem;
