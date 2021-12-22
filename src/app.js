const yargs = require("yargs")
const { addMovie } = require("./movie/movieFunctions")

const app = async (args) => {
    try {
        if (args.addmovie) { /*--addmovie --title "title" --actor "actor"*/
            const movieObj = {title: args.title, actor: args.actor}
            await addMovie(movieObj)
        }
    } catch (error) {
        console.log(error)
    }
}

app (yargs.argv)