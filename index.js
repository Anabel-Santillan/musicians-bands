
// const { Sequelize } = require('sequelize/types');
const {Band} = require('./Band');
const { sequelize, DataTypes, Model } = require('./db');
const {Musician} = require('./Musician')

Musician.belongsTo(Band);
Band.hasMany(Musician);


//In the ./index.js file, before the module.exports, associate the two models. 
//Multiple musicians can be added to a Band.

module.exports = {
    Band,
    Musician
};
