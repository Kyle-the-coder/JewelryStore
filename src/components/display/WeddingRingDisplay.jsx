import CarouselComponent from "../carousel/CarouselComponent";
import "../../styles/weddingdisplay.css";
export default function WeddingRingDisplay({}) {
  return (
    <div className="wedding-main-container">
      <div className="wedding-carousel-display-container">
        <CarouselComponent />
      </div>
      <div className="wedding-display-container">
        <h1 className="font4 f2-5">
          Your <span className="font-gold">W</span>edding{" "}
          <span className="font-green">E</span>xperience
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
          Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu sem
          fringilla euismod at at tortor. Nullam nec urna in arcu tristique
          facilisis. Sed fringilla velit at turpis aliquam, nec vestibulum
          libero ullamcorper.
        </p>
      </div>
    </div>
  );
}
