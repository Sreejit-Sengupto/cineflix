import React from 'react';
import { TiStarFullOutline } from 'react-icons/ti';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { FaRupeeSign } from 'react-icons/fa';
import Modal from './Modal';
import { useContextData } from '../../Context/ContextProvider';

const MovieCard = ({
  id,
  thumbnail,
  title,
  genre,
  rating,
  price,
  year,
  description,
}) => {
  const [show, setShow] = React.useState(false);

  const openModal = () => {
    setShow(true);
  };

  const { addItem, cartItems } = useContextData();

  const addItemToCart = () => {
    addItem({
      id: id,
      image: thumbnail,
      title: title,
      price: price,
    });
  };

  return (
    <>
      <div className="w-[20rem] bg-[#0A101C] text-white rounded-lg my-2 mx-auto hover:bg-[#1F2937] duration-200 border-[0.5px] border-slate-500">
        <img
          src={thumbnail}
          alt={thumbnail + 'poster'}
          className="w-[20rem] h-[15rem] object-cover rounded-t-md"
        />

        <div className="p-5">
          <p className="text-2xl font-bold">{title}</p>
          <div className="flex items-center text-[#5c5c5c]">
            <p className="text-center">
              {genre}
              <span className="ml-2">•</span>
            </p>
            <p className="mx-3 flex justify-center items-center">
              <TiStarFullOutline />
              {rating}
            </p>
            <p className="flex justify-center items-center">
              {' '}
              <span className="mr-2">•</span> <FaRupeeSign />
              {price}
            </p>
          </div>
        </div>

        <div className="p-5 flex items-center justify-evenly">
          <button
            className={`bg-[#FFD62C] text-black w-[8rem] py-2 flex justify-center items-center rounded-md`}
            onClick={() => {
              addItemToCart();
            }}
          >
            <HiOutlineShoppingCart />
            Add
          </button>
          <button
            className="border border-gray-700 w-[8rem] py-2 rounded-md"
            onClick={openModal}
          >
            View details
          </button>
        </div>
      </div>

      {show && (
        <Modal
          image={thumbnail}
          title={title}
          year={year}
          genre={genre}
          rating={rating}
          price={price}
          description={description}
          addToCart={addItemToCart}
          setShow={setShow}
        />
      )}
    </>
  );
};

export default MovieCard;
