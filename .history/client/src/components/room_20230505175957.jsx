import { useNavigate } from "react-router-dom";
import { FavoriteList } from "../pages/Favorite";
import { useState } from "react";

const RoomPage = ({ favoriteRestaurants, onCreateRoom }) => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  const handleToggleFavorite = (restaurantId) => {
    if (selectedRestaurants.includes(restaurantId)) {
      setSelectedRestaurants(
        selectedRestaurants.filter((id) => id !== restaurantId)
      );
    } else {
      setSelectedRestaurants([...selectedRestaurants, restaurantId]);
    }
  }
