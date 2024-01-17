import React from 'react';
import { TiStarFullOutline } from 'react-icons/ti';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { FaRupeeSign } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Modal = ({
  image,
  title,
  year,
  genre,
  rating,
  price,
  description,
  setShow,
  addToCart,
}) => {
  const closeModal = () => {
    setShow(false);
  };

  // To disable background scroll when the modal is opened
  React.useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => (document.body.style.overflowY = 'scroll');
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#ffffff3c] backdrop:blur-md"></div>
      <div className="bg-[#1F2937] w-[95%] md:w-[80%] lg:w-[50%] h-[85%] lg:h-[40rem] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded text-white border-[0.5px] border-gray-500 text-sm lg:text-base overflow-y-auto">
        <button className="block ml-auto mr-4 mt-4" onClick={closeModal}>
          <IoClose size={'1.5em'} />
        </button>

        <div className="w-full lg:w-[80%] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-start">
          <div className="w-[50%] mr-[-6%]">
            <img
              src={image}
              alt={image + 'poster'}
              className="w-[80%] lg:h-[80%] object-cover"
            />
            <button
              className="bg-[#FFD62C] text-black w-[80%] flex justify-center items-center mt-3 py-3 rounded font-medium"
              onClick={addToCart}
            >
              <HiOutlineShoppingCart />
              <span>Add to cart</span>
            </button>
          </div>

          <div className="w-[50%] flex flex-col justify-center items-start">
            <p className="text-2xl font-bold mb-3">{title}</p>
            <p className="text-base text-gray-400 mb-3">{year}</p>
            <div className="flex items-center text-gray-400">
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
                <span className="mr-2 text-white">•</span> <FaRupeeSign />
                {price}
              </p>
            </div>

            <div className="w-full h-[1px] bg-gray-600 my-4"></div>
            <p className="text-gray-400 overflow-y-auto">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
