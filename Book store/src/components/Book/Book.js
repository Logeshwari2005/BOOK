import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Book.css';
import bs6 from './bs6.jpg'; // Assuming the path to bs6.jpg is correct

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history('/'))
      .then(() => history('/books'));
  };

  const cardStyle = {
    backgroundImage: `url(${bs6})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price} </h3>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: 'auto' }}>
        Update
      </Button>
      <Button onClick={deleteHandler} sx={{ mt: 'auto' }}>
        Delete
      </Button>
    </div>
  );
};

export default Book;
