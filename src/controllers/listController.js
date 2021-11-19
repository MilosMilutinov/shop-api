const express = require("express");

const List = require("../model/list.js");

const itemService = require("../service/itemService.js");
const shopService = require("../service/shopService");
const listService = require("../service/listService");

const router = express.Router();

/**
 * Showing all lists in database
 * @param {Object} req
 * @param {Object} res
 */
const getAll = async (req, res) => {
  try {
    const list = await listService.getAll();
    res.status(200).json(list);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Showing only one list in database
 * @param {Object} req
 * @param {Object} res
 */
const getListByName = async (req, res) => {
  const name = req.params.name;

  try {
    const list = await listService.findListByName(name);

    res.status(200).json(list);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Create new list
 * @param {Object} req
 * @param {Object} res
 */
const createList = async (req, res) => {
  const name = req.body.name;
  const itemName = req.body.items;
  const shopName = req.body.shop;
  try {
    const list = await listService.create(name, itemName, shopName);
    res.status(201).json(list);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Update list
 * @param {Object} req
 * @param {Object} res
 */
const updateList = async (req, res) => {
  try {
    const name = req.params.name;
    const items = req.body.item;

    const updatedList = await listService.update(name, items);
    res.status(202).json(updatedList);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

/**
 * Delete list
 * @param {Object} req
 * @param {Object} res
 */
const deleteList = async (req, res) => {
  const name = req.params.name;
  console.log(name);

  try {
    await List.findOneAndDelete({ name: req.params.name });
    res.status(203).json(name);
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
};

const addItemToList = async (req, res) => {
  try {
    const updatedList = await listService.addItemToList(
      req.body.listName,
      req.body.itemName
    );

    console.log("updated list: ", updatedList);
    res.status(203).json(updatedList);
  } catch (error) {
    console.error("Error: ", error);
    res.status(402).json({ message: error.message });
  }
};

const removeItemFromList = async (req, res) => {
  console.log("calling removeItemFromList");
  try {
    const updatedList = await listService.removeItemFromList(
      req.body.listName,
      req.body.itemName
    );

    res.status(203).json(updatedList);
  } catch (error) {
    console.error("Error: ", error);
    res.status(402).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getListByName,
  createList,
  updateList,
  deleteList,
  addItemToList,
  removeItemFromList,
};
