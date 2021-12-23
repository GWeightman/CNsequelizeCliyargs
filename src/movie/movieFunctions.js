const Movie = require("./movieTable")

exports.addMovie = async (movieObj) => {
    try {
        await Movie.sync()
        await Movie.create(movieObj)
        console.log(`Successfully added ${movieObj.title}`)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.sync()
        await Movie.destroy({
            where: movieObj
        })
        console.log(`Successfully deleted ${movieObj.title}`)
    } catch (error) {
        console.log(error)
    }
}