import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import bs1 from './bs1.jpg';

const Buy = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      await axios.get('http://localhost:5000/books').then((res) => res.data).then((data) => setBooks(data.books));
    };
    fetchBooks();
  }, []);
  
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
      {books.map((book) => (
        <div key={book._id}>
          <div className="card" style={{ backgroundImage: `url(${bs1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
            {/* Book details */}
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxWidth={200}
              margin="auto"
              padding="10px"
            >
              <img src={book.image} alt={book.name} style={{ width: '100%', maxWidth: '150px', borderRadius: '8px' }} />
              <Typography variant="h5" style={{ color: 'white' }}>{book.name}</Typography>
              <Typography variant="subtitle1" style={{ color: 'white' }}>By {book.author}</Typography>
              <Typography variant="body1" style={{ color: 'white' }}>{book.description}</Typography>
              <Typography variant="h6" style={{ color: 'white' }}>Rs {book.price}</Typography>
            </Box>

            {/* Buy button */}
            <Button LinkComponent={Link} to={`/buy/${book._id}`} variant="contained" sx={{ mt: '10px' }}>
              Buy
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Buy;
