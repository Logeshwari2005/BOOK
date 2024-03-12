import React, { useState } from 'react';
import './App.css';

const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', image: 'co1.jpg', price: 10.99 },
  { id: 2, title: 'Book 2', author: 'Author 2', image: 'co2.jpg', price: 12.99 },
  { id: 3, title: 'Book 3', author: 'Author 3', image: 'co3.jpg', price: 8.99 },
  { id: 4, title: 'Book 1', author: 'Author 1', image: 'co1.jpg', price: 10.99 },
  { id: 5, title: 'Book 2', author: 'Author 2', image: 'co2.jpg', price: 12.99 },
  { id: 6, title: 'Book 3', author: 'Author 3', image: 'co3.jpg', price: 8.99 },
  { id: 7, title: 'Book 1', author: 'Author 1', image: 'co1.jpg', price: 10.99 },
  { id: 8, title: 'Book 2', author: 'Author 2', image: 'co2.jpg', price: 12.99 },
  { id: 9, title: 'Book 3', author: 'Author 3', image: 'co3.jpg', price: 8.99 },
  { id: 10, title: 'Book 1', author: 'Author 1', image: 'co1.jpg', price: 10.99 },
  { id: 11, title: 'Book 2', author: 'Author 2', image: 'co2.jpg', price: 12.99 },
  { id: 12, title: 'Book 3', author: 'Author 3', image: 'co3.jpg', price: 8.99 },
  // Add more books as needed
];

const BookGrid = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});

  const handleAddToCart = (book, quantity) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(item => item.book.id === book.id);
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += quantity;
    } else {
      updatedCart.push({ book, quantity });
    }
    setCart(updatedCart);
  };

  const toggleFavorite = (bookId) => {
    if (favorites.includes(bookId)) {
      setFavorites(favorites.filter(id => id !== bookId));
    } else {
      setFavorites([...favorites, bookId]);
    }
  };

  const handleRatingChange = (bookId, event) => {
    setRatings({ ...ratings, [bookId]: parseInt(event.target.value) });
  };

  return (
    <div>
      <header className="header">
        <h2>Comics and Graphic Novels</h2>
      </header>
      <br></br>
    <div className="book-grid">
      {books.map(book => (
        <div className="book-container" key={book.id}>
          <img src={book.image} alt={book.title} style={{ width: '150px', height: '200px' }} />
         
          <div className="book-details">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            <div className="book-actions">
              <button onClick={() => handleAddToCart(book, 1)}>Add to Cart</button>
              <button onClick={() => toggleFavorite(book.id)}>
                {favorites.includes(book.id) ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </div>
            <br></br>
            <div className="book-rating">
              <label>Rate this book:</label>
              <select value={ratings[book.id] || 0} onChange={(e) => handleRatingChange(book.id, e)}>
                <option value={0}>No Rating</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
          </div>
          <br></br>
        </div>
      ))}
    </div>
    </div>
  );
};

export default BookGrid;