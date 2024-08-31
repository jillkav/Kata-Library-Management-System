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
});
