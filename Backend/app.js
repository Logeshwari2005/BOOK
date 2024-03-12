const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors=require('cors');
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

// Root path handler
app.get('/', (req, res) => {
  res.send('Welcome to the Book Store API'); // You can customize this message
});

mongoose
  .connect(
    'mongodb+srv://admin:7GGUt3ZItZKwZawy@cluster0.nlvxijq.mongodb.net/book-Store?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => console.log('Connected to database'))
  .then(() => {
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  })
  .catch((err) => console.log(err));
