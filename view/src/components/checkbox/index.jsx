import { PropTypes } from "prop-types";
import React from "react";

export function Checkbox({ value, id, onChange }) {
  const number = Math.random();

  return (
    <div className="flex items-center mr-2 my-2">
      <input
        id={"inline-" + value + "-" + id + "-" + number}
        type="checkbox"
        value={value}
        className="w-4 h-4 text-primary border-gray-100 rounded focus:ring-blue-500 "
        onChange={onChange}
      />
      <label
        htmlFor={"inline-" + value + "-" + id + "-" + number}
        className="px-2 text-sm font-medium text-gray-500 ">
        {value}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  value: PropTypes.string,
  id: PropTypes.number,
  onChange: PropTypes.func
};
