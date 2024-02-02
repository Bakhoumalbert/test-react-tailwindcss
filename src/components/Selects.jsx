import React from "react";
import lacRose from "../asserts/lacrose_2.jpg";
import couchesoleil from "../asserts/couchesoleil.jpg";
import unarbre from "../asserts/unarbre.jpg";
import { SelectImage } from "./SelectImage";

export const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid sn:grid-cols-4 lg:grid-cols-5 gap-4">
      <SelectImage bg={lacRose} text="Lac Rose" />
      <SelectImage bg="https://www.au-senegal.com/local/cache-gd2/5b/f953839a9a0c1bc1eac0dae9f3ee00.jpg?1687530467" text="Casamance" />
      <SelectImage bg={couchesoleil} text="Couché du soleil" />
      <SelectImage bg="https://media.istockphoto.com/id/1469168828/photo/sunrise-near-goree-island.jpg?s=1024x1024&w=is&k=20&c=zS7MkUtmE_mS_dWi5zM6miuwlnAoCjGv340Qh4EQD1Y=" text="l'Ile de Goréé" />
      <SelectImage bg={unarbre} text="beautifull" />
    </div>
  );
};
