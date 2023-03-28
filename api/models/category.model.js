const { DataTypes } = require('sequelize')
const {conn} = require('../../db/index.db')

const Category = conn.define(
    'category', 
    {
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,  
        }
    }
)

module.exports = Category