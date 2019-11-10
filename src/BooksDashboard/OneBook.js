import React from 'react';
import ExtraMenu from './ExtraMenu';
import PropTypes from 'prop-types';

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

OneBook.propTypes = {
  book: PropTypes.object,
  booksCategory: PropTypes.string
};


export default OneBook;