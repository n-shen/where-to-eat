import { useNavigate } from "react-router-dom";
import { FavoriteList } from "../pages/Favorite";
import { useState } from "react";

const RoomPage = ({ favoriteRestaurants, onCreateRoom }) => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  const handleToggleFavorite = (restaurantId) => {
    const index = selectedRestaurants.findIndex((r) => r.id === restaurantId);
    if (index === -1) {
      const restaurant = favoriteRestaurants.find((r) => r.id === restaurantId);
      setSelectedRestaurants([...selectedRestaurants, restaurant]);
    } else {
      const newSelectedRestaurants = [...selectedRestaurants];
      newSelectedRestaurants.splice(index, 1);
      setSelectedRestaurants(newSelectedRestaurants);
    }
