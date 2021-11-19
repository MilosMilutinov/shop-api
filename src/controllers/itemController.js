const Item = require("../model/item.js");

const itemService = require("../service/itemService.js");

/**
 * Showing all items in database
 * @param {Object} req
 * @param {Object} res
 */
const getAll = async (req, res) => {
  try {
    const item = await itemService.findAllItems();

    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Showing only one item by its name
 * @param {Object} req
 * @param {Object} res
 */
const getItemByName = async (req, res) => {
  const name = req.params.name;

  try {
    const item = await itemService.findItemByName(name);

    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Create new item
 * @param {Object} req
 * @param {Object} res
 */
const createItem = async (req, res) => {
  const itemName = req.body.name;
  const categoryName = req.body.category;
  const quantity = req.body.quantity;

  try {
    const newItem = itemService.saveItem(itemName, categoryName, quantity);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Update item
 * @param {Object} req
 * @param {Object} res
 */
const updateItem = async (req, res) => {
  const name = req.params.name;
  const categoryName = req.body.category;
  const quantity = req.body.quantity;
  console.log(req.body);

  try {
    const item = await itemService.updateItem(name, categoryName, quantity);
    res.status(202).json(item);
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
};

/**
 * Delete item
 * @param {Object} req
 * @param {Object} res
 */
const deleteItem = async (req, res) => {
  const name = req.params.name;
  console.log(name);

  try {
    await Item.findOneAndDelete( {name : req.params.name});
    res.status(203).json(name);
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
};

// Exporting for item router
module.exports = {
  getAll,
  getItemByName,
  createItem,
  updateItem,
  deleteItem,
};
