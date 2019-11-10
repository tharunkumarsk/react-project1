import React from 'react';

const OneBook = ({ book}) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            backgroundImage: `url(${
                book.imageLinks && book.imageLinks.thumbnail ?  book.imageLinks.thumbnail :
                'no_image.jpg'
            })`
          }}
          
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