const express = require("express");

const Item = require('../model/item.js');

const router = express.Router();


const getAll = async(req,res) => {
    try{
        const item = await Item.find();

        res.status(200).json(item);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

const getSpecItem = async(req,res) => {
    
    const name = req.params.name;

    try{
        const item = await Item.findOne({name: name});

        res.status(200).json(item);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

const createItem = async(req,res) => {
    const newItem = new Item({
        name: req.body.name,
        created: req.body.created,
        category: req.body.category,
        quantity: req.body.quantity,
    });

    try{
        await newItem.save();

        res.status(201).json(newItem);
    }catch(error){
        res.status(404).json({message: error.message});
    }
};

const updateItem = async(req,res) => {
    const name = req.params.name;

    try{
        await Item.findOneAndUpdate(
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
        res.status(202).json({name: name});

    }catch (error){
        res.status(401).json({message: error.message});
    }
}

const deleteItem = async(req,res) => {
    const name = req.params.name;

    try{
        await Item.findOneAndRemove(
            {
            name: name,
            }
        );
        res.status(203).json({name: name});

    }catch (error){
        res.status(402).json({message: error.message});
    }
}

module.exports.getAll = getAll;
module.exports.getSpecItem = getSpecItem;
module.exports.createItem = createItem;
module.exports.updateItem = updateItem;
module.exports.deleteItem = deleteItem;