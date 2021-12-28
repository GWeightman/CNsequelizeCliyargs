const yargs = require("yargs")
const { addMovie, deleteMovie, editTitle, editActor } = require("./movie/movieFunctions")

const app = async (args) => {
    try {
        if (args.addmovie) { /*--addmovie --title "title" --actor "actor"*/
            const movieObj = {title: args.title, actor: args.actor}
            await addMovie(movieObj)
        }
        else if (args.deletemovie) { /*--deletemovie --title "title"*/
            const movieObj = {title: args.title}
            await deleteMovie(movieObj)
        }
        else if (args.edittitle) { /*--edittitle --title "title" --new "newtitle"*/
            const movieObj = {title: args.title, new: args.new}
            await editTitle(movieObj)
        }
        else if (args.editactor) { /*--editactor --actor "actor" --new "newactor"*/
            const movieObj = {actor: args.actor, new: args.new}
            await editActor(movieObj)
        }
    } catch (error) {
        console.log(error)
    }
}

app (yargs.argv)