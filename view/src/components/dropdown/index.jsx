import { checkPropTypes } from "prop-types";
import { useState, React, useEffect, useRef } from "react";

export const Dropdown = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex border-b-2 border-white hover:border-primary justify-center w-full py-2 text-sm font-medium text-inherit focus:outline-none"
        onClick={toggleDropdown}
        ref={dropdownRef}>
        {value}
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true">
          <path fillRule="evenodd" d="M10 14l6-6H4z" />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-_Gray hover:bg-gray-100 hover:text-gray-900"
              role="menuitem">
              Dropdown 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-_Gray hover:bg-gray-100 hover:text-gray-900"
              role="menuitem">
              Dropdown 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-_Gray hover:bg-gray-100 hover:text-gray-900"
              role="menuitem">
              Dropdown 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
    value: checkPropTypes.string,
  };
  