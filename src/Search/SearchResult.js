import React from 'react';
import OneBook from '../Commons/OneBook';
import PropTypes from 'prop-types';
import Error from '../Errors/Error'


const SearchResults = props => {

  const {bookList,searchResult,searchError,categoryChange} = props;
  if(searchError){
    return <Error
    text ={"No search result found...!"}
    />
  }
  const searchedBooksUpdatedWithCategory = searchResult.map(searchedBook => {
    bookList.map(mainPageBook => {
      if (mainPageBook.id === searchedBook.id) {
        searchedBook.shelf = mainPageBook.shelf;
      }
      return mainPageBook;
    });
    return searchedBook;
  });
 
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooksUpdatedWithCategory.map(oneBook => (
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
  bookList: PropTypes.array.isRequired,
  searchResult:PropTypes.array,
  searchError:PropTypes.bool.isRequired,
  categoryChange:PropTypes.func.isRequired

};

export default SearchResults;