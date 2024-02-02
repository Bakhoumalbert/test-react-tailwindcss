import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

export const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>SENETOUR</h2>
          <p className="py-4">
            Le Sénégal, joyau de l'Afrique de l'Ouest, séduit les voyageurs du monde entier par sa richesse culturelle, sa diversité naturelle et son hospitalité chaleureuse. Le tourisme au Sénégal offre une expérience unique, mêlant traditions séculaires, sites historiques, plages paradisiaques et une vie sauvage exceptionnelle.
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
