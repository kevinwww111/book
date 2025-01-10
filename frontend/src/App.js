import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import axios from 'axios';

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleCreateOrUpdate = (book) => {
    if (selectedBook) {
      // Update existing book
      axios.put(`http://localhost:5000/api/books/${selectedBook._id}`, book)
        .then(response => {
          setSelectedBook(null);
          alert('Book updated!');
        })
        .catch(error => console.error(error));
    } else {
      // Create new book
      axios.post('http://localhost:5000/api/books', book)
        .then(response => alert('Book added!'))
        .catch(error => console.error(error));
    }
  };

  return (
    <div>
      <h1>Book Management System</h1>
      <BookForm onSubmit={handleCreateOrUpdate} bookData={selectedBook} />
      <BookList />
    </div>
  );
};

export default App;
