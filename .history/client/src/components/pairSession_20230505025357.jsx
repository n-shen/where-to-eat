// When the user clicks on the "Start Pairing Session" button, the app should navigate to a this page that shows the user's selected favorite restaurants.
import React from "react";

const PairSession = ({ selectedRestaurants }) => {
const handleFilterResults = () => {
    // TODO: Navigate to the survey or game page
}

return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-2xl font-bold mb-5">Here are the restaurants that you selected:</h1>
    <div className="flex flex-col items-center justify-center">
        <ul className="flex flex-wrap justify-center">
        {selectedRestaurants.map((restaurant, index) => (
            <li key={index} className="flex flex-col items-center justify-center m-5">
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
                <input type="checkbox" checked={true} disabled={true} />
            </label>
            </li>
        ))}
        </ul>

        <button
        type="button"
        className="mt-5 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={handleFilterResults}
        >
        Filter Results
        </button>
    </div>
    </div>
);
}

export default PairSession;