import React from "react";
import lacRose from "../asserts/lacRose.jpg";
import brasdemer from "../asserts/brasdemer.jpg";
import couchesoleil from "../asserts/couchesoleil.jpg";
import montagne from "../asserts/montagne.jpg";
import unarbre from "../asserts/unarbre.jpg";
import { SelectImage } from "./SelectImage";

export const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid sn:grid-cols-4 lg:grid-cols-5 gap-4">
      <SelectImage bg={lacRose} text="Lac Rose" />
      <SelectImage bg={brasdemer} text="Bras de mer" />
      <SelectImage bg={couchesoleil} text="Couché du soleil" />
      <SelectImage bg={montagne} text="une montagne" />
      <SelectImage bg={unarbre} text="un arbre" />
    </div>
  );
};
