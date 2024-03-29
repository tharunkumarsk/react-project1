import React from 'react'
import './App.css'
import { Route } from 'react-router-dom';
import {booksCategory,stringConstants} from './Constants/AppLevelConstats'
import BooksDashBoard from './BooksDashboard/BooksDashBoard'
import * as BooksAPI from './BooksAPI';
import Error from './Errors/Error'
import SearchMain from './Search/SearchMain'

class BooksApp extends React.Component {

  state = {
    booksList: [],
    error: false,
    searchResult: [],
    searchError:false
  };
  
  componentDidMount = () => {
    BooksAPI.getAll()
      .then(books => {
       this.setState({ booksList: books });
      })
      .catch(err => {
        this.handleApiFailure()
      });
  };
  
  changeBookcategory = (bookToUpdate, newCategory) => { 

    if (newCategory === stringConstants.NONE) {
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
    this.handleApiFailure()
  });
};

searchForAbook = (queryString) =>{
  if(queryString.length > 0){
    this.callSearchAPI(queryString)
  }
  else{
  this.resetSearch()
  }
};

callSearchAPI =(queryString) => {
  BooksAPI.search(queryString)
  .then(books => {
   this.handleSearchResponse(books)
  })
  .catch(err => {
    this.handleApiFailure()
  });
};


handleSearchResponse =(books) => {
  if (books.error) {
    this.handleSearchErrorResponse()
  }
  else {
      this.setState({ 
        searchResult: books,
        searchError:false
      });
    }
  
};

handleSearchErrorResponse = () => {
  this.setState(
    {
      searchResult:[],
      searchError:true
    });
};

resetSearch = () => {
  this.setState(
    {
      searchResult:[],
      searchError:false
    });
};

handleApiFailure = () => {
  this.setState(
    {
      error:true
    });
};


  
  render() {
    const {booksList,error,searchResult,searchError} = this.state;

    if (error) {
     return <Error
     text ={stringConstants.API_ERROR}
     />
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
            <SearchMain
            bookList = {booksList}
            searchResult ={searchResult}
            searchForAbook ={this.searchForAbook}
            searchError={searchError}
            resetSearch ={this.resetSearch}
            categoryChange={this.changeBookcategory}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
