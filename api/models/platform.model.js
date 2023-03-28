const { DataTypes } = require('sequelize')
const { conn } = require('../../db/index.db')

const Platform = conn.define(
  'platform',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    platform_url: {
      type: DataTypes.STRING,
      allowNull: false,
      isWeb(value) {
        let regex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/)
        if (!regex.test(value)) {
          console.error('Website not valid!')
        }
      }
    }
  }
)

module.exports = Platform