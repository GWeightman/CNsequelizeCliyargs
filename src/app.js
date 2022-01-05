const yargs = require("yargs")
const { addMovie, deleteMovie, editTitle, editActor, wholeTable } = require("./movie/movieFunctions")
const { addBook, deleteBook, editBook, editAuthor, wholebookTable } = require("./book/bookFunctions")

const app = async (args) => {
    try {
        if (args.addentry) { /*--addentry --title "title" --actor "actor" --author "author"*/
            const movieObj = {title: args.title, actor: args.actor}
            const bookObj = {title: args.title, author: args.author}
            await addBook(bookObj)
            await addMovie(movieObj)
        }
        else if (args.deleteentry) { /*--deleteentry --title "title"*/
            const movieObj = {title: args.title}
            const bookObj = {title: args.title}
            await deleteMovie(movieObj)
            await deleteBook(bookObj)
        }
        else if (args.edittitle) { /*--edittitle --title "title" --new "newtitle"*/
            const movieObj = {title: args.title, new: args.new}
            const bookObj = {title: args.title, new: args.new}
            await editBook(bookObj)
            await editTitle(movieObj)
        }
        else if (args.editactor) { /*--editactor --actor "actor" --new "newactor"*/
            const movieObj = {actor: args.actor, new: args.new}
            await editActor(movieObj)
        }
        else if (args.editauthor) { /*--editauthor --author "author" --new "newauthor"*/
            const bookObj = {author: args.author, new: args.new}
            await editAuthor(bookObj)
        }
        else if (args.movielist) {
            await wholeTable()
        }
        else if (args.booklist) {
            await wholebookTable()
        }
    } catch (error) {
        console.log(error)
    }
}

app (yargs.argv)