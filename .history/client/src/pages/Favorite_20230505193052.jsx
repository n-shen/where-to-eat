import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Footer } from "../components";
import axios from "axios";

export const restaurants = [
  {
    name: "Restaurant A",
    image: "https://zzamong-restaurant.appspot.com.storage.googleapis.com/bg-noodles.webp",
    id: 1,
  },
  {
    name: "Restaurant B",
    image: "https://example.com/restaurant-b.jpg",
    id: 2,
  },
  {
    name: "Restaurant C",
    image: "https://example.com/restaurant-c.jpg",
    id: 3,
  },
  {
    name: "Restaurant D",
    image: "https://example.com/restaurant-d.jpg",
    id: 4,
  },
  {
    name: "Restaurant E",
    image: "https://example.com/restaurant-e.jpg",
    id: 5,
  },
];

const Favorite = () => {
  const { shared_info, screenSize, userProfile } = useStateContext();
  const baseURL = shared_info.baseURL;

  return (
    <div className={screenSize >= 900 ? "mt-0" : "mt-16"}>
      <h1 className="text-center font-bold text-2xl mb-5">
        Favorite Restaurants
      </h1>
      <FavoriteList />
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
  return (
    <div className="flex flex-col items-center justify-center">
      <ul className="flex flex-wrap justify-center">
        {restaurants.map((restaurant, index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-center m-5"
          >
            <img
              src={restaurant.image}
              alt={restaurant.alt}
              className="mx-auto bg-black"
            />
            <h2
              htmlFor={restaurant.name}
              className="text-xl font-bold text-center"
            >
              {restaurant.name}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
};
