import React from 'react'
import './App.css'
import { Route } from 'react-router-dom';
import {booksCategory} from './Constants/AppLevelConstats'
import BooksDashBoard from './BooksDashboard/BooksDashBoard'

class BooksApp extends React.Component {
  
  
  render() {
    return (
      <div className="app">
         <Route
          exact
          path="/"
          render={() => (
            <BooksDashBoard
              booksCategory={booksCategory}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
