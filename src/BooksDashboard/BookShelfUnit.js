import React from 'react';
import OneBook from './OneBook'

const BookshelfUnit = (props) => {
    
  const {booksCategory, booksList} = props;
  const booksOnSpecificCategory = booksList.filter(book => book.shelf === booksCategory.key);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{booksCategory.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnSpecificCategory.map(oneBook => (
              <OneBook
              key ={oneBook.id}
              book = {oneBook}
              booksCategory = {booksCategory.key}
              ></OneBook>
          ))}
        </ol>
      </div>
    </div>
  );
   
};

export default BookshelfUnit;