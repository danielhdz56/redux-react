import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({ // adds a key to our global application state called books, and the value is the array of books (BooksReducer)
  books: BooksReducer
});

export default rootReducer;
