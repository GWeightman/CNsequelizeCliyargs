const Book = require("./bookTable")

exports.addBook = async (bookObj) => {
    try {
        await Book.sync()
        await Book.create(bookObj)
        console.log(`Successfully added ${bookObj.title}`)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteBook = async (bookObj) => {
    try {
        await Book.sync()
        await Book.destroy({
            where: bookObj
        })
        console.log(`Successfully deleted ${bookObj.title}`)
    } catch (error) {
        console.log(error)
    }
}

exports.editBook = async (bookObj) => {
    try {
        await Book.sync()
        await Book.update({title: bookObj.new }, {
            where: {title: bookObj.title}
        })
        console.log(`Successfully updated ${bookObj.title} to ${bookObj.new}`)
    } catch (error) {
        console.log(error)
    }
}

exports.editAuthor = async (bookObj) => {
    try {
        await Book.sync()
        await Book.update({author: bookObj.new }, {
            where: {author: bookObj.author}
        })
        console.log(`Successfully updated ${bookObj.author} to ${bookObj.new}`)
    } catch (error) {
        console.log(error)
    }
}

exports.wholebookTable = async () => {
    try {
        // await Movie.sync()
        const bookList = await Book.findAll()
        console.log(bookList.every(bookList => bookList instanceof Book))
        console.log("Book List", JSON.stringify(bookList, null, 2))
    } catch (error) {
        console.log(error)
    }
}