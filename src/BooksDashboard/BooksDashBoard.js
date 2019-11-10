import React from 'react'
import BookShelfUnit from './BookShelfUnit'


class BooksDashBoard extends React.Component {

    render() {
        const {booksCategory, booksList} = this.props;
        console.log(booksList)

        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {booksCategory.map(category => (
                   <BookShelfUnit
                   key ={category.key}
                   booksCategory = {category}
                   booksList = {booksList}
                   ></BookShelfUnit>
                ))}
              </div>
            </div>
          </div>
        );
      }
}

export default BooksDashBoard
