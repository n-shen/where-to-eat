import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Footer } from "../components";
import axios from "axios";

const Favorite = () => {
  const { shared_info, screenSize, userProfile } = useStateContext();
  const baseURL = shared_info.baseURL;

  return (
    <div className={screenSize >= 900 ? "mt-0" : "mt-16"}>
      <h1 className="text-center font-bold text-2xl mb-5">My Favorites</h1>
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

export const FavoriteList = ({onToggleFavorite}) => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([
    {
      name: "Restaurant A",
      image: "https://example.com/restaurant-a.jpg",
    },
    {
      name: "Restaurant B",
      image: "https://example.com/restaurant-b.jpg",
    },
    {
      name: "Restaurant C",
      image: "https://example.com/restaurant-c.jpg",
    },
    {
      name: "Restaurant D",
      image: "https://example.com/restaurant-d.jpg",
    },
    {
      name: "Restaurant E",
      image: "https://example.com/restaurant-e.jpg",
    },
  ]);

  const handleToggleFavorite = (index) => {
    onToggleFavorite(index);
  };

  const handleSelectRestaurant = (restaurant) => {
    const index = selectedRestaurants.findIndex((r) => r.name === restaurant.name);
    if (index === -1) {
      setSelectedRestaurants([...selectedRestaurants, restaurant]);
    } else {
      const newSelectedRestaurants = [...selectedRestaurants];
      newSelectedRestaurants.splice(index, 1);
      setSelectedRestaurants(newSelectedRestaurants);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center font-bold text-2xl mb-5">Favorite Restaurants</h2>
      <ul className="flex flex-wrap justify-center">
        {restaurants.map((restaurant, index) => (
          <li key={index} className="flex flex-col items-center justify-center m-5">
            <img src={restaurant.image} alt={restaurant.name} className="mx-auto bg-black" />
            <label htmlFor={restaurant.name} className="text-xl font-bold text-center">
              {restaurant.name}
              <input

  )
