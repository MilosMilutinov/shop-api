
const { ListData } = require('../model/list.js');

/**
 * Finding a list by name
 * @param {String} name 
 * @returns List object
 */
const findListByName = async (name) => {
    try {
        return await ListData.findOne({ name: name });
    } catch (error) {
        console.log(error);
    }
}

module.exports.findListByName = findListByName;
