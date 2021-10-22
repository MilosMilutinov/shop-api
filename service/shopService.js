
const express = require("express");

const { ShopData } = require('../model/shop.js');

// Finding a shop by name
const findShopByName = async (name) => {

    try {
        const shop = await ShopData.findOne({ name: name });

        return shop;
    } catch (error) {
        console.log(error);
        return;
    }

}

module.exports.findShopByName = findShopByName;
