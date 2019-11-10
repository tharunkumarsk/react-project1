import React from 'react'


class BooksDashBoard extends React.Component {

    render() {
        const booksCategory = Object.keys(this.props.booksCategory).map((k) => this.props.booksCategory[k])

        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {booksCategory.map(shelf => (
                    <h2 className="bookshelf-title" key={shelf.name}>{shelf.name}</h2>
                ))}
              </div>
            </div>
          </div>
        );
      }
}

export default BooksDashBoard
