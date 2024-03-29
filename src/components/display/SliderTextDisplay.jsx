import gsap from "gsap";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "../../styles/slidertext.css";
import { useNavigate } from "react-router-dom";

export function SliderTextDisplay({
  title,
  paragraph,
  buttonName,
  leftOrRight,
  img,
  sliderId,
  isFirstRender,
  isTopCurve,
  nav,
}) {
  const [navState, setNavState] = useState(nav);
  const [ref, inView] = useInView({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!isFirstRender) {
      if (inView) {
        if (leftOrRight) {
          gsap.to(`.slider-img-${sliderId}`, {
            xPercent: 96,
            duration: 2,
            delay: 2.5,
          });
        } else if (!leftOrRight) {
          gsap.to(`.slider-img-${sliderId}`, {
            xPercent: -96,
            duration: 2,
            delay: 2.5,
          });
        }
      } else if (!inView) {
        if (leftOrRight) {
          gsap.to(`.slider-img-${sliderId}`, {
            xPercent: 0,
            duration: 0.5,
          });
        } else if (!leftOrRight) {
          gsap.to(`.slider-img-${sliderId}`, {
            xPercent: 0,
            duration: 0.5,
          });
        }
      }
    }
  }, [inView]);
  console.log(nav);

  return (
    <div
      className="slider-text-display-container"
      style={
        isTopCurve
          ? { borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }
          : {}
      }
    >
      {leftOrRight ? (
        <>
          <div className="slider-text-display" ref={ref}>
            {title}
            <p className="font1 f-8">{paragraph}</p>
            <button onClick={() => navigate(nav)} className="form-button">
              {buttonName}
            </button>
          </div>
          <div className="slider-img-display">
            <img
              src={img}
              className={`${
                leftOrRight ? "left" : "right"
              } slider-img slider-img-${sliderId}`}
            />
          </div>
        </>
      ) : (
        <>
          <div className="slider-img-display">
            <img
              src={img}
              className={`${
                leftOrRight ? "left" : "right"
              } slider-img slider-img-${sliderId}`}
            />
          </div>
          <div className="slider-text-display" ref={ref}>
            {title}
            <p className="font1 f-8">{paragraph}</p>
            <button onClick={() => navigate(nav)} className="form-button">
              {buttonName}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
