import React, { useState } from "react";
import { FiMenu, FiMap, FiClipboard, FiLogOut } from "react-icons/fi";

const Home = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", icon: <FiClipboard className="text-white text-xl" /> },
    { title: "Map", icon: <FiMap className="text-white text-xl" /> },
    { title: "Log out", icon: <FiLogOut className="text-white text-xl" />, isLogout: true },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-blue-600 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        {/* Header */}
        <div className="flex items-center">
          <div
            className="w-9 h-9 flex-shrink-0 flex justify-center items-center cursor-pointer hover:bg-blue-300 rounded-md"
            onClick={() => setOpen(!open)}
          >
            <FiMenu className="text-white text-2xl" />
          </div>
          <h1 className={`text-white text-2xl ml-2 ${!open && "scale-0"} duration-300 origin-left`}>App</h1>
        </div>

        {/* Main Menu */}
        <ul className="pt-8">
          {Menus.map((menu, index) => {
            if (!menu.isLogout) {
              return (
                <li
                  key={index}
                  className="pt-3 text-white text-sm flex items-center gap-x-4 p-2 hover:bg-blue-200 rounded-2xl cursor-pointer"
                >
                  <span className="flex-shrink-0">{menu.icon}</span>
                  <span className={`${!open && "scale-0"} duration-300 origin-left whitespace-nowrap`}>
                    {menu.title}
                  </span>
                </li>
              );
            }
            return null;
          })}
        </ul>

        {/* Logout Button - Fixed at bottom */}
        <div className={`absolute bottom-5 left-5 ${open ? "w-[calc(100%-40px)]" : "w-[calc(100%-40px)]"} duration-300`}>
          {Menus.map((menu, index) => {
            if (menu.isLogout) {
              return (
                <li
                  key={index}
                  className="pt-3 text-white text-sm flex items-center gap-x-4 p-2 hover:bg-blue-200 rounded-2xl cursor-pointer"
                >
                  <span className="flex-shrink-0">{menu.icon}</span>
                  <span className={`${!open && "scale-0"} duration-300 origin-left whitespace-nowrap`}>
                    {menu.title}
                  </span>
                </li>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home</h1>
      </div>
    </div>
  );
};

export default Home;