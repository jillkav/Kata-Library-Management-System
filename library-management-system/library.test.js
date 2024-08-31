// library.test.js

const Library = require('./library');

describe('Library Management System', () => {
  let library;

  beforeEach(() => {
    library = new Library();
  });

  test('should add a new book to the library', () => {
    const book = { isbn: '1234567890', title: 'Clean Code', author: 'Robert C. Martin', year: 2008 };
    library.addBook(book);
    expect(library.books).toContainEqual(book);
  });

  test('should not allow adding a book with an existing ISBN', () => {
    const book1 = { isbn: '1234567890', title: 'Clean Code', author: 'Robert C. Martin', year: 2008 };
    const book2 = { isbn: '1234567890', title: 'Refactoring', author: 'Martin Fowler', year: 1999 };
    library.addBook(book1);
    expect(() => library.addBook(book2)).toThrow('Book with this ISBN already exists.');
  });

  test('should allow a user to borrow a book if available', () => {
    const book = { isbn: '1234567890', title: 'Clean Code', author: 'Robert C. Martin', year: 2008 };
    library.addBook(book);
    library.borrowBook('1234567890');
    expect(library.books[0].borrowed).toBe(true);
  });
  
  test('should not allow a user to borrow a book if it is already borrowed', () => {
    const book = { isbn: '1234567890', title: 'Clean Code', author: 'Robert C. Martin', year: 2008 };
    library.addBook(book);
    library.borrowBook('1234567890');
    expect(() => library.borrowBook('1234567890')).toThrow('Book is already borrowed.');
  });
  
  test('should allow a user to return a borrowed book', () => {
    const book = { isbn: '1234567890', title: 'Clean Code', author: 'Robert C. Martin', year: 2008 };
    library.addBook(book);
    library.borrowBook('1234567890');
    library.returnBook('1234567890');
    expect(library.books[0].borrowed).toBe(false);
  });
  
  test('should not allow returning a book that was not borrowed', () => {
    const book = { isbn: '1234567890', title: 'Clean Code', author: 'Robert C. Martin', year: 2008 };
    library.addBook(book);
    expect(() => library.returnBook('1234567890')).toThrow('Book is not borrowed.');
  });
  

});
