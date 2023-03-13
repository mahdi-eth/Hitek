import React from "react";
import { Link } from "react-router-dom";
import { ContactCard, ContactForm } from "@/components";
import logo from "@/assets/images/logo/logo-white.svg";
import bg from "@/assets/images/bg/background.png";
import email from "@/assets/icons/contactusicons/email.svg";
import call from "@/assets/icons/contactusicons/call.svg";
import support from "@/assets/icons/contactusicons/support.svg";
import { ToastContainer } from "react-toastify";

export const ContactUs = () => {
  return (
    <>
      <ToastContainer />
      <div className="min-w-full relative bg-blue-500">
        <img
          className="absolute top-0 w-full left-auto"
          src={bg}
          alt="background"
        />
        <div className="z-10 w-full absolute top-0 flex flex-col items-center">
          <Link className="self-start mt-8 ml-20 md:ml-40" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="contact-container flex flex-col items-center gap-6 mt-16 md:mt-24 lg:mt-32 mx-4">
            <h1 className="text-white text-center text-4xl sm:text-5xl md:text-6xl">
              Contact with our team
            </h1>
            <p className="text-white text-center hidden sm:block text-lg md:text-xl max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              consectetur adipiscing elit
            </p>
            <ContactForm />
          </div>
          <div className="mt-40 flex flex-col gap-16 xl:flex-row mb-16">
            <ContactCard
              icon={email}
              title="Email us"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              link="mahdi.ettehad85@gmail.com"
              linkText="mahdi.ettehad85@gmail.com"
            />
            <ContactCard
              icon={call}
              title="Call us"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              link="#"
              linkText="+1 (111) 111-1111"
            />
            <ContactCard
              icon={support}
              title="Email us"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              link="#"
              linkText="Support Center"
            />
          </div>
        </div>
      </div>
    </>
  );
};
