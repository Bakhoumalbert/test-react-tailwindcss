import React from "react";
import lacRose from "../asserts/lacRose.jpg";
import brasdemer from "../asserts/brasdemer.jpg";
import couchesoleil from "../asserts/couchesoleil.jpg";
import montagne from "../asserts/montagne.jpg";
import unarbre from "../asserts/unarbre.jpg";
// Ici nous allons importer toutes les images et les afficher sur notre page
export const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-10 px-4 text-center">
      <h1>Mes images </h1>
      <p className="py-4">Admirer mes images</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={brasdemer}
          alt="/"
        />
        <img className="w-full h-full object-cover" src={lacRose} alt="/" />
        <img
          className="w-full h-full object-cover"
          src={couchesoleil}
          alt="/"
        />
        <img className="w-full h-full object-cover" src={montagne} alt="/" />
        <img className="w-full h-full object-cover" src={unarbre} alt="/" />
      </div>
    </div>
  );
};
