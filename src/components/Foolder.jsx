import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export const Foolder = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sn:flex text-center justify-between items-center">
          <h1>PLAGE.</h1>
        </div>
        <div className="flex justify-between w-full sn:max-w-[200px] my-4">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaYoutube className="icon" />
        </div>
      </div>
      <div className="flex justify-between">
        <ul className="lg:flex">
          <li>About</li>
          <li>Partnerships</li>
          <li>careers</li>
          <li>Advertising</li>
          <li></li>
        </ul>
        <ul className="text-right lg:flex">
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>views</li>
          <li>Book</li>
        </ul>
      </div>
    </div>
  );
};
