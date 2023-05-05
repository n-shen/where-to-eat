import { useNavigate } from "react-router-dom";
import { FavoriteList } from "../pages/Favorite";
import { useState } from "react";

const RoomPage = ({ favoriteRestaurants, onCreateRoom }) => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  const handleToggleFavorite = (restaurantId) => {
    const index = selectedRestaurants.findIndex((r) => r.id === restaurantId);
    if (index === -1) {
