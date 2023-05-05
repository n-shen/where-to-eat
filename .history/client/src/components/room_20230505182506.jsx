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
  };

  const handleStartPairingSession = () => {
    navigate("/pair-session", { state: { selectedRestaurants } });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-5">
        Here are the restaurants that you selected: