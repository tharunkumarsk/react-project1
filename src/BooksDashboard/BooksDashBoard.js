import React from 'react'


class BooksDashBoard extends React.Component {

    render() {
        const {booksCategory, booksList} = this.props;
        const booksCategoryArray = Object.keys(booksCategory).map((k) => booksCategory[k])
        
        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {booksCategoryArray.map(shelf => (
                    <h2 className="bookshelf-title" key={shelf.name}>{shelf.name}</h2>
                ))}
              </div>
            </div>
          </div>
        );
      }
}

export default BooksDashBoard
