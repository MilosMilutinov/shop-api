
const express = require("express");

const { ListData } = require('../model/list.js');

// Finding a list by name
const findListByName = async (name) => {

    try {
        const list = await ListData.findOne({ name: name });

        return list;
    } catch (error) {
        console.log(error);
        return;
    }

}

module.exports.findListByName = findListByName;
