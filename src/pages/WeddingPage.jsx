import Banner from "../components/pageDesign/Banner";
import rings from "../assets/wedding-rings-display.jpg";
import WeddingRingDisplay from "../components/display/WeddingRingDisplay";
import "../styles/weddingpage.css";
import CarouselComponent from "../components/carousel/CarouselComponent";
import WeddingCarousel from "../components/carousel/WeddingCarousel";

function WeddingPage() {
  return (
    <div className="wedding-page-main-container">
      <Banner
        img={rings}
        title="Wedding Rings"
        desc="Symbolizing Forever in Every Ring."
        side={false}
        position="0 27%"
      />
      <div className="wedding-button-container">
        <button className="form-button f1-5 mr25 gold">
          Women's Wedding Rings
        </button>
        <button className="form-button f1-5">Men's Wedding Rings</button>
      </div>

      <div className="wedding-carousel-main-container">
        <WeddingCarousel />
      </div>
      <WeddingRingDisplay />
    </div>
  );
}

export const weddingRoute = {
  element: <WeddingPage />,
};
