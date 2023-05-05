// When the user clicks on the "Start Pairing Session" button, the app should navigate to a this page that shows the user's selected favorite restaurants.
import React from "react";

const PairSession = ({ selectedRestaurants }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-5">Pair Session</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center">
          {selectedRestaurants.map((restaurant) => (
            <div className="flex flex-col items-center justify-center m-5">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-64 h-64 object-cover rounded-lg"
              />
              <div className="text-center font-bold text-xl">{restaurant.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PairSession;