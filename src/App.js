/* eslint-disable */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catagories from './components/Catagories';
import Header from './components/Header';
import BookList from './components/BookList';

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
