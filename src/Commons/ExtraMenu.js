import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExtraMenu extends Component {

  state = {
    category: this.props.category
  };


  changeCategory = event => {
    const { value } = event.target;
    this.setState({ value });
    this.props.categoryChange(this.props.book,value)
    console.log(value)
   
  };

  render() {

    const {category} = this.state

    return (
      <div className="book-shelf-changer">
        <select value={category} onChange={this.changeCategory}>
          <option value="move" disabled>
            Move to any of below...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

ExtraMenu.propTypes = {
  category: PropTypes.string,
  
};

export default ExtraMenu;