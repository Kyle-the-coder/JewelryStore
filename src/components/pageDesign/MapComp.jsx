import React, { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        initMap();
      };
    } else {
      initMap();
    }

    function initMap() {
      const geocoder = new window.google.maps.Geocoder();

      const address = "647 4th St, Santa Rosa, CA 95404";

      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          const location = results[0].geometry.location;

          const map = new window.google.maps.Map(
            document.getElementById("map"),
            {
              center: location,
              zoom: 15,
            }
          );

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
