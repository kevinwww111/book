import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedBook, setUpdatedBook] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the books:", error);
      });
  }, []);

  const deleteBook = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      axios.delete(`http://localhost:5000/api/books/${id}`)
        .then(response => {
          setBooks(books.filter(book => book._id !== id));
          alert(response.data.message);
        })
        .catch(error => {
          console.error("There was an error deleting the book:", error);
          alert('Error deleting book');
        });
    }
  };

  const getBookDetails = (id) => {
    axios.get(`http://localhost:5000/api/books/${id}`)
      .then(response => {
        setSelectedBook(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the book details:", error);
      });
  };

  const handleEdit = (book) => {
    setIsEditing(true);
    setSelectedBook(book);
    setUpdatedBook(book);
  };

  const handleUpdate = (id) => {
    axios.put(`http://localhost:5000/api/books/${id}`, updatedBook)
      .then(response => {
        setBooks(books.map(book => book._id === id ? response.data : book));
        setIsEditing(false);
        alert('Book updated successfully!');
      })
      .catch(error => {
        console.error("There was an error updating the book:", error);
        alert('Error updating book');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook({ ...updatedBook, [name]: value });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-8">Book List</h2>

      {/* 列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book._id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
            <p className="text-gray-700">Author: {book.author}</p>
            <p className="text-gray-500">Published Year: {book.publishedYear}</p>
            <p className="text-gray-500">ISBN: {book.isbn}</p>
            <p className="text-gray-600 mt-2">{book.description}</p>
            <div className="mt-auto flex space-x-4">
              <button
                onClick={() => getBookDetails(book._id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
              >
                View Details
              </button>
              <button
                onClick={() => handleEdit(book)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700"
              >
                Edit
              </button>
              <button
                onClick={() => deleteBook(book._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 詳請 */}
      {selectedBook && (
        <div className="mt-8 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Book Details</h2>
          <p><strong>Title:</strong> {selectedBook.title}</p>
          <p><strong>Author:</strong> {selectedBook.author}</p>
          <p><strong>Published Year:</strong> {selectedBook.publishedYear}</p>
          <p><strong>ISBN:</strong> {selectedBook.isbn}</p>
          <p><strong>Description:</strong> {selectedBook.description}</p>
        </div>
      )}

      {/* 編輯 */}
      {isEditing && (
        <div className="mt-8 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Edit Book</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleUpdate(selectedBook._id); }} className="space-y-4">
            <div>
              <label className="block text-lg font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={updatedBook.title}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Author</label>
              <input
                type="text"
                name="author"
                value={updatedBook.author}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Published Year</label>
              <input
                type="text"
                name="publishedYear"
                value={updatedBook.publishedYear}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">ISBN</label>
              <input
                type="text"
                name="isbn"
                value={updatedBook.isbn}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Description</label>
              <textarea
                name="description"
                value={updatedBook.description}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button type="submit" className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
              Update Book
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookList;