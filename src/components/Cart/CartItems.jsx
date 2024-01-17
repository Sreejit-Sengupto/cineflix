import React from 'react';
import { useContextData } from '../../Context/ContextProvider';
import { CartItemCard } from './CartItemCard';
import { FaRupeeSign } from 'react-icons/fa';

const CartItems = ({ setShowCart }) => {
  const { cartItems, totalPrice } = useContextData();

  return (
    <div className="w-[15rem] lg:w-[20rem] h-[30rem] bg-[#1F2937] absolute top-12 right-12 rounded-md flex flex-col">
      {/* Map over the items in the cart and display them */}
      <div className="overflow-auto">
        {cartItems?.length > 0 ? (
          cartItems.map((item, index) => {
            return (
              <CartItemCard
                image={item.image}
                title={item.title}
                price={item.price}
                itemId={item.id}
                key={index}
              />
            );
          })
        ) : (
          <p className="text-slate-600 text-center mt-7 text-xl">No items</p>
        )}
      </div>

      <div className="mt-auto">
        <div className="w-[80%] flex justify-between items-center text-sm mx-auto text-gray-500">
          <div className="w-[50%] flex flex-col items-start justify-center">
            <p>Number of movies</p>
            <p className="text-base font-bold">{cartItems?.length}</p>
          </div>
          <div className="w-[50%] flex flex-col items-end justify-center">
            <p>Total Cost</p>
            <p className="flex items-center text-white font-bold text-base">
              <FaRupeeSign />
              {totalPrice}
            </p>
          </div>
        </div>

        <div className="w-[80%] mx-auto text-black mb-6">
          <button className="bg-[#FFD62C] w-full py-3">Checkout</button>
          <button
            className="border border-slate-600 w-full py-3 mt-4 text-white"
            onClick={() => setShowCart(false)}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
