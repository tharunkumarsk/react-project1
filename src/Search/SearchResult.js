import React from 'react';
import OneBook from '../Commons/OneBook';
import PropTypes from 'prop-types';


const SearchResults = props => {

  const {booksList} = props;


  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {booksList.map(oneBook => (
          <OneBook
          key ={oneBook.id}
          book = {oneBook}
          ></OneBook>
        ))}
      </ol>
    </div>
  );
};

SearchResults.propTypes = {
  booksList: PropTypes.array
};

export default SearchResults;