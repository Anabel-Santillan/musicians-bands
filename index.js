
// const { Sequelize } = require('sequelize/types');
const {Band} = require('./Band');
const { sequelize, DataTypes, Model } = require('./db');
const {Musician} = require('./Musician')
const {Song} = require("./Song")

Musician.belongsTo(Band);
Band.hasMany(Musician);
Band.belongsToMany(Song, {through: 'title'});
Song.belongsToMany(Band, {through: 'title'});



//In the ./index.js file, before the module.exports, associate the two models. 
//Multiple musicians can be added to a Band.

module.exports = {
    Band,
    Musician
};
