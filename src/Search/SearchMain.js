import React, { Component } from 'react';
import SearchInput from './SearchInput'
import BackButton from './BackButton'
import PropTypes from 'prop-types';
import SearchResults from './SearchResult';


class SearchMain extends Component {
  
  render() {
    const {booksList,searchResult,searchForAbook,searchError} =this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
        <BackButton/>
        <SearchInput
         searchForAbook ={searchForAbook}
        />
        </div>

        <SearchResults
        booksList ={booksList}
        searchResult ={searchResult}
        searchError ={searchError}
        />
      </div>
    );
  }
}

SearchMain.propTypes = {
  booksList: PropTypes.array,
  searchResult:PropTypes.array,
  searchForAbook:PropTypes.func,
  searchError:PropTypes.bool
};

export default SearchMain;