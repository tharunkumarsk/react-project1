import React from 'react'
import './App.css'
import { Route } from 'react-router-dom';
import {booksCategory} from './Constants/AppLevelConstats'
import BooksDashBoard from './BooksDashboard/BooksDashBoard'
import * as BooksAPI from './BooksAPI';
import Error from './Errors/Error'

class BooksApp extends React.Component {

  state = {
    booksList: [],
    error: false
  };
  
  componentDidMount = () => {
    BooksAPI.getAll()
      .then(books => {
       this.setState({ booksList: books });
      })
      .catch(err => {
        this.setState({error:true})
      });
  };
  
  changeBookcategory = (bookToUpdate, newCategory) => { 
    console.log(bookToUpdate)
    BooksAPI.update(bookToUpdate, newCategory).catch(err => {
    console.log(err);
    this.setState({ error: true });
  });
 
};
  
  render() {
    const {booksList,error} = this.state;

    if (error) {
     return <Error/>
    }


      return (
      <div className="app">
         <Route
          exact
          path="/"
          render={() => (
            <BooksDashBoard
              booksCategory={booksCategory}
              booksList = {booksList}
              categoryChange={this.changeBookcategory}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
