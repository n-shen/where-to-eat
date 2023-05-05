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
        <div className="flex flex-wrap justify-center">
        {selectedRestaurants.map((restaurant, index) => (
}

export default PairSession;