const express = require("express");

const Category = require('../model/category.js');

const router = express.Router();

const getAll = async(req,res) => {
    try{
        const category = await Category.find();

        res.status(200).json(category);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

const getSpecCategory = async(req,res) => {
    
    const name = req.params.name;

    try{
        const category = await Category.findOne({name: name});

        res.status(200).json(category);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

const createCategory = async(req,res) => {
    
    const newCategory = new Category({
        name: req.body.name,
        description: req.body.description,
    });

    try{
        await newCategory.save();

        res.status(201).json(newCategory);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

module.exports.getAll = getAll;
module.exports.getSpecCategory = getSpecCategory;
module.exports.createCategory = createCategory;