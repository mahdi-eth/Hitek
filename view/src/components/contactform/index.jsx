import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  company: Yup.string().required("Company name is required"),
  country: Yup.string().required("Country is required"),
  message: Yup.string().required("message is required")
});

const countries = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  { code: "AF", name: "Afghanistan" },
  { code: "AX", name: "Åland Islands" },
  { code: "AL", name: "Albania" },
  { code: "DZ", name: "Algeria" },
  { code: "AS", name: "American Samoa" },
  { code: "AD", name: "Andorra" },
  { code: "AO", name: "Angola" },
  { code: "AI", name: "Anguilla" },
  { code: "AQ", name: "Antarctica" },
  { code: "AG", name: "Antigua and Barbuda" },
  { code: "AR", name: "Argentina" },
  { code: "AM", name: "Armenia" },
  { code: "AW", name: "Aruba" },
  { code: "AU", name: "Australia" },
  { code: "AT", name: "Austria" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "BS", name: "Bahamas" },
  { code: "BH", name: "Bahrain" },
  { code: "BD", name: "Bangladesh" },
  { code: "BB", name: "Barbados" },
  { code: "BY", name: "Belarus" },
  { code: "BE", name: "Belgium" },
  { code: "BZ", name: "Belize" },
  { code: "BJ", name: "Benin" },
  { code: "BM", name: "Bermuda" },
  { code: "BT", name: "Bhutan" },
  { code: "BO", name: "Bolivia (Plurinational State of)" },
  { code: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "BW", name: "Botswana" },
  { code: "BV", name: "Bouvet Island" },
  { code: "BR", name: "Brazil" },
  { code: "IO", name: "British Indian Ocean Territory" },
  { code: "BN", name: "Brunei Darussalam" },
  { code: "BG", name: "Bulgaria" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "CV", name: "Cabo Verde" },
  { code: "KH", name: "Cambodia" },
  { code: "CM", name: "Cameroon" },
  { code: "CA", name: "Canada" },
  { code: "KY", name: "Cayman Islands" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "CL", name: "Chile" },
  { code: "CN", name: "China" },
  { code: "CX", name: "Christmas Island" },
  { code: "CC", name: "Cocos (Keeling) Islands" }
];

export const ContactForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="mt-8 max-w-4xl bg-white p-16 rounded-lg shadow-sm"
      onSubmit={handleSubmit(onSubmit)}>
      {/* Row 1 */}
      <div className="mb-4 w-full flex gap-7 justify-between">
        <div className="flex flex-col justify-start w-1/2">
          <label htmlFor="name" className="self-start mb-2 opacity-75">
            Your name*
          </label>
          <input
            placeholder="Julia William"
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus-visible:outline-primary"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1 text-left">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col justify-start w-1/2">
          <label htmlFor="email" className="self-start mb-2 opacity-75">
            Contact email *
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            id="email"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus-visible:outline-primary"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 text-left">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 2 */}
      <div className="mb-4 w-full flex gap-7 justify-between">
        <div className="flex flex-col justify-start w-1/2">
          <label htmlFor="company" className="self-start mb-2 opacity-75">
            Company name*
          </label>
          <input
            type="text"
            id="company"
            placeholder="Company name"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus-visible:outline-primary"
            {...register("company")}
          />
          {errors.company && (
            <p className="text-red-500 text-sm mt-1 text-left">
              Please select a country.
            </p>
          )}
        </div>
        <div className="flex flex-col justify-start w-1/2">
          <label htmlFor="country" className="self-start mb-2 opacity-75">
            Country*
          </label>
          <div className="relative">
            <select
              value={selectedCountry}
              {...register("country", { required: true })}
              onChange={handleChange}
              id="country"
              autoComplete="none"
              className="block w-full py-2.5 pl-3 pr-10 leading-5 text-gray-900 bg-white border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="mb-4 text-left">
        <label htmlFor="message" className="w-full mb-2 block opacity-75">
          Your message*
        </label>
        <textarea
          placeholder="Type your message…."
          id="message"
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus-visible:outline-primary min-h-140 max-h-140"
          {...register("message")}
          rows={5}></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1 text-left">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Row 4 */}
      <div className="mb-4">
        <p className="text-left opacity-75">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      {/* Row 5 */}
      <div className="mt-4 text-left">
        <button
          type="submit"
          className="bg-primary self-start text-white px-10 py-3 border-gray-200 rounded-lg focus-visible:outline-primary hover:bg-primary_hover">
          Send text
        </button>
      </div>
    </form>
  );
};
