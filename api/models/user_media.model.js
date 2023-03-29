const { DataTypes } = require('sequelize')
const { conn } = require('../../db/index.db')

const User_Media = conn.define(
    'user_media',
    {
        status: {
            type: DataTypes.ENUM('finished', 'rejected', 'pending', 'notOffered'),
            defaultValue: 'notOffered'
        },
        rejected_counter: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        last_seen: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        episode_counter: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
    }
)

module.exports = User_Media