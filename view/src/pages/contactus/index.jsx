import React from "react";
import { Link } from "react-router-dom";
import { ContactCard, ContactForm } from "../../components";
import logo from "../../assets/images/logo/logo-white.svg";
import bg from "../../assets/images/bg/background.png";
import email from "../../assets/icons/contactusicons/email.svg";
import call from "../../assets/icons/contactusicons/call.svg";
import support from "../../assets/icons/contactusicons/support.svg";

export const ContactUs = () => {
  return (
    <div className="min-w-full relative">
      <img className="absolute top-0 w-full left-auto" src={bg} alt="background" />
      <div className="z-10 w-full absolute top-0 flex flex-col items-center">
        <Link className="self-start md:mt-8 md:ml-40" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="contact-container text-center flex flex-col gap-6 mt-32">
          <h1 className="text-white text-6xl">Contact with our team</h1>
          <p className="text-white text-xl max-w-3xl">
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
  );
};
