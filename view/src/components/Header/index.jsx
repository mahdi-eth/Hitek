import React from "react";
import logo from "@/assets/images/logo/logo.svg";
import SignUpButton from "../SingUpButton";

export function Header() {
  return (
    <>
    <div className="flex justify-center gap-10 my-4 mx-auto">
      <div className="mr-48">
        <img src={logo} alt="" />
      </div>
      <ul className="flex justify-around items-center gap-14">
        <li>home</li>
        <li>
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true">
                iPhones
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className="hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1">
              <div className="py-1" role="none">
                <a
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0">
                  Account settings
                </a>
                <a
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1">
                  Support
                </a>
                <a
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2">
                  License
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-3">
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </li>
        <li>
          {" "}
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true">
                Phones
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className="hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1">
              <div className="py-1" role="none">
                <a
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0">
                  Account settings
                </a>
                <a
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1">
                  Support
                </a>
                <a
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2">
                  License
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-3">
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </li>
        <li>
        <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true">
          Tablets
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className="hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1">
              <div className="py-1" role="none">
                <a
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0">
                  Account settings
                </a>
                <a
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1">
                  Support
                </a>
                <a
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2">
                  License
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-3">
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </li>
        <li>     <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true">
            MacBoocks
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className="hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1">
              <div className="py-1" role="none">
                <a
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0">
                  Account settings
                </a>
                <a
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1">
                  Support
                </a>
                <a
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2">
                  License
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-3">
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div></li>
        <SignUpButton />
      </ul>
    </div>
    <hr />
    </>

  );
}
