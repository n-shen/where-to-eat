import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { restaurants } from "../pages/Favorite";
// import FavoriteList from "../pages/Favorite";

const RoomPage = ({ onCreateRoom }) => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  const handleToggleFavorite = (id) => {
    if (selectedRestaurants.some((r) => r.id === id)) {
      setSelectedRestaurants(selectedRestaurants.filter((r) => r.id !== id));
    } else {
      setSelectedRestaurants([
        ...selectedRestaurants,
        restaurants.find((r) => r.id === id),
      ]);
    }
  };

  const handleCreateRoom = () => {
    onCreateRoom(selectedRestaurants);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-5">
        Select your favorite restaurants:
      </h1>
      <div className="flex flex-col items-center justify-center">
        <ul className="flex flex-wrap justify-center">
          {restaurants.map((restaurant, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-center m-5"
            >
              <img
                src={restaurant.image}
                alt={restaurant.alt}
                className="mx-auto bg-black"
              />
              <label
                htmlFor={restaurant.name}
                className="text-xl font-bold text-center"
              >
                {restaurant.name}
                <input type="checkbox"
                checked={selectedRestaurants.some((r) => r.id === restaurant.id)}
                onChange={() => handleToggleFavorite(restaurant.id)}/>
              </label>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="mt-5 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={handleCreateRoom}
        >
          Create Room
        </button>
      </div>
    </div>
  );
};

export default RoomPage;