import React, { Component } from 'react';
import SearchInput from './SearchInput'
import BackButton from './BackButton'

class SearchMain extends Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
        <BackButton/>
        <SearchInput/>
        </div>
      </div>
    );
  }
}

export default SearchMain;