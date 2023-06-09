const Category = require("../api/models/category.model");
const PrivateInfo = require("../api/models/private_info.model");
const Media = require("../api/models/media.model");
const Platform = require("../api/models/platform.model");
const UserMedia = require("../api/models/user_media.model");
const User = require("../api/models/user.model");

function addRelationsToModels() {
  try {
    User.hasOne(PrivateInfo);
    PrivateInfo.belongsTo(User);

    User.belongsToMany(Media, { through: UserMedia });
    Media.belongsToMany(User, { through: UserMedia });

    Media.belongsToMany(Category, { through: "media_category" });
    Category.belongsToMany(Media, { through: "media_category" });

    Media.belongsToMany(Platform, { through: "media_platform" });
    Platform.belongsToMany(Media, { through: "media_platform" });

    User.belongsToMany(Category, { through: "user_category" });
    Category.belongsToMany(User, { through: "user_category" });

    console.log("Relations added to all models");
  } catch (error) {
    throw error;
  }
}

module.exports = addRelationsToModels;