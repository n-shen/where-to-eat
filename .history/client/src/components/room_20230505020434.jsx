import React from "react";
import { FavoriteList } from "../pages/Favorite";

const RoomPage = () => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  function handleSelectRestaurant(restaurant) {
    setSelectedRestaurants([...selectedRestaurants, restaurant]);
  }
  

}

export default Room;