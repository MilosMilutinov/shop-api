const express = require("express");

const { ShopData } = require('../model/shop.js');

const router = express.Router();

// When called, shows all shops in database
const getAll = async (req, res) => {
    try {
        const shop = await ShopData.find();

        res.status(200).json(shop);
    } catch (error) {
        res.status(404).json({ message: error.message + "ZAŠTO" });
    }
}

// When called, shows only one shop
const getSpecShop = async (req, res) => {

    const name = req.params.name;

    try {
        const shop = await ShopData.findOne({ name: name });

        res.status(200).json(shop);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Creating shop
const createShop = async (req, res) => {

    const newShop = new ShopData({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
    });

    try {
        await newShop.save();

        res.status(201).json(newShop);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Exporting for shop router
module.exports.getAll = getAll;
module.exports.getSpecShop = getSpecShop;
module.exports.createShop = createShop;