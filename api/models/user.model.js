const { DataTypes } = require('sequelize')
const { conn } = require('../../db/index.db')


const User = conn.define(
  'user',
  {
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    img_url: {
      type: DataTypes.STRING,
      defaultValue: 'https://www.gravatar.com/robohash/205e460b439e2e57482ec07740c08d40?f=y&s=400'
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      defaultValue: 'user'
    },
  }
)

module.exports = User