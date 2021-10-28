
const Category = require('../model/category.js');

// Listing all categories
const findAllCategories = async () => {
    try {
        return await Category.categoryData.find();
    } catch (error) {
        console.log(error);
    }
}

// Finding a category by name
const findCategoryByName = async (name) => {
    try {
        return await Category.categoryData.findOne({ name: name });
    } catch (error) {
        console.log(error);
    }
}

// Creating new category
const createNewCategory = async (name, description) => {
    try {
       return new Category.categoryData({
            name: name,
            description: description
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports.findCategoryByName = findCategoryByName;
module.exports.createNewCategory = createNewCategory;
module.exports.findAllCategories = findAllCategories;
