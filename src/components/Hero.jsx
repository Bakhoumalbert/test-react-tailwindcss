import React from "react";
import beach from "../asserts/laplage.mp4";
import { AiOutlineSearch } from "react-icons/ai";

export const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beach}
        // activons les parametres pour faire jouer la video
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1>Decouverte</h1>
        <h2 className="py-4">Affiche des plus belles images d'Afrique</h2>
        <form className="flex justify-between max-w[700px] text-white p-4 rounded-md text-black bg-gray-100/90">
          <div>
            <input
              className="bg-transparent w-[300px] sn:w-[400px] font-[Poppins] focus:outline-none"
              type="text"
              placeholder="Rechercher une image"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#fffff" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
