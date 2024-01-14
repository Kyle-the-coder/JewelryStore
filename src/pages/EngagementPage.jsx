import Banner from "../components/pageDesign/Banner";
import darkRing from "../assets/ring-dark-display.jpg";
import "../styles/engagementPage.css";
function EngagementPage() {
  return (
    <div className="engagement-main-container">
      <Banner
        img={darkRing}
        title="Engagement Rings"
        desc="Seal Your Love with Sparkle."
        side={true}
        position="0 47%"
      />
      <div className="engagement-quote-container">
        <h1>Choosing an Engagement Ring can be a daunting Task</h1>
      </div>
    </div>
  );
}

export const engagementRoute = {
  element: <EngagementPage />,
};
