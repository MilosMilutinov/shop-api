
const express = require("express");

const Category = require('../model/category.js');

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

module.exports.findCategoryByName = findCategoryByName;
