import React from 'react';
import { IoClose } from 'react-icons/io5';
import { FaRupeeSign } from 'react-icons/fa';
import { useContextData } from '../../Context/ContextProvider';

export const CartItemCard = ({ image, itemId, title, price }) => {
  const { delItem } = useContextData();

  return (
    <>
      <div className="w-[80%] flex justify-center items-center mx-auto my-2">
        <div className="w-[20%]">
          <img src={image} alt={image + 'poster'} className="w-10 rounded-sm" />
        </div>

        <div className="w-[80%] flex justify-center items-center text-sm">
          <div className="mr-auto">
            <p>{title}</p>
            <p className="text-slate-500 flex items-center">
              <FaRupeeSign />
              {price}
            </p>
          </div>
          <button
            className="ml-auto"
            onClick={() => {
              delItem(itemId);
            }}
          >
            <IoClose />
          </button>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-slate-700"></div>
    </>
  );
};
