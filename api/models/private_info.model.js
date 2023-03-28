const { DataTypes } = require('sequelize')
const {conn} = require('../../db/index.db')


const Private_Info = conn.define(
    'private_info', 
    {
        email : {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        date_of_birth : {
            type:DataTypes.DATE, 
            allowNull: false
        }, 
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

module.exports = Private_Info