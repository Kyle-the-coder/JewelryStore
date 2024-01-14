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
        <div className="engagement-line-container">
          <div className="engagement-line"></div>
         <p>Allow us to help you find ‘the one’</p>
          <div className="engagement-line"></div>
        </div>
      </div>
      <p>   
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu
            sem fringilla euismod at at tortor. Nullam nec urna in arcu
            tristique facilisis. Sed fringilla velit at turpis aliquam, nec
            vestibulum libero ullamcorper.
            </p>
    </div>
  );
}

export const engagementRoute = {
  element: <EngagementPage />,
};
