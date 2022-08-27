/* eslint-disable */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Components/Header';
import Catagories from './Components/Catagories';
import BookList from './Components/BookList';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/catagories" element={<Catagories />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
