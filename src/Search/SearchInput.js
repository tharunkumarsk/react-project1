import React, { Component } from 'react';

class SearchInput extends Component {
    
  state = {
    searchQuery: '',
  };

  inputChange = event => {
    const value = event.target.value;
    this.setState({
        searchQuery:value
    })
    this.props.searchForAbook(value)
  };

  render() {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={this.state.searchQuery}
          placeholder="Search by title or author"
          onChange={this.inputChange}
        />
      </div>
    );
  }
}

export default SearchInput;