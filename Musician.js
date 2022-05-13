const {DataTypes, sequelize, Model} = require('./db');

class Musician extends Model{
}
// TODO - define the Musician model
Musician.init({
	name: DataTypes.STRING, 
	instrument: DataTypes.STRING
}, {
	sequelize, 
})

module.exports = {
    Musician

};