const express = require("express");

const { ItemData } = require('../model/item.js');

const categoryService = require('../service/categoryService.js');
const itemService = require('../service/itemService.js');

const router = express.Router();

// When called, shows all items in database
const getAll = async (req, res) => {
    try {
        const item = await ItemData.find();

        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


// When called, shows only one item
const getItemByName = async (req, res) => {

    const name = req.params.name;

    try {
        const item = await itemService.findItemByName(name);

        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


// Creating new item
const createItem = async (req, res) => {

    const category = await categoryService.findCategoryByName(req.body.category);
    const newItem = new ItemData({
        name: req.body.name,
        created: new Date(),
        category: [category],
        quantity: req.body.quantity,
    });

    try {
        await newItem.save();

        res.status(201).json(newItem);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


// Updating an item
const updateItem = async (req, res) => {
    const name = req.params.name;

    try {
        await ItemData.findOneAndUpdate(
            {
                name: name,
            },
            {
                name: req.body.name,
                created: req.body.created,
                category: req.body.category,
                quantity: req.body.quantity,
            }
        );
        res.status(202).json({ name: name });

    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}


// Deleting an item
const deleteItem = async (req, res) => {
    const name = req.params.name;
    console.log(name);

    try {
        await ItemData.findOneAndRemove(name);
        res.status(203).json({ name: name });

    } catch (error) {
        res.status(402).json({ message: error.message });
    }
}


// Exporting for item router
module.exports.getAll = getAll;
module.exports.getItemByName = getItemByName;
module.exports.createItem = createItem;
module.exports.updateItem = updateItem;
module.exports.deleteItem = deleteItem;