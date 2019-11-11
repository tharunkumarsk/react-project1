import React, { Component } from 'react';
import SearchInput from './SearchInput'
import BackButton from './BackButton'
import PropTypes from 'prop-types';
import SearchResults from './SearchResult';


class SearchMain extends Component {
  
  render() {
    const {booksList} =this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
        <BackButton/>
        <SearchInput/>
        </div>

        <SearchResults
        booksList ={booksList}
        />
      </div>
    );
  }
}

SearchMain.propTypes = {
  booksList: PropTypes.array
};

export default SearchMain;