import React from 'react'
import './App.css'
import { Route } from 'react-router-dom';
import {booksCategory} from './Constants/AppLevelConstats'
import BooksDashBoard from './BooksDashboard/BooksDashBoard'
import * as BooksAPI from './BooksAPI';
import Error from './Errors/Error'
import SearchMain from './Search/MainSearch'

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

    if (newCategory === 'none') {
      this.setState(currentState => ({
        booksList: currentState.booksList.filter(book => book.id !== bookToUpdate.id)
      }));
    }

    else {
      bookToUpdate.shelf = newCategory;
      const newList = this.state.booksList.filter(book => book.id !== bookToUpdate.id)
      this.setState(currentState => ({
         booksList: [...newList,bookToUpdate]
      }));
    
    }
    this.callUpdateAPI(bookToUpdate,newCategory)
};

callUpdateAPI = (bookToUpdate,newCategory) =>{
  BooksAPI.update(bookToUpdate, newCategory).catch(err => {
    this.setState({ error: true });
  });
}
  
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

        <Route
          path="/search"
          render={() => (
            <SearchMain/>
          )}
        />
      </div>
    )
  }
}

export default BooksApp
