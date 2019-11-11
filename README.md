# react-project1
 Bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.
 And a search page where you can search for available books and and to you Bookshelf


## Installation

Clone the repository,and use NPM to install the dependencies.

npm install

## To start the application

- `npm start`

This automatically opens the below URL with app running

- [http://localhost:3000](http://localhost:3000)

## Feature-1 Listing the books in the Books Dashboard woth category

planned structure 

![Books Dashboard](./images/DashBoardPlan.jpg)

![Search components](./images/SearchPlan.jpg)


## Project feature/requirement

### Main Page

#### CRITERIA

MEETS SPECIFICATIONS
Does the main page show three categories (or “bookshelves”) for books (currently reading, want to read, and read)?

The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors.

Does the main page allow users to move books between shelves?

The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.

Does information persist between page refreshes?

When the browser is refreshed, the same information is displayed on the page.

### Search Page

#### CRITERIA

MEETS SPECIFICATIONS
Does the search page have a search input that lets users search for books?

1) The search page has a search input field.

2) The search page behaves correctly:
a) As the user types into the search field, books that match the query are displayed on the page, along with their titles and authors. You can use throttle/debounce but are not required to do so.
b) Search results are not shown when all of the text is deleted out of the search input box.
c) Invalid queries are handled and prior search results are not shown.
d) The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography"). (It's fine to filter out books with missing thumbnails.)
e) The user is able to search for multiple words, such as “artificial intelligence.”

Do the search results allow a user to categorize a book as “currently reading”, “want to read”, or “read”?

Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.

If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.

Do selections made on the search page show up on the main page?

When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

### Routing

#### CRITERIA

MEETS SPECIFICATIONS
Does the main page link to the search page?

The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.

Does the search page link back to the main page?

The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.
