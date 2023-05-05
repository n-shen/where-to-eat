import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { restaurants } from "../pages/Favorite";
import FavoriteList from "../pages/Favorite";

const RoomPage = ({ onCreateRoom }) => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  const handleToggleFavorite = (restaurantId) => {
    const index = selectedRestaurants.findIndex((r) => r.id === restaurantId);
    if (index === -1) {
