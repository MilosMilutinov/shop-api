const categoryService = require("../service/categoryService.js");

/**
 * Showing all categories in database
 * @param {Object} req
 * @param {Object} res
 */
const getAll = async (req, res) => {
  try {
    const category = await categoryService.findAllCategories();

    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Showing only a category by its name
 * @param {Object} req
 * @param {Object} res
 */
const getCategoryByName = async (req, res) => {
  const name = req.params.name;

  try {
    const category = await categoryService.findCategoryByName(name);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Creating new category
 * @param {Object} req
 * @param {Object} res
 */
const createCategory = async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;

  try {
    const newCategory = await categoryService.createNewCategory(
      name,
      description
    );

    res.status(201).json(newCategory);
    await newCategory.save();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Exported for routing
module.exports = {
  getAll,
  getCategoryByName,
  createCategory,
};
