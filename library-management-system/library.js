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

    borrowBook(isbn) {
      const book = this.books.find(b => b.isbn === isbn);
      if (!book) {
        throw new Error('Book not found.');
      }
      if (book.borrowed) {
        throw new Error('Book is already borrowed.');
      }
      book.borrowed = true;
    }
  }
  
  module.exports = Library;
  