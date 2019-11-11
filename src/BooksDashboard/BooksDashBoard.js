import React from 'react'
import BookShelfUnit from './BookShelfUnit'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class BooksDashBoard extends React.Component {

    render() {
        const {booksCategory, booksList,categoryChange} = this.props;

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
                   categoryChange={categoryChange}
                   ></BookShelfUnit>
                ))}
              </div>
            </div>

             <div className="open-search">
                <Link to="search">
                   <button>Add a Book</button>
                </Link>
             </div>
             
          </div>
        );
      }
}
BooksDashBoard.propTypes = {
  booksCategory: PropTypes.array,
  booksList: PropTypes.array,
  categoryChange:PropTypes.func
};

export default BooksDashBoard
