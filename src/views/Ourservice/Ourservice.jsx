import "./Ourservice.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";

function Service() {
  return (
    <div>
      <Navbar active="our-service" />
      <BodyContainer>
      <h1>our service</h1>
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default Service;
