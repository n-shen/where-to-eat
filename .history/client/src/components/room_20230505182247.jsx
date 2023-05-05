import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { restaurants } from "../pages/Favorite";
import FavoriteList from "../pages/Favorite";

const RoomPage = () => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const navigate = useNavigate();

  const toggleSelectedFavourite = (restaurants) => {
    if (selectedRestaurants.includes(restaurants)) {
      setSelectedRestaurants(
        selectedRestaurants.filter((restaurant) => restaurant !== restaurants)
      );
    } else {
      setSelectedRestaurants([...selectedRestaurants, restaurants]);
    }
  }
