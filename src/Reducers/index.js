import { combineReducers } from 'redux';
import sign from './Sign';
import { changePage, displayToDos, changeAmountOfPages, calculatePages, changeFilter } from './Api.js';

export default combineReducers({
  sign,
  changePage,
  displayToDos,
  changeAmountOfPages,
  calculatePages,
  changeFilter
})
