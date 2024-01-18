import Banner from "../components/pageDesign/Banner";
import greenRing from "../assets/rings-green-display.jpg";
import DesignerDisplay from "../components/display/DesignerDisplay";
import drop from "../assets/ring-drop.jpeg";
import green from "../assets/ring-drop-green.jpeg";
import eternity from "../assets/ring-eternity.jpeg";
import fashion from "../assets/ring-fashion.jpeg";
import plug from "../assets/ring-ball.jpeg";
import bird from "../assets/ring-bird.jpeg";
import dragon from "../assets/ring-dragon.jpeg";
import gRing from "../assets/ring-green.jpeg";
import necklace from "../assets/necklace-gold.jpeg";
import neckHeart from "../assets/necklace-heart.jpeg";
import neckFashion from "../assets/necklace-fasion.jpeg";
import des1 from "../assets/rings-on-rings-display.jpg";
import des2 from "../assets/rings-green-display.jpg";
import des3 from "../assets/rings-phone-display.jpg";
import des4 from "../assets/rings-unique-display.jpg";
import des5 from "../assets/ring-oval-eternity.jpeg";
import des6 from "../assets/ring-princess-eternity.jpeg";
import "../styles/designerpage.css";
import PhotoDisplay from "../components/display/PhotoDisplay";
import QuoteLineDisplay from "../components/display/QuoteLineDisplay";

function DesignersPage() {
  const sterlingProductList = [
    { prodImg: drop, prodName: "Drop In Love", prodPrice: "$3,234" },
    { prodImg: green, prodName: "Drop In Green", prodPrice: "$5,655" },
    { prodImg: eternity, prodName: "Eternity", prodPrice: "$1,221" },
    { prodImg: fashion, prodName: "Let Go", prodPrice: "$3,456" },
  ];
  const opProductList = [
    { prodImg: bird, prodName: "Bird In Love", prodPrice: "$3,234" },
    { prodImg: dragon, prodName: "Bird In Love", prodPrice: "$3,234" },
    { prodImg: gRing, prodName: "Bird In Love", prodPrice: "$3,234" },
  ];

  const gemsProductList = [
    { prodImg: necklace, prodName: "Bird In Love", prodPrice: "$3,234" },
    { prodImg: neckHeart, prodName: "Bird In Love", prodPrice: "$3,234" },
    { prodImg: neckFashion, prodName: "Bird In Love", prodPrice: "$3,234" },
  ];

  return (
    <div className="designer-main-container">
      <Banner
        img={greenRing}
        title="Designers"
        desc="At the intersection of imagination and expertise, our designers bring you jewelry that transcends the ordinary. Uncover the beauty of our thoughtfully crafted designs."
        side={true}
        position="0 47%"
      />

      <div className="designer-desc-container">
        <h1 className="font4 f3">
          <span className="font-gold">D</span>esigner{" "}
          <span className="font-green">E</span>xperience
        </h1>
        <p className="f-8 m0 font2">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
          Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu sem
          fringilla euismod at at tortor. Nullam nec urna in arcu tristique
          facilisis. Sed fringilla velit at turpis aliquam, nec vestibulum
          libero ullamcorper.
        </p>
      </div>

      <div className="designer-main-content-container">
        <div className="designer-grid-container">
          <PhotoDisplay
            img={des1}
            title={
              <h1 className="f2-5">
                <span className="font-gold">D</span>ESIGNER 1
              </h1>
            }
          />
          <PhotoDisplay
            img={des2}
            title={
              <h1 className="f2-5">
                <span className="font-green">D</span>ESIGNER 2
              </h1>
            }
          />
          <PhotoDisplay
            img={des3}
            title={
              <h1 className="f2-5">
                <span className="font-gold">D</span>ESIGNER 3
              </h1>
            }
          />
          <PhotoDisplay
            img={des4}
            title={
              <h1 className="f2-5">
                <span className="font-green">D</span>ESIGNER 4
              </h1>
            }
          />
          <PhotoDisplay
            img={des5}
            title={
              <h1 className="f2-5">
                <span className="font-gold">D</span>ESIGNER 5
              </h1>
            }
          />
          <PhotoDisplay
            img={des6}
            title={
              <h1 className="f2-5">
                <span className="font-green">D</span>ESIGNER 6
              </h1>
            }
          />
        </div>
      </div>

      <QuoteLineDisplay quote="Designers Quick Peak" />

      <DesignerDisplay
        name="Sophia Sterling"
        desc="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
          Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu sem
          fringilla euismod at at tortor. Nullam nec urna in arcu tristique
          facilisis. Sed fringilla velit at turpis aliquam, nec vestibulum
          libero ullamcorper."
        bigImg={plug}
        productList={sterlingProductList}
        top={true}
      />

      <DesignerDisplay
        name="Oliver Opulence"
        desc="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
          Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu sem
          fringilla euismod at at tortor. Nullam nec urna in arcu tristique
          facilisis. Sed fringilla velit at turpis aliquam, nec vestibulum
          libero ullamcorper."
        bigImg={dragon}
        productList={opProductList}
      />

      <DesignerDisplay
        name="Isabella Gems"
        desc="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
          Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu sem
          fringilla euismod at at tortor. Nullam nec urna in arcu tristique
          facilisis. Sed fringilla velit at turpis aliquam, nec vestibulum
          libero ullamcorper."
        bigImg={neckFashion}
        productList={gemsProductList}
        bottom={true}
      />
    </div>
  );
}

export const designersRoute = {
  element: <DesignersPage />,
};
