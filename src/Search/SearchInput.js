import React, { Component } from 'react';
import {stringConstants} from '../Constants/AppLevelConstats'


class SearchInput extends Component {
    
  state = {
    searchQuery: stringConstants.EMPTY,
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
          type={stringConstants.INPUT_TEXT}
          value={this.state.searchQuery}
          placeholder={stringConstants.SEARCH_PLACE_HOLDER}
          onChange={this.inputChange}
        />
      </div>
    );
  }
}

export default SearchInput;