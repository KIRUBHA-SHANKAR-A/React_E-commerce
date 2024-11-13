import { INCREMENT_ITEM, DECREMENT_ITEM } from './actions';

const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Check if the item already exists in the cart
        const existingItemIndex = state.items.findIndex(item => item.productId === action.payload.productId);
  
        if (existingItemIndex !== -1) {
          // If it exists, increment the quantity instead of adding a new item
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + 1, // Increment quantity
          };
          return { ...state, items: updatedItems };
        } else {
          // If it doesn't exist, add it to the cart with a quantity of 1
          return {
            ...state,
            items: [...state.items, { ...action.payload, quantity: 1 }],
          };
        }
  
      case 'INCREMENT_ITEM':
        return {
          ...state,
          items: state.items.map(item =>
            item.productId === action.payload
              ? { ...item, quantity: item.quantity + 1 } // Increment quantity
              : item
          ),
        };
  
      case 'DECREMENT_ITEM':
        return {
          ...state,
          items: state.items.map(item =>
            item.productId === action.payload
              ? { ...item, quantity: Math.max(1, item.quantity - 1) } // Decrement quantity, ensure it doesn't go below 1
              : item
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  