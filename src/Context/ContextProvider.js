import { useContext } from 'react';
import ItemContext from './CartItemContext';

export const useContextData = () => {
  return useContext(ItemContext);
};
