import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Footer } from "../components";
import axios from "axios";

const favoriteRestaurants = [
    { name: 'Restaurant A', image: 'https://example.com/restaurant-a.jpg', isFavorite: true },
    { name: 'Restaurant B', image: 'https://example.com/restaurant-b.jpg', isFavorite: true },
    { name: 'Restaurant C', image: 'https://example.com/restaurant-c.jpg', isFavorite: true },
    { name: 'Restaurant D', image: 'https://example.com/restaurant-d.jpg', isFavorite: true },
    { name: 'Restaurant E', image: 'https://example.com/restaurant-e.jpg', isFavorite: true },
]

const Favorite = () => {
    const { shared_info, screenSize, userProfile } = useStateContext();
    const baseURL = shared_info.baseURL;

    const [favourites, setFavourites] = useState(favoriteRestaurants);

    return (
        <div className={screenSize >= 900 ? "mt-0" : "mt-16"}>
            <h2 className="text-center font-bold">
                After deletion, all your data will be lost.
            </h2>
            <div className="flex justify-center">
                <button
                    type="button"
                    className="mt-5 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                    Delete My Profile
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default Favorite;