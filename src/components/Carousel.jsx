import React, { useState } from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://media.istockphoto.com/id/157313406/fr/photo/libye.jpg?b=1&s=170667a&w=0&k=20&c=6UT3ypex_Y89bQmzU4vDuplFrigYyGUUDXW-6LQeyvM=",
  },
  {
    url: "https://media.istockphoto.com/id/1131949134/fr/photo/%C3%A9l%C3%A9phant-africain-sauvage-dans-la-savane-parc-national-du-serengeti-faune-de-la-tanzanie.jpg?b=1&s=170667a&w=0&k=20&c=TYPE6mmja9L_YyVElM7eLs9PuN77ysrmMVWIXfZLWsE=",
  },
  {
    url: "https://media.istockphoto.com/id/1140829787/fr/photo/coucher-du-soleil-aux-plaines-de-savane.jpg?b=1&s=170667a&w=0&k=20&c=FERHV-ZYTmHz8e_YI0DJuWmIieALtGoHGb0zHp8w5YM=",
  },
];

export const Carousel = (props) => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;
  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
      />
      {sliderData.map((items, index) => (
        <div className={index === slide ? "opacity-100" : "opacity-0"}>
          {index === slide && (
            <img className="w-full rounded-md" src={items.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};
