import React, { useState } from 'react';
import axios from 'axios';

const BookForm = ({ onSubmit, bookData }) => {
  const [title, setTitle] = useState(bookData?.title || '');
  const [author, setAuthor] = useState(bookData?.author || '');
  const [publishedYear, setPublishedYear] = useState(bookData?.publishedYear || '');
  const [isbn, setIsbn] = useState(bookData?.isbn || '');
  const [description, setDescription] = useState(bookData?.description || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    const book = { title, author, publishedYear, isbn, description };
    onSubmit(book);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
      <input type="number" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} placeholder="Published Year" required />
      <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} placeholder="ISBN" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;