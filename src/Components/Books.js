import React from 'react';
import BookItem from './BookItem';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'The reachest man in the babylon',
      author: 'Author 1',
    },
    {
      id: 2,
      title: 'Marketing management',
      author: 'Keller',
    },
  ];
  return (
    <>
      {books.map((book) => (
        <BookItem key={book.id} bookProps={book} />
      ))}
    </>
  );
};

export default Books;
