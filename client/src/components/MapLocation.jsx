import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Replace with your Mapbox access token

function MapLocation({ coordinates }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Skip if map already initialized

    var coords = (coordinates.latitude, coordinates.longitude);
    console.log(coords);

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coords,
      zoom: 15
    });

    // Add marker to map
    new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map.current);

    // Clean up on unmount
    return () => map.current.remove();
  }, [coordinates]);

  return (
    <div className="h-full">
      <div className="h-2/3" ref={mapContainer} />
    </div>
  );
}

export default MapLocation;
