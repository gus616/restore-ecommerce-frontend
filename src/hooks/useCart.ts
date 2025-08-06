import { useCallback, useMemo } from 'react';
import { useAppSelector } from '../store/store';

export const useCart = () => {
  const { items, selectedIds } = useAppSelector((state) => state.cart);

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
  };
};
