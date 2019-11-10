import React from 'react';

const BookshelfUnit = (props) => {
    
  const {booksCategory, booksList} = props;
  const booksOnSpecificCategory = booksList.filter(book => book.shelf === booksCategory.key);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{booksCategory.name}</h2>
      <div className="bookshelf-books">
        <ol>
          {booksOnSpecificCategory.map(oneBook => (
              <li key ={oneBook.id}>
                <p>{oneBook.title}</p>
                </li>
          ))}
        </ol>
      </div>
    </div>
  );
   
};

export default BookshelfUnit;