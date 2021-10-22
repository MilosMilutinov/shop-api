const express = require("express");

const { ListData } = require('../model/list.js');

const itemService = require('../service/itemService.js');
const shopService = require('../service/shopService');
const listService = require('../service/listService');

const router = express.Router();

// When called, shows all lists in database
const getAll = async (req, res) => {
    try {
        const list = await ListData.find();

        res.status(200).json(list);
    } catch (error) {
        res.status(404).json({ message: error.message + "ovde" });
    }
}

// When called, shows only one list
const getListByName = async (req, res) => {

    const name = req.params.name;

    try {
        const list = await listService.findListByName(name);

        res.status(200).json(list);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Creating new list
const createList = async (req, res) => {

    const item = await itemService.findItemByName(req.body.item);
    const shop = await shopService.findShopByName(req.body.name);
    console.log(item);
    console.log(shop);
    const newList = new ListData({
        name: req.body.name,
        created: new Date(),
        updated: new Date(),
        items: item,
        shop: shop
    });

    try {
        await newList.save();

        res.status(201).json(newList);
    } catch (error) {
        res.status(404).json({ message: error.message + " dadaadadadda" });
    }
};

//Updating list
const updateList = async (req, res) => {
    const name = req.params.name;
    const item = await itemService.findItemByName(req.body.item);
    const shop = await shopService.findShopByName(req.body.name);


    try {
        await ListData.findOneAndUpdate(
            {
                name: name,
            },
            {
                updated: new Date(),
                items: [item],
                shop: shop
            }
        );
        res.status(202).json({ name: name });

    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

// Deleting list
const deleteList = async (req, res) => {
    const name = req.params.name;

    try {
        await ListData.findOneAndRemove(
            {
                name: name,
            }
        );
        res.status(203).json({ name: name });

    } catch (error) {
        res.status(402).json({ message: error.message });
    }
}

// Exporting for list router
module.exports.getAll = getAll;
module.exports.getListByName = getListByName;
module.exports.createList = createList;
module.exports.updateList = updateList;
module.exports.deleteList = deleteList;