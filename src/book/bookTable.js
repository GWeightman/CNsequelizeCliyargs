const { DataTypes } = require("sequelize")
const sequel = require("../db/connections")

const Book = sequel.define("Book", {
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    author:{
        type: DataTypes.STRING,
    }
})

module.exports = Book