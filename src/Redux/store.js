// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading state from localStorage', error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (error) {
    console.error('Error saving state to localStorage', error);
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadState(), // Load state from localStorage
});

store.subscribe(() => {
  saveState(store.getState()); // Save state to localStorage on every store update
});

export default store;
