import React from "react";

//ICONS
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdMic } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { BiVideoPlus } from "react-icons/bi";

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
        <div className="flex items-center h-full">
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search"
            className="px-4 py-2 rounded-l-full h-f w-[515px] bg-transparent border border-gray-600 outline-none focus:border-blue-500"
          />
          <button className="bg-zinc-800 rounded-r-full h-full border-r border-t border-b border-gray-600 py-2 px-3">
            <CiSearch className="text-2xl" />
          </button>
          <div className="flex gap-3 h-full ml-3">
            <button className="bg-zinc-800 rounded-full p-2 hover:bg-zinc-700 transition">
              <MdMic className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button>
            <RiVideoAddLine className="text-2xl" />
          </button>
          <button className="relative">
            <IoMdNotificationsOutline className="text-2xl" />
            <span className="absolute top-0 right-0 bg-red-600 rounded-full text-white w-3 h-3 text-[10px] flex items-center justify-center font-semibold">
              5
            </span>
          </button>
          <button>
            <img
              src="https://placehold.co/32x32"
              alt="profile"
              className="rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
