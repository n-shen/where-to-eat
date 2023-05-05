import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Footer } from "../components";
import axios from "axios";

const Favorite = () => {
  const { shared_info, screenSize, userProfile } = useStateContext();
  const baseURL = shared_info.baseURL;

  return (
    <div className={screenSize >= 900 ? "mt-0" : "mt-16"}>
      <div className="flex flex-col justify-center align-center">
        <h1 className="text-2xl font-bold">My Favorite Restaurants</h1>
        <FavoriteList />
        </div>
      <h2 className="text-center font-bold">
        After deletion, all your data will be lost.
      </h2>
      <div className="flex justify-center">
        <button
          type="button"
          className="mt-5 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete My Profile
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Favorite;

export const FavoriteList = () => {
  const [favorites, setFavorites] = useState([
    {
      name: "Restaurant A",
      image: "https://example.com/restaurant-a.jpg",
      alt: "alt",
    },
    {
      name: "Restaurant B",
      image: "https://example.com/restaurant-b.jpg",
      alt: "alt",
    },
    {
      name: "Restaurant C",
      image: "https://example.com/restaurant-c.jpg",
      alt: "alt",
    },
    {
      name: "Restaurant D",
      image: "https://example.com/restaurant-d.jpg",
      alt: "alt",
    },
    {
      name: "Restaurant E",
      image: "https://example.com/restaurant-e.jpg",
      alt: "alt",
    },
  ]);

  return (
    <div className="flex flex-wrap justify-center">
      {favorites.map((favorite, index) => (
        <div
          key={index}
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-2"
        >
          <div className="bg-white rounded-lg shadow-lg">
            <img
              src={favorite.image}
              alt={favorite.alt}
              className="rounded-t-lg w-full"
            />
            <h3 className="font-bold text-center">{favorite.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
