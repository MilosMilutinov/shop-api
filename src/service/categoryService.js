const Category = require("../model/category.js");

// Listing all categories
const findAllCategories = async () => {
  try {
    return await Category.find();
  } catch (error) {
    console.log(error);
  }
};

// Finding a category by name
const findCategoryByName = async (name) => {
  try {
    const category = await Category.findOne({ name: name });
    console.log("category: ", category);
    return category;
  } catch (error) {
    console.log(error);
  }
};

// Finding a category by id
const findCategoryById = async (id) => {
  try {
    const category = await Category.findOne({ _id: id });
    return category.name;
  } catch (error) {
    console.log(error);
  }
};

// Creating new category
const createNewCategory = async (name, description) => {
  try {
    const category = new Category({
      name: name,
      description: description,
    });
    return category.save();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  findCategoryById,
  findCategoryByName,
  createNewCategory,
  findAllCategories,
};
