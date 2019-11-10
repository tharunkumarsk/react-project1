import React, { Component } from 'react';

class ExtraMenu extends Component {

  changeCategory = event => {
    const { value } = event.target;
    console.log(value)
   
  };

  render() {

    return (
        
      <div className="book-shelf-changer">
        <select value={this.props.category} onChange={this.changeCategory}>
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

export default ExtraMenu;