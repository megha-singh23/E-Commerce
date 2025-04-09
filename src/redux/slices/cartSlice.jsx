import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
        state.value.push({ ...action.payload});
    },
    removeProduct: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.value = [];
    },
    totalPrice:(state,action)=>{
        state.value=state.value.map(item=>item.price);
        state.value+=state.value;
    }
  },
})

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
