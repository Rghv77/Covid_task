import React from "react";
import { MdWindow } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { GiSoapExperiment } from "react-icons/gi";
import { RiMessage2Fill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex h-screen border ">
      <div className="w-20 bg-blue-900 rounded-t-full rounded-b-full">
        <div className="flex p-4 items-center justify-center">
          <ul className="">
            <li>
              <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 block rounded">
                <MdDarkMode />
              </div>
            </li>
            <li>
              <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 block rounded">
                <MdWindow />
              </div>
            </li>
            <li>
              <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 block rounded">
                <FaGlobe />
              </div>
            </li>
            <li>
              <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 block rounded">
                <GiSoapExperiment />
              </div>
            </li>
            <li>
              <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 block rounded">
                <RiMessage2Fill />
              </div>
            </li>
            <li className="mt-96">
              <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 block rounded">
                <IoSettings />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
