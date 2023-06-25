import {createSlice} from '@reduxjs/toolkit';

const initialState: Record<string, number> = {count: 0};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, {payload}) => {
      state.count++;
      state[payload] = (state[payload] || 0) + 1;
    },
    decrement: (state, {payload}) => {
      const count = state[payload];

      if (!count) return;

      if (count === 1) {
        state.count--;
        delete state[payload];
        return;
      }

      state[payload] = count - 1;
      state.count--;
    },
    delete: (state, {payload}) => {
      state.count -= state[payload] ?? 0;
      delete state[payload];
    },
    reset: () => initialState
  }
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
