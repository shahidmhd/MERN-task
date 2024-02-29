import React from 'react';

function Sidebar() {
  return (
    <>
      <aside
        className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-[#111b29] sticky top-0 h-screen flex flex-col"
      >
        <div className="sidebar-header flex items-center justify-center py-4">
          <div className="inline-flex">
            <a href="#" className=" items-center">
              <img src="Assets/Briefcase.svg" alt="" srcset="" />
              <span className="leading-10 text-gray-100 font-bold uppercase">statboard</span>
            </a>
          </div>
        </div>
        <div className="sidebar-content px-4 py-6 flex-grow">
          <ul className="flex flex-col w-full">

            <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <img src="Assets/Circled Menu.svg" alt="" srcset="" />
                </span>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <img src="Assets/Support.svg" alt="" srcset="" />
                </span>
                <span className="ml-3">support</span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <img src="Assets/Puzzle.svg" alt="" srcset="" />
                </span>
                <span className="ml-3">plugins</span>

              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-green-400">
                  <img src="Assets/Help.svg" alt="" srcset="" />
                </span>
                <span className="ml-3">Help</span>
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex items-center justify-center bg-white">
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-red-500"
            >
              <span>Logout</span>
              <span className="flex items-center justify-center text-lg ml-3 text-red-400">
                <img src="Assets/Shutdown.svg" alt="" />
              </span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
