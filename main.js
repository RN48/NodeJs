let books = [
    [1, 'Start with why', 'Simon Sinek', 80.0, 13],
    [2, 'But how do it know', 'J. Clark Scott', 59.9, 22],
    [3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5],
    [4, 'Zero to One', 'Peter Thiel', 45.0, 12],
    [5, 'You don\'t know JS', 'Kyle Simpson', 39.9, 9]
  ];
  
  // Function to add a new book to the inventory
  function addBook(bookId, title, author, price, quantity) {
    books.push([bookId, title, author, price, quantity]);
    console.log('Book added successfully!');
  }
  
  // Function to edit book information
  function editBook(bookId, title, author, price, quantity) {
    for (let i = 0; i < books.length; i++) {
      if (books[i][0] === bookId) {
        books[i] = [bookId, title, author, price, quantity];
        console.log('Book edited successfully!');
        return;
      }
    }
    console.log('Book not found');
  }
  
  // Function to delete a book from the inventory
  function deleteBook(bookId) {
    for (let i = 0; i < books.length; i++) {
      if (books[i][0] === bookId) {
        books.splice(i, 1);
        console.log('Book deleted successfully!');
        return;
      }
    }
    console.log('Book not found');
  }
  
  // Function to view all books
  function viewBooks() {
    console.log('Books in inventory:');
    for (let i = 0; i < books.length; i++) {
      console.log(`Book Id: ${books[i][0]}, Title: ${books[i][1]}, Author: ${books[i][2]}, Price: $${books[i][3]}, Quantity: ${books[i][4]}`);
    }
  }
  
  // Function to inquire about a book
  function inquireBook(searchKey, searchTerm) {
    for (let i = 0; i < books.length; i++) {
      if (books[i][searchKey] === searchTerm) {
        console.log('Book found:');
        console.log(`Book Id: ${books[i][0]}, Title: ${books[i][1]}, Author: ${books[i][2]}, Price: $${books[i][3]}, Quantity: ${books[i][4]}`);
        return;
      }
    }
    console.log('Book not found');
  }
  
  // Function to sell books and generate an invoice
  function sellBooks(bookName, quantityRequired, availableBalance) {
    for (let i = 0; i < books.length; i++) {
      if (books[i][1] === bookName) {
        if (books[i][4] >= quantityRequired && availableBalance >= books[i][3] * quantityRequired) {
          books[i][4] -= quantityRequired;
          console.log('Invoice:');
          console.log(`Book Name: ${bookName}`);
          console.log(`Quantity: ${quantityRequired}`);
          console.log(`Total Price: $${books[i][3] * quantityRequired}`);
          console.log('Sale successful!');
          return;
        } else {
          console.log('Insufficient quantity or balance');
          return;
        }
      }
    }
    console.log('Book not found');
  }
  
  // Example usage
  addBook(6, 'Book6', 'Author6', 30, 20);
  editBook(2, 'Book2', 'NewAuthor', 18, 25);
  deleteBook(3);
  viewBooks();
  inquireBook(1, 4);
  sellBooks('Start with why', 80.0, 13);