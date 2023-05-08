const { DataTypes } = require("sequelize");
const { conn } = require("../../db/index.db");

const Media = conn.define("media", {
  originalId: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  title: {
    type: DataTypes.STRING,
    validate: {},
  },
  description: {
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
  image: {
    type: DataTypes.TEXT,
    defaultValue: ""
  }
});

module.exports = Media;
