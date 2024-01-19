import storeFront from "../assets/store-front.jpg";
import Banner from "../components/pageDesign/Banner";
import MapComponent from "../components/pageDesign/MapComp";
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
          <h1>Business Hours</h1>
          <p>
            <span className="bold">Monday:</span> 10:00am-6:00pm
          </p>
          <p>
            <span className="bold">Tuesday:</span> 10:00am-6:00pm
          </p>
          <p>
            <span className="bold">Wednesday:</span> 10:00am-6:00pm
          </p>
          <p>
            <span className="bold">Thursday:</span> 10:00am-6:00pm
          </p>
          <p>
            <span className="bold">Friday:</span> 10:00am-6:00pm
          </p>
          <p>
            <span className="bold">Saturday:</span> 10:00am-6:00pm
          </p>
          <p>
            <span className="bold">Sunday:</span> closed
          </p>
        </div>

        <div className="store-contact-us-form">
          <h1>We would love to hear from you!</h1>
          <form className="contact-form">
            <div className="contact-form-input-container">
              <div className="input-container">
                <label>Name:</label>
                <input type="text" className="input-field" />
              </div>
              <div className="input-container">
                <label>Email Address:</label>
                <input type="text" className="input-field" />
              </div>
            </div>
            <div className="contact-form-input-container">
              <div className="input-container">
                <label>Phone:</label>
                <input type="text" className="input-field" />
              </div>
              <div className="input-container">
                <label>Interested In:</label>
                <select id="choice" className="input-field">
                  <option value="">Select Option</option>
                  <option value="">Wedding Rings</option>
                  <option value="">Engagement Rings</option>
                  <option value="">Jewelry</option>
                  <option value="">Other</option>
                </select>
              </div>
            </div>
            <div className="contact-form-input-container">
              <div className="input-container area">
                <label>Message:</label>
                <textarea
                  className="input-field area"
                  rows={5}
                  cols={10}
                  type="text"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <button className="form-button">Contact Us</button>
          </form>
        </div>
      </div>

      <div className="store-info-map-conatiner">
        <MapComponent />
      </div>
    </div>
  );
}

export const storeFrontRoute = {
  element: <StoreInfoPage />,
};
