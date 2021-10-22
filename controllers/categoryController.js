const express = require("express");

const Category = require('../model/category.js');

const router = express.Router();

const categoryService = require('../service/categoryService.js');


// When called, shows all categories in database
const getAll = async (req, res) => {
    try {
        const category = await Category.categoryData.find();

        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// When called, shows only a category chosen by name
const getCategoryByName = async (req, res) => {

    const name = req.params.name;

    try {
        const category = await categoryService.findCategoryByName(name);

        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Function that creates new category
const createCategory = async (req, res) => {

    const newCategory = new Category.categoryData({
        name: req.body.name,
        description: req.body.description,
    });

    try {
        await newCategory.save();

        res.status(201).json(newCategory);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



// Exported for category router
module.exports.getAll = getAll;
module.exports.getCategoryByName = getCategoryByName;
module.exports.createCategory = createCategory;