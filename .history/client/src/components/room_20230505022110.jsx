import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FavoriteList } from "../pages/Favorite";

const RoomPage = () => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  const handleSelectRestaurant = (restaurant) => {
    const index = selectedRestaurants.findIndex((r) => r.name === restaurant.name);
    if (index === -1) {
      setSelectedRestaurants([...selectedRestaurants, restaurant]);
    } else {
      const newSelectedRestaurants = [...selectedRestaurants];
      newSelectedRestaurants.splice(index, 1);
      setSelectedRestaurants(newSelectedRestaurants);
    }
  }

  const navigate = useNavigate();
  const handleStartPairingSession = () => {
    navigate("/pairing-session", { state: { selectedRestaurants } });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-5">Choose the restaurants that you want to include in the pairing session.</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center">
          {FavoriteList.map((restaurant) => (
            <div key={restaurant.name} className="flex flex-col items-center justify-center m-2">
              <img src={restaurant.image} alt={restaurant.name} className="w-40 h-40 object-cover rounded-full" />
              <button
                type="button"
                className={`mt-5 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ${restaurant.isFavorite ? "bg-red-700" : "bg-gray-300"}`}
                onClick={() => handleSelectRestaurant(restaurant)}
              >
                {restaurant.isFavorite ? "Remove" : "Add"}
              </button>
            </div>
          ))}
        </div>
        <button



}

export default Room;