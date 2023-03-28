
const Category = require('../api/models/category.model')
const Private_Info = require('../api/models/private_info.model')
const Media = require("../api/models/media.model");
const Platform = require('../api/models/platform.model')
const User_Media = require('../api/models/user_media.model')
const User = require('../api/models/user.model')

function addRelationsToModels() {
  try {

    User.hasOne(Private_Info)
    Private_Info.belongsTo(User)

    User.belongsToMany(Media, { as: 'user_id', through: 'User_Media' })
    Media.belongsToMany(User, { as: 'media_id', through: 'User_Media' })

    Media.belongsToMany(Media, { through: 'Media_Platform' })
    Platform.belongsToMany(Media, { through: 'Media_Platform' })

    Media.belongsToMany(Category, { through: 'Media_Category' })
    Category.belongsToMany(Media, { through: 'Media_Category' })



    console.log('Relations added to all models')
  } catch (error) {
    throw error
  }
}

module.exports = addRelationsToModels;
