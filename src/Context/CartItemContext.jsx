import React from 'react';

const ItemContext = React.createContext();

export const ItemProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    calculatePrice();
  }, [cartItems]);

  const addItem = (newItem) => {
    setCartItems((prevState) => [...prevState, newItem]);
  };

  const delItem = (itemId) => {
    setCartItems((prevState) => prevState.filter((item) => item.id != itemId));
  };

  const calculatePrice = () => {
    setTotalPrice(cartItems?.reduce((total, item) => total + item.price, 0));
  };

  const contextData = { cartItems, addItem, delItem, totalPrice };

  return (
    <ItemContext.Provider value={contextData}>{children}</ItemContext.Provider>
  );
};

export default ItemContext;
