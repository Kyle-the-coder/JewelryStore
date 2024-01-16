import Banner from "../components/pageDesign/Banner";
import rings from "../assets/wedding-rings-display.jpg";
import WeddingRingDisplay from "../components/display/WeddingRingDisplay";

function WeddingPage() {
  return (
    <div className="landing-main-container">
      <Banner
        img={rings}
        title="Wedding Rings"
        desc="Symbolizing Forever in Every Ring."
        side={false}
        position="0 27%"
      />
      <div className="wedding-"></div>
      <button className="form-button big">Women's Wedding Rings</button>
      <button className="form-button big">Men's Wedding Rings</button>
      <WeddingRingDisplay />
      <div></div>
    </div>
  );
}

export const weddingRoute = {
  element: <WeddingPage />,
};
