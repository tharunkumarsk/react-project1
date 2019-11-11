import React from 'react';
import OneBook from '../Commons/OneBook';
import PropTypes from 'prop-types';
import Error from '../Errors/Error'


const SearchResults = props => {

  const {bookList,searchResult,searchError} = props;
  if(searchError){
    return <Error
    text ={"No search result found...!"}
    />
  }
 
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
  searchResult:PropTypes.array,
  searchError:PropTypes.bool
};

export default SearchResults;