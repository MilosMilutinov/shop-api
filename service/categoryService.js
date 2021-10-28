
const Category = require('../model/category.js');

// Listing all categories
const findAllCategories = async () => {
    try {
        const category = await Category.categoryData.find();

        return category;
    } catch (error) {
        console.log(error);
        return;
    }
}

// Finding a category by name
const findCategoryByName = async (name) => {

    try {
        const category = await Category.categoryData.findOne({ name: name });

        return category;
    } catch (error) {
        console.log(error);
        return;
    }

}

// Creating new category
const createNewCategory = async (name, description) => {
    
    try {
        const newCategory = new Category.categoryData({
            name: name,
            description: description
        });


        return newCategory;
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports.findCategoryByName = findCategoryByName;

module.exports.createNewCategory = createNewCategory;

module.exports.findAllCategories = findAllCategories;
