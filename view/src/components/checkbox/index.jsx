import { checkPropTypes } from "prop-types";
import React from "react";

export function Checkbox({ value, id }) {
  return (
    <div className="flex items-center mr-4">
      <input
        id={"inline-" + value + "-" + id}
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={"inline-" + value + "-" + id}
        className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300">
        {value}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  value: checkPropTypes.string,
  id: checkPropTypes.number
};
