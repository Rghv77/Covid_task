import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineNotifications } from "react-icons/md";
import { PiSignInFill } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" w-[90%] absolute left-20 ml-10 mt-10 flex justify-between items-center">
      <div>
        <p className="font-bold text-violet-500 text-3xl">Covid-19</p>
        <p className=" font-thin">Live Tracker DashBoard</p>
      </div>
      <div className="flex justify justify-between items-center">
        <div className=" relative mr-44">
          <input
            type="text"
            id="text"
            placeholder="search"
            name="text"
            className="appearance-none border rounded-l-full rounded-r-full font-gilroy rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
            <IoSearch />
          </div>
        </div>

        <div className="relative inline-block text-left mx-4">
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full w-12 h-12 bg-gray-200 overflow-hidden focus:outline-none"
            >
              <img
                className="w-full h-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1dXcbGQTvqLXLBEQnr3S2ta1flJNUUc6kw&usqp=CAU"
                alt="User"
              />
            </button>
            <button onClick={toggleDropdown}>
              <RiArrowDropDownLine />
            </button>
          </div>
          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Profile
                </div>
                <div
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Settings
                </div>
                <div
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Logout
                </div>
              </div>
            </div>
          )}
        </div>

        <MdOutlineNotifications className="mr-4" />
        <PiSignInFill />
      </div>
    </div>
  );
};

export default Navbar;
