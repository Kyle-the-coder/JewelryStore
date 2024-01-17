import Banner from "../components/pageDesign/Banner";
import rings from "../assets/wedding-rings-display.jpg";
import WeddingRingDisplay from "../components/display/WeddingRingDisplay";
import WeddingCarousel from "../components/carousel/WeddingCarousel";
import QuoteLineDisplay from "../components/display/QuoteLineDisplay";
import { ringInfo } from "../api/product";
import "../styles/weddingpage.css";

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
        <button className="wedding-button font1 f1-5 mr25 gold">
          Women's Wedding Rings
        </button>
        <button className="wedding-button font1 f1-5">
          Men's Wedding Rings
        </button>
      </div>

      <div className="wedding-carousel-main-container">
        <WeddingCarousel />
      </div>

      <div className="wedding-quote-container">
        <QuoteLineDisplay quote="Find your perfect rings" />
      </div>

      <div className="wedding-p-container">
        <p className="font1 f1-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
          Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu sem
          fringilla euismod at at tortor. Nullam nec urna in arcu tristique
          facilisis. Sed fringilla velit at turpis aliquam, nec vestibulum
          libero ullamcorper.
        </p>
        <p className="font1 f1-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
          Curabitur vel libero nec nisi suscipit pharetra..
        </p>
        <p className="font1 f1-8">Visit us at our multiple locations!</p>
      </div>

      <div className="wedding-quote-container">
        <QuoteLineDisplay quote="Women's Wedding Rings" />
      </div>

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

      <div className="wedding-ring-display-main-container">
        <WeddingRingDisplay />
      </div>

      <div className="wedding-quote-container">
        <QuoteLineDisplay quote="Men's Wedding Rings" />
      </div>

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

export const weddingRoute = {
  element: <WeddingPage />,
};
