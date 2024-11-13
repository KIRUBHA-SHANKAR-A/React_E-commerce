import { createStore, combineReducers } from 'redux';
import cartReducer from './reducer'; // Import the cart reducer

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  cart: cartReducer, // Add cart reducer to the root reducer
});

// Create the Redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enable Redux DevTools if available
);

export default store;
