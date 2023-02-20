import { checkPropTypes } from "prop-types";
import React from "react";

export function Checkbox({ value, id }) {
  const number = Math.random();

  return (
    <div className="flex items-center mr-4 my-2">
      <input
        id={"inline-" + value + "-" + id + "-" + number}
        type="checkbox"
        className="w-4 h-4 text-primary border-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={"inline-" + value + "-" + id + "-" + number}
        className="ml-2 px-2 text-sm font-medium text-gray-500 dark:text-gray-300">
        {value}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  value: checkPropTypes.string,
  id: checkPropTypes.number
};
