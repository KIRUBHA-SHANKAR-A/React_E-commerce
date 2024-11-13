// Action Types
export const INCREMENT_ITEM = 'INCREMENT_ITEM';
export const DECREMENT_ITEM = 'DECREMENT_ITEM';

// Action Creators
export const incrementItem = (productId) => ({
  type: INCREMENT_ITEM,
  payload: productId,
});

export const decrementItem = (productId) => ({
  type: DECREMENT_ITEM,
  payload: productId,
});
