import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Footer } from "../components";
import axios from "axios";

export const restaurants = [
  {
    id: 1,
    name: "Zzamong",
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/6AUVIwPCv8wCZ9FYeCfocw/o.jpg",
    address: ["4255 W 3rd St", "Los Angeles, CA 90004"],
    rating: "4",
  },
  {
    id: 2,
    name: "Panda Express",
    image:
      "https://s3-media4.fl.yelpcdn.com/bphoto/44dT6JEXkhMrtUcps1a5jw/o.jpg",
    address: ["4700 West Pico Blvd.", "SPACE #E", "Los Angeles, CA 90019"],
    rating: "2",
  },
  {
    id: 3,
    name: "Odumak",
    image:
      "https://s3-media1.fl.yelpcdn.com/bphoto/hKaezVO6_0F50RXmfH7WBQ/o.jpg",
    address: ["338 S Western Ave", "Ste D", "Los Angeles, CA 90020"],
    rating: "4",
  },
  {
    id: 4,
    name: "The Ppong",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/Li5i5N_Y7VwLTsJvLA2pKw/o.jpg",
    address: ["4003 Wilshire Blvd", "Los Angeles, CA 90010"],
    rating: "4.5",
  },
  {
    id: 5,
    name: "Plaza Mandarin House",
    image:
      "https://s3-media1.fl.yelpcdn.com/bphoto/1nVrf8ItPD0dF_97JGQEzw/o.jpg",
    address: ["928 S Western Ave", "Ste 147", "Los Angeles, CA 90006"],
    rating: "3.5",
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
            <h2
              htmlFor={restaurant.name}
              className="text-xl font-bold text-center"
            >
              {restaurant.name}
            </h2>
            <p>{restaurant.address}</p>
            <p>{restaurant.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
