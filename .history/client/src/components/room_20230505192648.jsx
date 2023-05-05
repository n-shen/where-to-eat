import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { restaurants } from "../pages/Favorite";
// import FavoriteList from "../pages/Favorite";

const RoomPage = ({ onCreateRoom }) => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const navigate = useNavigate();
  const handleToggleFavorite = (id) => {
    const restaurant = restaurants.find((r) => r.id === id);
    if (restaurant) {
      const index = selectedRestaurants.findIndex((r) => r.id === id);
      if (index === -1) {
        setSelectedRestaurants((prevSelected) => [...prevSelected, restaurant]);
      } else {
        setSelectedRestaurants((prevSelected) =>
          prevSelected.filter((r) => r.id !== id)
        );
      }
    }
  };

  const handleCreateRoom = () => {
    // onCreateRoom(selectedRestaurants);
    navigate("/pairSession");
  };

  return (
    <div className="flex flex-col items-start justify-center m-5">
      <h1 className="text-2xl font-bold mb-5 self-center">
        Select from your favorite restaurant list:
      </h1>
      <ul className="flex flex-col items-center justify-center ml-5">
        {restaurants.map((restaurant) => (
          <li
            key={restaurant.id}
            className="flex flex-col items-center justify-center m-3"
          >
            <img
              src={restaurant.image}
              alt={restaurant.alt}
              className="mx-auto bg-black"
            />
            <label
              htmlFor={restaurant.name}
              className="flex items-center justify-center gap-3 text-xl font-bold text-center"
            >
              {restaurant.name}
              <input
                type="checkbox"
                checked={selectedRestaurants.includes(restaurant)}
                onChange={() => handleToggleFavorite(restaurant.id)}
              />
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
  );
};

export default RoomPage;
