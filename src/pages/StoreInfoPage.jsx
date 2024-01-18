import storeFront from "../assets/store-front.jpg";
import Banner from "../components/pageDesign/Banner";
import "../styles/storeinfopage.css";
function StoreInfoPage() {
  return (
    <div className="store-info-main-container">
      <Banner
        img={storeFront}
        title="Santa Rosa"
        desc="Welcome to Our Amazing Store"
        side={true}
        position="0 47%"
      />

      <div className="store-info-display-container">
        <div className="store-hours-info">
          <h1>Contact Us</h1>
          <p>707-707-7077</p>
          <p>Adress,</p>
          <p>City,</p>
          <p>CA 70777</p>
        </div>
        <div className="store-contact-us-form"></div>
      </div>
    </div>
  );
}

export const storeFrontRoute = {
  element: <StoreInfoPage />,
};
