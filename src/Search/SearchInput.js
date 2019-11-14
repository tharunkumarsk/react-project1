import React, { Component } from 'react';
import {stringConstants} from '../Constants/AppLevelConstats';
import {DebounceInput} from 'react-debounce-input';


class SearchInput extends Component {
    
  state = {
    searchQuery: stringConstants.EMPTY,
  };

  inputChange = event => {
    const value = event.target.value;
    this.setState({
        searchQuery:value
    })
    this.props.searchForAbook(value.trim())
  };

  render() {
    return (
      <div className="search-books-input-wrapper">
        <DebounceInput
          value={this.state.searchQuery}
          placeholder={stringConstants.SEARCH_PLACE_HOLDER}
          debounceTimeout={500}
          onChange={this.inputChange}
        />
      </div>
    );
  }
}

export default SearchInput;