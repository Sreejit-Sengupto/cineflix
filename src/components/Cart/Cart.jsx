import React from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import CartItems from './CartItems';
import { useContextData } from '../../Context/ContextProvider';

const Cart = () => {
  const { cartItems } = useContextData();

  const [showCart, setShowCart] = React.useState(false);
  const toggleCart = () => {
    setShowCart((prevState) => !prevState);
  };

  const totalCartItems = cartItems?.length || 0;

  return (
    <div className="mx-2 lg:mx-4">
      <HiOutlineShoppingCart
        size={'1.5em'}
        className="relative cursor-pointer"
        color="#606775"
        onClick={toggleCart}
      />
      <p className="absolute pointer-events-none top-[15px] right-[50px] lg:right-[60px] text-black rounded-[50%] w-4 h-4 bg-[#FFD62C] text-center text-[11px]">
        {totalCartItems}
      </p>

      {showCart && <CartItems setShowCart={setShowCart} />}
    </div>
  );
};

export default Cart;
