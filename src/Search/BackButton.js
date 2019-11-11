import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = ({resetSearch}) => (
  
        <Link to="/">
        <button className="close-search" onClick={resetSearch}>
          Close
        </button>
      </Link>
);

export default BackButton;