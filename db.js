const path = require('path');
const { Sequelize, Model, DataTypes } = require('sequelize');

// TODO - create the new sequelize connection
const sequelize = new Sequelize('database', 'username', 'password',{
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: false
});
module.exports = {
    sequelize,
    DataTypes,
    Model
};
