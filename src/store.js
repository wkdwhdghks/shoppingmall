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
  },
});

export let { addCount } = cartData.actions;

export default configureStore({
  reducer: {
    cartData: cartData.reducer,
  },
});
