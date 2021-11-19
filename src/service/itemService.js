const Item = require("../model/item.js");

const Category = require("./categoryService.js");

// List all items from database
/**
 *
 * @returns
 */
const findAllItems = async () => {
  try {
    return await Item.find().populate("category");
  } catch (error) {
    console.log(error);
  }
};

// Finding an item by name
/**
 *
 * @param {*} name
 * @returns
 */
const findItemByName = async (name) => {
  try {
    const item = await Item.findOne({ name: name }).populate("category");
    return item;
  } catch (error) {
    console.log(error);
  }
};

// Update Item
/**
 *
 * @param {*} name
 * @param {*} categoryName
 * @param {*} quantity
 * @returns
 */
const updateItem = async (name, categoryName, quantity) => {
  try {
    const category = await Category
      .findCategoryByName(categoryName);
    console.log(category);
    return await Item.findOneAndUpdate(
      {
        name: name,
      },
      {
        category: category._id,
        quantity: quantity,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param {*} name
 * @param {*} category
 * @param {*} quantity
 * @returns
 */
const saveItem = async (name, categoryName, quantity) => {
  try {
    const category = await Category.findCategoryByName(categoryName);
    console.log("Category id: ", category._id);
    const item = new Item({
      name: name,
      created: new Date(),
      category: category._id,
      quantity: quantity,
    });

    const newItem = await item.save();
    console.log("New Item: ", newItem);
    return newItem;
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = {
  findItemByName,
  findAllItems,
  updateItem,
  saveItem,
};
