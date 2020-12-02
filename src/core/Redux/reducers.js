// react library imports
import { combineReducers } from 'redux';
import advisorsReducer from './advisors/reducers/advisors.reducer'

const rootReducer = combineReducers(
  {
      advisorsReducer
  }
);

export default rootReducer;
