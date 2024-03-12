import React from 'react';
import "./App.css";
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Books from './components/Book/Books';
import About from './components/About';
import AddBook from './components/AddBook';
import Login from './components/Login';
import SignUp from './components/SignUp';
import BookDetail from './components/Book/BookDetail';
import Buy from './components/Buy';
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/books/:id" element={<BookDetail/>} />
          <Route path="/" element={<Navigate to="/signup" />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
