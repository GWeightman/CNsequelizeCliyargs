const yargs = require("yargs")
const { addMovie, deleteMovie } = require("./movie/movieFunctions")

const app = async (args) => {
    try {
        if (args.addmovie) { /*--addmovie --title "title" --actor "actor"*/
            const movieObj = {title: args.title, actor: args.actor}
            await addMovie(movieObj)
        }
        else if (args.deletemovie) {
            const movieObj = {title: args.title}
            await deleteMovie(movieObj)
        }
    } catch (error) {
        console.log(error)
    }
}

app (yargs.argv)