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
      <h1 className="text-2xl font-bold mb-5">Select your favorite restaurants</h1>
      <div className="flex flex-wrap justify-center">



}

export default Room;