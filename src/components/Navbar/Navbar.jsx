import React from "react";

//ICONS
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-black text-white border-b-2">
      <div className="px-4 py-2 flex justify-between">
        <div className="flex items-center space-x-3">
          <button className="text-white">
            <RxHamburgerMenu className="text-2xl" />
          </button>
          <div className="flex items-center relative p-2">
            <FaYoutube className="text-2xl text-red-500" />
            <p className="text-2xl font-semibold">Diatube</p>
            <span className="absolute top-0 right-0 text-[10px] text-gray-300">
              TH
            </span>
          </div>
        </div>
        <div className="">
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search"
            className="px-4 py-2 rounded-full w-[515px]"
          />
        </div>
        <div className="flex">
          <p>X</p>
          <p>X</p>
          <p>X</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
