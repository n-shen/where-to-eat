import { useNavigate } from "react-router-dom";
import { FavoriteList } from "../pages/Favorite";
import { useState } from "react";

const RoomPage = ({ favoriteRestaurants, onCreateRoom }) => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  const handleToggleFavorite = (restaurantId) => {
    const index = selectedRestaurants.findIndex((r) => r.id === restaurantId);
    if (index === -1) {
      const newSelectedRestaurants = [...selectedRestaurants, favoriteRestaurants.find((r) => r.id === restaurantId)];
      setSelectedRestaurants(newSelectedRestaurants);
    } else {
      const newSelectedRestaurants = [...selectedRestaurants];
      newSelectedRestaurants.splice(index, 1);
      setSelectedRestaurants(newSelectedRestaurants);
    }
  };

  const navigate = useNavigate();

  const handleCreateRoom = () => {
    onCreateRoom(selectedRestaurants);
    navigate("/room");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-5">
      Select Favorite Restaurants
      </h1>
      <ul className="flex flex-col items-center justify-center">
        {favoriteRestaurants.map((restaurant, index) => (
