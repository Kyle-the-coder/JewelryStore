import Banner from "../components/pageDesign/Banner";
import craftsman from "../assets/jewelry-craftsman.jpg";
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
    </div>
  );
}

export const serviceRoute = {
  element: <ServicePage />,
};
