import React from 'react';
import ExtraMenu from './ExtraMenu';

const OneBook = ({ book,booksCategory}) => (
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

        <ExtraMenu book={book} category={booksCategory}/>


      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors}
      </div>
    </div>
  </li>
);

export default OneBook;