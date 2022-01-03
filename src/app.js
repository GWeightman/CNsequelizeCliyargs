const yargs = require("yargs")
const { addMovie, deleteMovie, editTitle, editActor, wholeTable } = require("./movie/movieFunctions")
const { addBook, deleteBook, editBook, editAuthor, wholebookTable } = require("./book/bookFunctions")

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
        else if (args.movielist) {
            await wholeTable()
        }
        else if (args.addbook) { /*--addbook --title "title" --author "author"*/
            const bookObj = {title: args.title, author: args.author}
            await addBook(bookObj)
        }
        else if (args.deletebook) { /*--deletebook --title "title"*/
            const bookObj = {title: args.title}
            await deleteBook(bookObj)
        }
        else if (args.editbook) { /*--editbook --title "title" --new "newtitle"*/
            const bookObj = {title: args.title, new: args.new}
            await editBook(bookObj)
        }
        else if (args.editauthor) { /*--editauthor --author "author" --new "newauthor"*/
            const bookObj = {author: args.author, new: args.new}
            await editAuthor(bookObj)
        }
        else if (args.booklist) {
            await wholebookTable()
        }
    } catch (error) {
        console.log(error)
    }
}

app (yargs.argv)