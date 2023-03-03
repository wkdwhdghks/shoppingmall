import { configureStore, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [],
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
    addItem(state, action) {
      const { payload } = action;
      if (state.find((item) => item.name === payload.title)) {
        alert("이미 장바구니에 추가된 상품입니다.");
      } else {
        state.push({ id: payload.id, name: payload.title, count: 0 });
        alert("장바구니에 추가되었습니다.");
      }
    },
    deleteItem(state, action) {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

export let { addCount, minusCount, addItem, deleteItem } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
