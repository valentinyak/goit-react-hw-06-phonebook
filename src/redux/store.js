import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';

const mainReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
const rootReducer = combineReducers({
  contacts: mainReducer,
});

const persistConfig = {
  key: 'phonebook',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

export { store, persistor };
