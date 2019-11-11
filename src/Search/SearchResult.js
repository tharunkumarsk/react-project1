import React from 'react';
import OneBook from '../Commons/OneBook';
import PropTypes from 'prop-types';
import Error from '../Errors/Error'


const SearchResults = props => {

  const {searchResult,searchError,categoryChange} = props;
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
            booksCategory = {oneBook.shelf ? oneBook.shelf : 'none'}
            categoryChange={categoryChange}
            ></OneBook>
          ))}
        </ol>
      </div>
    );
  

  
};

SearchResults.propTypes = {
  searchResult:PropTypes.array,
  searchError:PropTypes.bool,
  categoryChange:PropTypes.func.isRequired

};

export default SearchResults;