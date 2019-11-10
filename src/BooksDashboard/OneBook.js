import React from 'react';

const OneBook = ({ book, category}) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors}
      </div>
    </div>
  </li>
);

export default OneBook;