import React, { useState } from 'react';
import './Restaurant.css';
import MapLocation from './MapLocation';

function Restaurant({ data }) {

    console.log(data);

  const [activeTab, setActiveTab] = useState('business-details');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white border rounded shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">{data.name}</h2>
      <p className="text-gray-600 mb-4 text-center">{data.address}</p>
      <a href={data.url} target="_blank" className="text-blue-500 font-semibold mb-4 inline-block text-center">Visit Website</a>
      <img src={data.thumbnail} style={{width:"100%", height:"400px"}} alt="Restaurant Thumbnail" className="w-full mb-4" />

      <div className="flex justify-center items-center">
        <button className={`mr-4 text-blue-500 font-semibold ${activeTab === 'business-details' ? 'underline' : ''}`} onClick={() => handleTabClick('business-details')}>Business Details</button>
        <button className={`mr-4 text-blue-500 font-semibold ${activeTab === 'map-location' ? 'underline' : ''}`} onClick={() => handleTabClick('map-location')}>Map Location</button>
        <button className={`mr-4 text-blue-500 font-semibold ${activeTab === 'reviews' ? 'underline' : ''}`} onClick={() => handleTabClick('reviews')}>Reviews</button>
      </div>

      <div className="mt-4">
        {activeTab === 'business-details' && (
        //   <div>
        //     <h3 className="text-lg font-semibold mb-2 text-center">Business Details</h3>
        //     <p className="text-gray-600 text-center">Details about the restaurant's business</p>
        //   </div>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <div className="mb-4">
                <span className="font-medium mr-2">Phone:</span>
                <a href={`tel:${data.phone}`}>{data.phone}</a>
                </div>
                <div>
                <span className="font-medium mr-2">Category:</span>
                <span>{data.category[0].title}</span>
                </div>
            </div>
            <div>
                <div className="mb-4">
                <span className="font-medium mr-2">Rating:</span>
                <span>{data.rating} </span>
                </div>
                <div>
                <span className="font-medium mr-2">Category:</span>
                <span>{data.name}</span>
                </div>
            </div>
      <div>
        {/* Add any additional business details you want to show in the second column */}
      </div>
    </div>
        )}

        {activeTab === 'map-location' && (
          <div>
            <h3 className="text-lg font-semibold mb-2 text-center">Map Location</h3>
            <p className="text-gray-600 text-center">Map showing the restaurant's location</p>
          </div>
        // <MapLocation coordinates={data.coordinates} />
        )}

        {activeTab === 'reviews' && (
          <div>
            <h3 className="text-lg font-semibold mb-2 text-center">Reviews</h3>
            <p className="text-gray-600 text-center">Reviews of the restaurant</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Restaurant;
