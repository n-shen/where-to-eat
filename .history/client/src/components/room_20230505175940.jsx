import { useNavigate } from "react-router-dom";
import { FavoriteList } from "../pages/Favorite";
import { useState } from "react";

const RoomPage = ({ favoriteRestaurants, onCreateRoom }) => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);


