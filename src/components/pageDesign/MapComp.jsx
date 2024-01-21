import React, { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual Google Maps API key
    const apiKey = import.meta.env.VITE_API_KEY;

    // Check if the Google Maps API script is already loaded
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        // Initialize the map after the script is loaded
        initMap();
      };
    } else {
      // Initialize the map if the script is already loaded
      initMap();
    }

    function initMap() {
      // Create a geocoder object
      const geocoder = new window.google.maps.Geocoder();

      // Specify the address you want to geocode
      const address = "647 4th St, Santa Rosa, CA 95404";

      // Make a geocoding request
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          // Get the latitude and longitude
          const location = results[0].geometry.location;

          // Create a map centered at the specified location
          const map = new window.google.maps.Map(
            document.getElementById("map"),
            {
              center: location,
              zoom: 15,
            }
          );

          // Add a marker for the specified location
          new window.google.maps.Marker({
            map: map,
            position: location,
            title: address,
          });
        } else {
          console.error(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    }
  }, []);

  return <div id="map" style={{ height: "400px" }}></div>;
};

export default MapComponent;
