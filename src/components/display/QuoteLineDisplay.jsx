import "../../styles/engagementpage.css";
export default function QuoteLineDisplay({ quote }) {
  return (
    <div className="engagement-quote-container">
      <div className="engagement-line-container">
        <div className="engagement-line"></div>
        <p className="font1">{quote}</p>
        <div className="engagement-line"></div>
      </div>
    </div>
  );
}
