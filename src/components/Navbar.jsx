import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setlogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setlogo(!logo);
  };
  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          PLAGE.
        </h1>
      </div>
      {/*hidden md:flex veut dire si ca depasse la point de rupture moyen alors flex 
      cela va permettre de ne pas afficher l'ecran comme une app mobile
      */}
      <ul className="hidden md:flex">
        {/*On va appliquer un style global pour chaque element de la liste */}
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>views</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-2" size={20} />
        <BsPerson size={20} />
      </div>
      {/*md:hidden veut dire lorsqu'on diminue la taille de la fenetre notre liste sera dans la liste deroulante*/}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>
      {/* Creation de la liste deroulante*/}
      {/*  bg-gray-100/90 permet de voir à travers la couleur de font et plus il sera elever plus il sera dense*/}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100/90 p-x4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <div>
            <h1>PLAGE.</h1>
          </div>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">views</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-6">Rechercher</button>
            <button>Compte</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};
