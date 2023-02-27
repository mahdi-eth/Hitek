import { checkPropTypes } from "prop-types";
import React from "react";

export const ContactCard = ({ icon, title, text, link, linkText }) => {
  const contactUsClasses = "flex flex-col items-center ";
  return (
    <div className="container min-w-max text-center">
      <div className="max-w-sm p-6 flex flex-col gap-3 items-center bg-white dark:bg-gray-800 dark:border-gray-700">
        <a
          className={
            link != "#" ? contactUsClasses : contactUsClasses + "cursor-default"
          }
          href={"https://" + link}>
          <img src={icon} alt="contact us icon" />
          <h5 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="font-normal text-gray-500 dark:text-gray-400">{text}</p>
        {link == "#" && (
          <p className="font-normal text-blue-500 dark:text-blue-400">
            {linkText}
          </p>
        )}
        {link != "#" && (
          <a
            href={link == "#" ? "#" : "https://" + link}
            className="inline-flex items-center text-blue-600 hover:underline">
            {linkText}
            <svg
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  icon: checkPropTypes.string,
  title: checkPropTypes.string,
  text: checkPropTypes.string,
  link: checkPropTypes.string,
  linkText: checkPropTypes.string
};
