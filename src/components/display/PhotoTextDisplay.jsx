import "../../styles/phototextdisplay.css"
export default function PhotoTextDisplay({img, title, paragraph}){
    return <div className="photo-text-display-main-container">
        <div className="photo-img-container">
            <img className="photo-img" src={img} />
           {title}
        </div>
        <div className="photo-text-container">
            {paragraph}
        </div>
    </div>
}