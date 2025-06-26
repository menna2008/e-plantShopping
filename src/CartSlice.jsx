import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const plant = state[action.payload]
      const existingItem = state.items.find(item => item.name === plant.name)
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.items.push({...plant, quantity : 1})
      }
    },

    removeItem: (state, action) => {
      const name = state[action.payload]
      state.items = state.items.filter(item => item.name !== name)
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload
      const itemToUpdate = state.items.find(item => item.name === name)
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
