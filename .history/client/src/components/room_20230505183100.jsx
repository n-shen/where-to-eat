import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { restaurants } from "../pages/Favorite";
import FavoriteList from "../pages/Favorite";

const RoomPage = ({ onCreateRoom }) => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);