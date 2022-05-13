const { sequelize, DataTypes, Model } = require('./db');

class Song extends Model{};
Song.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER
},{
    sequelize
});

module.exports = {
    Song
}