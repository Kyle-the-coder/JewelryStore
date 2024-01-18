import Banner from "../components/pageDesign/Banner";
import craftsman from "../assets/jewelry-craftsman.jpg";
import "../styles/servicepage.css";
import ServiceDisplay from "../components/display/ServiceDisplay";
import PhotoDisplay from "../components/display/PhotoDisplay";
import des1 from "../assets/rings-on-rings-display.jpg";
import des2 from "../assets/rings-green-display.jpg";
import des3 from "../assets/rings-phone-display.jpg";
import des4 from "../assets/rings-unique-display.jpg";
import des5 from "../assets/ring-oval-eternity.jpeg";
import des6 from "../assets/ring-princess-eternity.jpeg";
function ServicePage({}) {
  return (
    <div className="service-page-main-container">
      <Banner
        img={craftsman}
        title="Services"
        desc="We offer comprehensive jewelry services, specializing in repair, creation, and custom design to meet your unique and exquisite preferences."
        side={true}
        position="0 47%"
      />

      <div className="service-page-blerb-container">
        <div className="blerb">
          <p className="font1 f1-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu
            sem fringilla euismod at at tortor. Nullam nec urna in arcu
            tristique facilisis. Sed fringilla velit at turpis aliquam, nec
            vestibulum libero ullamcorper.
          </p>
        </div>
        <div className="blerb">
          <p className="font1 f1-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra.
          </p>
        </div>
      </div>

      <div className="service-page-display-container">
        <ServiceDisplay
          title="In-House Goldsmiths"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra."
        />
        <ServiceDisplay
          title="Only Accredited Gem Lab in the North Bay"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra."
        />
        <ServiceDisplay
          title="Insurance"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra."
        />
        <ServiceDisplay
          title="Complimentary Jewelry Cleaning"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra."
        />
        <ServiceDisplay
          title="Hello"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra."
        />
        <ServiceDisplay
          title="Jewelry Engraving"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra."
        />
      </div>

      <div className="designer-main-content-container">
        <div className="designer-grid-container">
          <PhotoDisplay
            img={des1}
            title={
              <h1 className="f2-5">
                <span className="font-gold">S</span>ERVICE 1
              </h1>
            }
          />
          <PhotoDisplay
            img={des2}
            title={
              <h1 className="f2-5">
                <span className="font-green">S</span>ERVICE 2
              </h1>
            }
          />
          <PhotoDisplay
            img={des3}
            title={
              <h1 className="f2-5">
                <span className="font-gold">S</span>ERVICE 3
              </h1>
            }
          />
          <PhotoDisplay
            img={des4}
            title={
              <h1 className="f2-5">
                <span className="font-green">S</span>ERVICE 4
              </h1>
            }
          />
          <PhotoDisplay
            img={des5}
            title={
              <h1 className="f2-5">
                <span className="font-gold">S</span>ERVICE 5
              </h1>
            }
          />
          <PhotoDisplay
            img={des6}
            title={
              <h1 className="f2-5">
                <span className="font-green">S</span>ERVICE 6
              </h1>
            }
          />
        </div>
      </div>
    </div>
  );
}

export const serviceRoute = {
  element: <ServicePage />,
};
