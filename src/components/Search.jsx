import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

export const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>Description des images</h2>
          <p className="py-4">
            Il s’agit une photo prise un jour d’été dans un parc. Au premier
            plan, nous voyons une scène de famille où 3 enfants jouent à faire
            une bataille d’eau avec leur père. Les enfants portent un maillot de
            bain, le père est habillé et porte des lunettes de soleil. C’est
            probablement les vacances, il faut chaud et ils veulent s’amuser.
            Ils sourient tous. Le père est la cible des enfants qui lancent des
            seaux d’eau sur lui. A l’arrière-plan, d’autres personnes en maillot
            de bain se trouvent dans le parc.
          </p>
        </div>
        <div className="grid sn: grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">Service</h3>
              <p className="py-1">Contacter-moi en cas de besion</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">Service</h3>
              <p className="py-1">Contacter-moi en cas de besion</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center">
          <p>Voulez-vous prendre rendez-vous ?</p>
          <p className="bg-gray-800 text-gray-200 py-2">Rendez-vous</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Dakar</option>
              <option>Mbour</option>
              <option>Fatick</option>
              <option>Diamniadio</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label>Debut</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Fin</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4">Validation</button>
        </form>
      </div>
    </div>
  );
};
