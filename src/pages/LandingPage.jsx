import Banner from "../components/pageDesign/Banner";
import rings from "../assets/landing-vid-3.mp4";
import ImgGrid from "../components/pageDesign/ImgGrid";
import craftsman from "../assets/jewelry-craftsman.jpg";
import pricing from "../assets/pricing.jpg";
import LandingTextDisplay from "../components/display/LandingTextDisplay";
import { useInView } from "react-intersection-observer";
import "../styles/landingpage.css";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SliderTextDisplay } from "../components/display/SliderTextDisplay";
function LandingPage() {
  const [ref, inView] = useInView({});
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (!isFirstRender) {
      if (inView) {
        gsap.to(".craftsman-img", {
          xPercent: 96,
          duration: 2,
          delay: 2,
        });
        gsap.to(".pricing-img", {
          xPercent: -96,
          duration: 2,
          delay: 2,
        });
      } else if (!inView) {
        gsap.to(".craftsman-img", {
          xPercent: 0,
          duration: 0.5,
        });
        gsap.to(".pricing-img", {
          xPercent: 0,
          duration: 0.5,
        });
      }
    }
  }, [inView]);

  return (
    <div className="landing-main-container">
      <Banner
        img={null}
        video={rings}
        title="Engagement By InfiniteLove Designs"
        desc="At the heart of our engagement rings is the experience of creating a memory—a symbol that encapsulates the beauty of your love story."
        side={true}
        position="0 50%"
      />

      <div className="landing-text-display-container">
        <div className="landing-text">
          <h1 className="font4 ">
            From <span className="font-gold">N</span>ow, towards{" "}
            <span className="font-green">F</span>orever
          </h1>
          <p className="f-8 font1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu
            sem fringilla euismod at at tortor. Nullam nec urna in arcu
            tristique facilisis. Sed fringilla velit at turpis aliquam, nec
            vestibulum libero ullamcorper.
          </p>
        </div>
      </div>

      <div className="landing-img-display-container">
        <LandingTextDisplay />
        <ImgGrid setIsFirstRender={setIsFirstRender} />
      </div>

      <div className="landing-quote-container">
        <h1 className="font1 f1-2 ">
          "Our passion is our craft, we put love into our service so you can
          express yours"
        </h1>
        <p className="font4 f1-5 m0">-Royal Jewel Pavilion</p>
      </div>

      <SliderTextDisplay
        title={
          <h1 className="font4">
            In <span className="font-gold">S</span>tore{" "}
            <span className="font-green">C</span>raftsmenship
          </h1>
        }
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu
            sem fringilla euismod at at tortor. Nullam nec urna in arcu
            tristique facilisis. Sed fringilla velit at turpis aliquam, nec
            vestibulum libero ullamcorper."
        buttonName="Services"
        leftOrRight={true}
        isFirstRender={isFirstRender}
        img={craftsman}
        sliderId={1}
        isTopCurve={true}
        nav={"/services"}
      />

      <div className="landing-quote-container">
        <h1 className="font1 f1-2 ">
          "We love what we do, and we work hard to give you what you need at a
          good price"
        </h1>
        <p className="font4 f1-5 m0">-Royal Jewel Pavilion</p>
      </div>

      <SliderTextDisplay
        title={
          <h1 className="font4">
            <span className="font-gold">C</span>ompetitive{" "}
            <span className="font-green">P</span>ricing
          </h1>
        }
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu
            sem fringilla euismod at at tortor. Nullam nec urna in arcu
            tristique facilisis. Sed fringilla velit at turpis aliquam, nec
            vestibulum libero ullamcorper."
        buttonName="Jewelry"
        leftOrRight={false}
        isFirstRender={isFirstRender}
        img={pricing}
        sliderId={2}
        isTopCurve={false}
        nav={"/jewelry"}
      />
    </div>
  );
}

export const landingRoute = {
  element: <LandingPage />,
};
