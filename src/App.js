import React from 'react'
import './App.css'
import { Route } from 'react-router-dom';
import {booksCategory} from './Constants/AppLevelConstats'
import BooksDashBoard from './BooksDashboard/BooksDashBoard'
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {

  state = {
    booksList: []
  };
  
  componentDidMount = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ booksList: books });
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  
  render() {
    const {booksList} = this.state;
    console.log(booksList);

      return (
      <div className="app">
         <Route
          exact
          path="/"
          render={() => (
            <BooksDashBoard
              booksCategory={booksCategory}
              booksList = {booksList}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
