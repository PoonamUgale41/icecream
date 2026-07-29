import "./Ourservice.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";

function Service() {
  return (
    <div>
      <Navbar active="our-service" />
      <BodyContainer>
        <PageTitle title="our services are" />
      <h1>our service</h1>
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default Service;
