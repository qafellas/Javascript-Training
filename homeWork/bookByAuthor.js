const books = [
    {title: "The Great Gatsby", author: "F. Scott Fritzgerald"},
    {title: "To Kill a Mockingbird", author: "Harper Lee"},
    {title: "1984", author: "George Orwell"},
    {title: "Pride and Prejudice", author: "Jane Austen"},
    {title: "The Catcher in the Rye", author: "J.D Salinger"},
    {title: "The Hobbit", author: "J.R.R Tolkien"},
]
//efhgrfh

let findBookByAuthor = function(bookList, bookAuthor){
    for (const book of bookList) {
        if(book.author ===  bookAuthor){
            return book.title
        }
    }
}

let findBookByAuthor2 = function(bookList, bookAuthor){
    let specificBook = bookList.find(book => book.author === bookAuthor)
    return specificBook.title
}

let findBookByAuthor3 = function(bookList, bookAuthor){
    for(let i = 0; i<bookList.length; i++){
        if(bookList[i].author === bookAuthor){
            return bookList[i].title
        }
    }
}

console.log(findBookByAuthor3(books, "J.R.R Tolkien"))
//console.log(findBookByAuthor2(books, "George Orwell"))
// console.log(findBookByAuthor(books, "George Orwell"))
// console.log(findBookByAuthor(books, "Harper Lee"))
// console.log(findBookByAuthor(books, "Orhan Demirci"))

