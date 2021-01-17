import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';

const mainReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: mainReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
