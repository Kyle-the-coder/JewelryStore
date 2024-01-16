import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import prevButtonImage from "../../assets/jewelry-left.png";
import nextButtonImage from "../../assets/jewelry-right.png";
import "../../styles/weddingcarousel.css";
export default function WeddingCarousel() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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
            per_page: 6,
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
    <img
      src={prevButtonImage}
      alt="Previous"
      className="custom-slick-arrow custom-slick-prev jewelry-arrow left"
      onClick={props.onClick}
    />
  );

  const NextArrow = (props) => (
    <img
      src={nextButtonImage}
      alt="Next"
      className="custom-slick-arrow custom-slick-next jewelry-arrow right"
      onClick={props.onClick}
    />
  );
  const handleThumbnailClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current, next) => setCurrentIndex(next % images.length),
  };
  console.log(images);
  return (
    <div className="wedding-carousel-container">
      <Slider ref={sliderRef} className="wedding-slide-container" {...settings}>
        <div className="wedding-img-list">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src.medium}
              alt={image.photographer}
              className={`wedding-thumbnail ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </Slider>
    </div>
  );
}
