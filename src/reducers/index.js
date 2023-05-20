import { combineReducers } from 'redux'
import counterReducer from './counter'
import bookReducer from './books'

export default combineReducers({
  counter: counterReducer,
  books: bookReducer,
  // more reducers would go here
})