const Platform = require('../api/models/platform.model')


function addRelationsToModels() {
  try {

    // User.hasOne(Address)
    // Address.belongsTo(User)

    // Country.hasMany(User)
    // User.belongsTo(Country)


    // Actor.belongsToMany(Movie,
    // 	{ through: 'Actor_Movies' })
    // Movie.belongsToMany(Actor,
    // 	{ through: 'Actor_Movies' })



    console.log('Relations added to all models')
  } catch (error) {
    throw error
  }
}

module.exports = addRelationsToModels
