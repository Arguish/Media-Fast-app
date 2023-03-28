const { DataTypes } = require("sequelize");
const { conn } = require("../../db/index.db");

const Media = conn.define("media", {
  title: {
    type: DataTypes.STRING,
    validate: {},
  },
  desciption: {
    type: DataTypes.STRING,
    validate: {},
  },
  type: {
    type: DataTypes.ENUM("movie", "show"),
    allowNull: false,
    validate: {},
  },
  season: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {},
  },
  season_episodes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {},
  },
});

module.exports = Media;
