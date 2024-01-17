import Banner from "../components/pageDesign/Banner";
import darkRing from "../assets/ring-dark-display.jpg";
import rings from "../assets/rings-display.jpg";
import ringsOnRings from "../assets/rings-on-rings-display.jpg";
import phone from "../assets/rings-phone-display.jpg";
import "../styles/engagementpage.css";
import "../styles/jewelrypage.css";
import PhotoTextDisplay from "../components/display/PhotoTextDisplay";
import { ringInfo } from "../api/product";
import { useEffect, useState } from "react";
import QuoteLineDisplay from "../components/display/QuoteLineDisplay";
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
        <h1 className="font1">Choosing an Engagement Ring can be difficult</h1>
        <div className="engagement-line-container">
          <div className="engagement-line"></div>
          <p className="font1">Allow us to help you find ‘the one’</p>
          <div className="engagement-line"></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
          Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu sem
          fringilla euismod at at tortor. Nullam nec urna in arcu tristique
          facilisis. Sed fringilla velit at turpis aliquam, nec vestibulum
          libero ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Quisque fermentum justo eget nisl dapibus, nec venenatis justo
          malesuada. Curabitur vel libero nec nisi suscipit pharetra. Duis vel
          risus eu sem fringilla euismod at at tortor. Nullam nec urna in arcu
          tristique facilisis. Sed fringilla velit at turpis aliquam, nec
          vestibulum libero ullamcorper.
        </p>
      </div>

      <div className="engagement-options-container">
        <PhotoTextDisplay
          img={rings}
          title={
            <h1>
              <span className="font-gold">R</span>INGS
            </h1>
          }
          paragraph={
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
              Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu
              sem fringilla euismod at at tortor. Nullam nec urna in arcu
              tristique facilisis. Sed fringilla velit at turpis aliquam, nec
              vestibulum libero ullamcorper.
            </p>
          }
        />
        <PhotoTextDisplay
          img={ringsOnRings}
          title={
            <h1>
              <span className="font-green">S</span>ERVICE
            </h1>
          }
          paragraph={
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
              Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu
              sem fringilla euismod at at tortor. Nullam nec urna in arcu
              tristique facilisis. Sed fringilla velit at turpis aliquam, nec
              vestibulum libero ullamcorper.
            </p>
          }
        />
        <PhotoTextDisplay
          img={phone}
          title={
            <h1>
              <span className="font-gold">C</span>ONTACT
            </h1>
          }
          paragraph={
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
              Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu
              sem fringilla euismod at at tortor. Nullam nec urna in arcu
              tristique facilisis. Sed fringilla velit at turpis aliquam, nec
              vestibulum libero ullamcorper.
            </p>
          }
        />
      </div>

      <QuoteLineDisplay quote="Here's a quick peak:" />

      <div className="grid-main-container">
        <div className="img-grid-2">
          {ringInfo.map((prod, index) => {
            return (
              <div
                className="designer-display-product-container big"
                key={prod.prodImg}
              >
                <div className="designer-product-img">
                  <img src={prod.prodImg} />
                </div>
                <div className="designer-product-display">
                  <h3 className="product-text">{prod.prodName}</h3>
                  <p className="product-text">{`$${prod.prodPrice}`}</p>
                </div>
                <button className="product-button ">Inquire Now</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const engagementRoute = {
  element: <EngagementPage />,
};
