import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import prevButtonImage from "../../assets/left-chevron.png";
import nextButtonImage from "../../assets/right-chevron.png";
import "../../styles/weddingcarousel.css";
export default function WeddingCarousel() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSlide, setIsAutoSlide] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://api.pexels.com/v1/search", {
          headers: {
            Authorization:
              "q2nVuHy0uK8zolsVcRON0rK5pdZ7qvd6Crqtk7MGReVXQdaHl4nBcLQl",
          },
          params: {
            query: "Men's Wedding Rings",
            orientation: "portrait",
            per_page: 20,
          },
        });
        setImages(response.data.photos);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const PrevArrow = (props) => (
    <div
      className="arrow-container arrow-container-slick-prev "
      onClick={props.onClick}
    >
      <img src={prevButtonImage} className="arrow" alt="Previous" />
    </div>
  );

  const NextArrow = (props) => (
    <div
      className="arrow-container arrow-container-slick-next"
      onClick={props.onClick}
    >
      <img src={nextButtonImage} className="arrow" alt="Next" />
    </div>
  );
  const handleThumbnailClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="wedding-carousel-container">
      <Slider ref={sliderRef} className="wedding-slider" {...settings}>
        {images.map((image, index) => (
          <div key={index} className="wedding-thumbnail-container">
            <img
              src={image.src.large}
              alt={image.photographer}
              className={`wedding-thumbnail ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
