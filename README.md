Kata: Library Management System

-> Objective

Create a simple library management system that allows users to perform basic operations such as adding books, borrowing books, returning books, and viewing available books.

-> Requirements:

1)Add Books:

• Users should be able to add new books to the library.

• Each book should have a unique identifier (e.g., ISBN), title, author, and publication year.

2)Borrow Books:

• Users should be able to borrow a book from the library.

• The system should ensure that the book is available before allowing it to be borrowed.

• If the book is not available, the system should raise an appropriate error.

3)Return Books:

• Users should be able to return a borrowed book.

• The system should update the availability of the book accordingly.

4)View Available Books:

• Users should be able to view a list of all available books in the library.

-> Structure of Project:

    |-- src/

    |    |-- library.js          # Main application logic

    |-- test/

    |    |-- library.test.js     # Test cases

    |-- package.json             # Project metadata and dependencies

    |-- README.md                # Project documentation
    
->Git Workflow:

1)Initialize Git Repository:

    git init
    
2)Create Initial Commit:

    echo "# Library Management System" > README.md

    git add README.md

    git commit -m "Initial commit with README"
    
3)Write Tests for Adding Books:

    git add .
  
    git commit -m "Add test for adding books"
    
4)Repeat Steps 3 for Borrowing Books, Returning Books, and Viewing Available Books

5)Push to Remote Repository:

    git remote add origin <remote-repository-url>

    git push -u origin main
