const { DataTypes } = require("sequelize")
const sequel = require("../db/connections")

const Movie = sequel.define("Movie", {
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    actor:{
        type: DataTypes.STRING,
    }
})

module.exports = Movie