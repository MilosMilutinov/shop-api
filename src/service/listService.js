const List = require("../model/list.js");
const itemService = require("./itemService");
const shopService = require("./shopService");

/**
 * Finding a list by name
 * @param {String} name
 * @returns List object
 */
const findListByName = async (name) => {
  try {
    const list = await List.findOne({ name: name }).populate("items");
    return list;
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  try {
    const list = await List.find().populate("items").populate("shop");
    return list;
  } catch (error) {
    console.error("Error: ", error);
  }
};

const create = async (name, itemNames, shopName) => {
  try {
    let items = [];
    for (let itemName of itemNames) {
      const item = await itemService.findItemByName(itemName);
      items.push(item._id);
    }

    const shop = await shopService.findShopByName(shopName);

    const newList = new List({
      name: name,
      created: new Date(),
      updated: new Date(),
      items: items,
      shop: shop,
    });

    const list = await newList.save();
    console.log("List: ", list);
    return list;
  } catch (error) {
    console.error("Error: ", error);
    return error;
  }
};

const update = async (name, items) => {
  console.log("calling update");
  try {
    const listToBePassed = await List.find({ name: name })
      .populate("items")
      .populate("shop");

    await List.findOneAndUpdate(
      {
        name: name,
      },
      {
        items: items,
      }
    );
  } catch (error) {
    console.error("Error: ", error);
  }
};

const addItemToList = async (listName, itemName) => {
  try {
    let list = await List.find({ name: listName })
      .populate("items")
      .populate("shop");
    list = list[0];
    const item = await itemService.findItemByName(itemName);
    list.items.push(item);
    const updatedList = await List.findOneAndUpdate(
      {
        name: list.name,
      },
      {
        items: list.items,
      }
    );
    return updatedList;
  } catch (error) {
    console.error("Error: ", error);
    return error;
  }
};

const removeItemFromList = async (listName, itemName) => {
  try {
    let list = await List.find({ name: listName }).populate("items");
    list = list[0];
    //ovo moram da izmenim
    for (let i = 0; i < list.items.length; i++) {
      if (list.items[i].name === itemName) {
        list.items.splice(i, 1);
        break;
      }
    }

    const updatedList = await List.findOneAndUpdate(
      {
        name: listName,
      },
      {
        items: list.items,
      }
    );

    return updatedList;
  } catch (error) {
    console.error("Error: ", error);
  }
};

module.exports = {
  findListByName,
  getAll,
  create,
  update,
  addItemToList,
  removeItemFromList
};
