
const express = require("express");

const { ItemData } = require('../model/item.js');

// Finding an item by name
const findItemByName = async (name) => {

    try {
        const item = await ItemData.findOne({ name: name });

        return item;
    } catch (error) {
        console.log(error);
        return;
    }

}

module.exports.findItemByName = findItemByName;
