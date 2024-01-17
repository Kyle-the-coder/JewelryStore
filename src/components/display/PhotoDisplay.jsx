import "../../styles/photodisplay.css";

export default function PhotoDisplay({ img, title }) {
  return (
    <div className="photo-display-main-container">
      <div className="photo-display-img-container">
        <img className="photo-display-img" src={img} />
        {title}
      </div>
    </div>
  );
}
