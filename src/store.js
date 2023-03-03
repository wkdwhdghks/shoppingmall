import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartData = createSlice({
  name: "cartData",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let num = state.findIndex((el) => el.id === action.payload);
      state[num].count++;
    },
    minusCount(state, action) {
      let num = state.findIndex((el) => el.id === action.payload);
      if (state[num].count !== 0) {
        state[num].count--;
      } else {
        state[num].count = 0;
      }
    },
  },
});

export let { addCount, minusCount } = cartData.actions;

export default configureStore({
  reducer: {
    cartData: cartData.reducer,
  },
});
