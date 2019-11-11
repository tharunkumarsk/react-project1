import React from 'react';
import OneBook from '../Commons/OneBook';
import PropTypes from 'prop-types';


const SearchResults = props => {

  const {booksList,searchResult} = props;


  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchResult.map(oneBook => (
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
  booksList: PropTypes.array,
  searchResult:PropTypes.array
};

export default SearchResults;