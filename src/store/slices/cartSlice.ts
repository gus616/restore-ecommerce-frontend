import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem } from '../../models/CartItem';

interface CartState {
  items: CartItem[];
  selectedIds: number[];
}

const initialState: CartState = {
  items: [],
  selectedIds: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    cleanCart(state) {
      state.items = [];
    },
    toggleSelectedItem(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (state.selectedIds.includes(id)) {
        state.selectedIds = state.selectedIds.filter((itemId) => itemId !== id);
      } else {
        state.selectedIds.push(id);
      }
    },
    clearSelected(state) {
      state.selectedIds = [];
    },
    selectAll(state) {
      state.items.forEach((i) => {
        state.selectedIds.push(i.id);
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  cleanCart,
  toggleSelectedItem,
  clearSelected,
  selectAll
} = cartSlice.actions;

export default cartSlice.reducer;
