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

exports.editTitle = async (movieObj) => {
    try {
        await Movie.sync()
        await Movie.update({title: movieObj.new }, {
            where: {title: movieObj.title}
        })
        console.log(`Successfully updated ${movieObj.title} to ${movieObj.new}`)
    } catch (error) {
        console.log(error)
    }
}

exports.editActor = async (movieObj) => {
    try {
        await Movie.sync()
        await Movie.update({actor: movieObj.new }, {
            where: {actor: movieObj.actor}
        })
        console.log(`Successfully updated ${movieObj.actor} to ${movieObj.new}`)
    } catch (error) {
        console.log(error)
    }
}

exports.wholeTable = async () => {
    try {
        // await Movie.sync()
        const movieList = await Movie.findAll()
        console.log(movieList.every(movieList => movieList instanceof Movie))
        console.log("Movie List", JSON.stringify(movieList, null, 2))
    } catch (error) {
        console.log(error)
    }
}