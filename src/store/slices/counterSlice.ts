import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    add: (state, action: { payload: typeof state.count }) => {
      state.count += action.payload;
    },
  },
});

//相当于以前的actions
export const { increment, decrement, add } = counterSlice.actions;

//相当于以前的reducers
export default counterSlice.reducer;
