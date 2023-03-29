
const Category = require('../api/models/category.model')
const PrivateInfo = require('../api/models/private_info.model')
const Media = require("../api/models/media.model");
const Platform = require('../api/models/platform.model')
const User_Media = require('../api/models/user_media.model')
const User = require('../api/models/user.model')

function addRelationsToModels() {
  try {

    User.hasOne(PrivateInfo)
    PrivateInfo.belongsTo(User)

    User.belongsToMany(Media, { as: 'user_id', through: 'user_media' })
    Media.belongsToMany(User, { as: 'media_id', through: 'user_media' })

    Media.belongsToMany(Media, { as: 'platform_id', through: 'media_platform' })
    Platform.belongsToMany(Media, { as: 'media_id', through: 'media_platform' })

    Media.belongsToMany(Category, { through: 'media_category' })
    Category.belongsToMany(Media, { through: 'media_category' })

    console.log('Relations added to all models')
  } catch (error) {
    throw error
  }
}

module.exports = addRelationsToModels