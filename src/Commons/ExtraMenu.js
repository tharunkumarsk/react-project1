import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {stringConstants} from '../Constants/AppLevelConstats'


class ExtraMenu extends Component {

  state = {
    category: this.props.category
  };


  changeCategory = event => {
    const { value } = event.target;
    this.setState({ value });
    this.props.categoryChange(this.props.book,value)
   
  };

  render() {

    const {category} = this.state

    return (
      <div className="book-shelf-changer">
        <select value={category} onChange={this.changeCategory}>
          <option value={stringConstants.MOVE} disabled>
            Move to any of below...
          </option>
          <option value={stringConstants.CURRENTLY_READING}>Currently Reading</option>
          <option value={stringConstants.WANT_TO_READ}>Want to Read</option>
          <option value={stringConstants.READ}>Read</option>
          <option value={stringConstants.NONE}>None</option>
        </select>
      </div>
    );
  }
}

ExtraMenu.propTypes = {
  category: PropTypes.string,
  
};

export default ExtraMenu;