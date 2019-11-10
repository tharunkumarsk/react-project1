import React from 'react';

class BookshelfUnit extends React.Component {
    render() {
    console.log(this.props.booksList)
  const {booksCategory, booksList} = this.props;
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
   }
}

export default BookshelfUnit;