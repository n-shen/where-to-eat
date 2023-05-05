import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { restaurants } from "../pages/Favorite";
import FavoriteList from "../pages/Favorite";

const RoomPage = () => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const navigate = useNavigate();

  const toggleSelectedFavorite = (favorite) => {
    const index = selectedFavorites.findIndex(
      (selected) => selected.id === favorite.id
    );

    if (index === -1) {
      setSelectedRestaurants([...selectedRestaurants, favorite]);
    } else {
      const newSelectedFavourites = [...selectedFavorites];
      newSelectedFavorites.splice(index, 1);
      setSelectedFavorites(newSelectedFavorites);
    }

  }
