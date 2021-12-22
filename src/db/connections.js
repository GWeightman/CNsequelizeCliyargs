require("dotenv").config()
const { Sequelize } = require("sequelize")

const sequel = new Sequelize(process.env.MYSQL_URI)

try{
    sequel.authenticate()
} catch (error) {
    console.log(error)
}

module.exports = sequel