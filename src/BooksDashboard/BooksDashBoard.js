import React from 'react'
import BookShelfUnit from './BookShelfUnit'
import PropTypes from 'prop-types';


class BooksDashBoard extends React.Component {

    render() {
        const {booksCategory, booksList} = this.props;

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
BooksDashBoard.propTypes = {
  booksCategory: PropTypes.array,
  booksList: PropTypes.array
};

export default BooksDashBoard
