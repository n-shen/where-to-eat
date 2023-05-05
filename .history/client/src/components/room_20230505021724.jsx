import React from "react";
import { FavoriteList } from "../pages/Favorite";

const RoomPage = () => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  const handleSelectRestaurant = (restaurant) => {
    const index = selectedRestaurants.findIndex((r) => r.name === restaurant.name);
    if (index === -1) {
      setSelectedRestaurants([...selectedRestaurants, restaurant]);
    } else
  }


}

export default Room;