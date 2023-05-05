import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { restaurants } from "../pages/Favorite";
import FavoriteList from "../pages/Favorite";

const RoomPage = () => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const navigate = useNavigate();

  const toggleSelectedFavorite = (favorite) => {
    const index = selectedFavourites.findIndex(
      (selected) => selected.id === favourite.id
    );

    if (index === -1) {
      setSelectedRestaurants([...selectedRestaurants, favourite]);
    }

  }
