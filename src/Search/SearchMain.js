import React, { Component } from 'react';
import SearchInput from './SearchInput'
import BackButton from './BackButton'
import PropTypes from 'prop-types';
import SearchResults from './SearchResult';


class SearchMain extends Component {
  
  render() {
    const {bookList,searchResult,searchForAbook,searchError,resetSearch,categoryChange} =this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
        <BackButton
        resetSearch ={resetSearch}
        />

        <SearchInput
         searchForAbook ={searchForAbook}
        />
        
        </div>

        <SearchResults
        bookList ={bookList}
        searchResult ={searchResult}
        searchError ={searchError}
        categoryChange ={categoryChange}
        />
      </div>
    );
  }
}

SearchMain.propTypes = {
  bookList:PropTypes.array.isRequired,
  searchResult:PropTypes.array.isRequired,
  searchForAbook:PropTypes.func.isRequired,
  searchError:PropTypes.bool.isRequired,
  resetSearch:PropTypes.func.isRequired,
  categoryChange:PropTypes.func.isRequired

};

export default SearchMain;