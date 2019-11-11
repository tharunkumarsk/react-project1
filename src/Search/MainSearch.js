import React, { Component } from 'react';
import SearchInput from './SearchInput'

class SearchMain extends Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
        <SearchInput/>
        </div>
      </div>
    );
  }
}

export default SearchMain;