import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import axios from "axios";
import gsap from "gsap";
import "../../styles/imggrid.css";
import Loader from "../display/loader";
import { useInView } from "react-intersection-observer";

const ImgGrid = ({ setIsFirstRender }) => {
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);
  const [images3, setImages3] = useState([]);
  const [loading, setLoading] = useState(true);
  const imgArr1 = ["Sapphire Ring", "Emerald Ring"];
  const imgArr2 = ["Diamond Earrings"];
  const imgArr3 = ["Wedding", "Engagement"];
  const [ref, inView] = useInView({});

  function findArr(arr) {
    const ranIndex = Math.floor(Math.random() * arr.length);
    return arr[ranIndex];
  }

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const apiKey =
          "q2nVuHy0uK8zolsVcRON0rK5pdZ7qvd6Crqtk7MGReVXQdaHl4nBcLQl";

        const apiUrl = "https://api.pexels.com/v1/search";

        const config1 = {
          headers: {
            Authorization: apiKey,
          },
          params: {
            query: findArr(imgArr1),
            orientation: "portrait",
            per_page: 6,
            total_results: 10,
          },
        };
        const config2 = {
          headers: {
            Authorization: apiKey,
          },
          params: {
            query: findArr(imgArr2),
            orientation: "portrait",
            per_page: 6,
            total_results: 10,
          },
        };
        const config3 = {
          headers: {
            Authorization: apiKey,
          },
          params: {
            query: findArr(imgArr3),
            orientation: "portrait",
            per_page: 6,
            total_results: 10,
          },
        };
        const response1 = await axios.get(apiUrl, config1);
        const response2 = await axios.get(apiUrl, config2);
        const response3 = await axios.get(apiUrl, config3);

        setImages1(response1.data.photos);
        setImages2(response2.data.photos);
        setImages3(response3.data.photos);

        setTimeout(() => {
          setLoading(false);
          setIsFirstRender(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching data from Pexels API:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (inView) {
      gsap.to(".img-grid-display", {
        duration: 75.2,
        yPercent: -100,

        delay: 0.5,
      });
      gsap.to(".img-grid-display-reverse", {
        duration: 75.2,
        yPercent: 80,
        ease: "slow(0.3,0.4,false)",
        delay: 0.5,
      });
    }
  }, [inView]);

  return (
    <div className="img-grid-container" ref={ref}>
      <div className="img-grid">
        {loading ? (
          <div className="spinner-container">
            {/* Create 18 card elements */}
            {Array.from({ length: 18 }, (_, index) => (
              <div key={index} className="spinner-card">
                <Loader />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="img-grid-display">
              {images1.map((image) => (
                <img
                  key={image.id}
                  id="forward"
                  src={image.src.large}
                  alt={image.photographer}
                  className="img-display-img"
                />
              ))}
            </div>
            <div className="img-grid-display-reverse">
              {images2.map((image) => (
                <img
                  key={image.id}
                  id="reverse"
                  src={image.src.large}
                  alt={image.photographer}
                  className="img-display-img"
                />
              ))}
            </div>
            <div className="img-grid-display">
              {images3.map((image) => (
                <img
                  key={image.id}
                  id="forward"
                  src={image.src.large}
                  alt={image.photographer}
                  className="img-display-img"
                />
              ))}
            </div>
          </>
        )}{" "}
      </div>
    </div>
  );
};

export default ImgGrid;
