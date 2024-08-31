// library.js

class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      if (this.books.some(b => b.isbn === book.isbn)) {
        throw new Error('Book with this ISBN already exists.');
      }
      this.books.push(book);
    }
  }
  
  module.exports = Library;
  