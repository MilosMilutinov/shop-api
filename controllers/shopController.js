const express = require("express");

const Shop = require('../model/shop.js');

const router = express.Router();

const getAll = async(req,res) => {
    try{
        const shop = await Shop.find();

        res.status(200).json(shop);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

const getSpecShop = async(req,res) => {
    
    const name = req.params.name;

    try{
        const shop = await Shop.findOne({name: name});

        res.status(200).json(shop);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

const createShop = async(req,res) => {
    
    const newShop = new Shop({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
    });

    try{
        await newShop.save();

        res.status(201).json(newShop);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

module.exports.getAll = getAll;
module.exports.getSpecShop = getSpecShop;
module.exports.createShop = createShop;