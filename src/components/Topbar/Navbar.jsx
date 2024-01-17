import React from 'react';
import { MdEmergencyRecording } from 'react-icons/md';
import { AiOutlineBell } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import Cart from './../Cart/Cart';

const Navbar = () => {
  return (
    <div className="bg-[#111827] text-white flex items-center justify-between px-6 py-5 sticky top-0 left-0">
      <p className="flex justify-center items-center">
        <MdEmergencyRecording color="#FFD62C" size={'1.2em'} />{' '}
        <span className="ml-1">CineFlix</span>
      </p>

      <div className="flex justify-center items-center">
        <AiOutlineBell size={'1.5em'} color="#606775" />
        <Cart />
        <CgProfile size={'1.5em'} color="#606775" />
      </div>
    </div>
  );
};

export default Navbar;
