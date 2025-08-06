import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { addToCart, removeFromCart, updateQuantity } from '../store/slices/cartSlice';
import type { CartItem } from '../models/CartItem';

export const useCart = () => {
  const { items, selectedIds } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const handleAdd = useCallback((item: CartItem) => {
    dispatch(addToCart({
      ...item,
      quantity: 1
    }));
  }, [dispatch]);

  const handleSubtract = useCallback((item: CartItem) => {
    dispatch(updateQuantity({
      id: item.id,
      quantity: item.quantity - 1
    }));
  }, [dispatch]);

  const handleRemove = useCallback((item: CartItem) => {
    dispatch(removeFromCart(item.id));
  }, [dispatch]);

  return {
    items,
    selectedIds,
    productsSelected: useMemo(() => {
      if (!selectedIds || selectedIds.length === 0) return [];
      return items.filter((item) => selectedIds.includes(item.id));
    }, [items, selectedIds]),
    getSubTotal: useCallback(() => {
      if (!selectedIds?.length) return 0;

      const selectedItems = items.filter((item) =>
        selectedIds.includes(item.id)
      );

      if (selectedItems.length === 0) {
        return 0;
      }

      return selectedItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    }, [items, selectedIds]),
    handleAdd,
    handleSubtract,
    handleRemove,
  };
};
