import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catagories from './components/Catagories.js';
import Header from './components/Header.js';
import BookList from './components/BookList.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/catagories" element={<Catagories />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
