import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer"; 
import PageTitle from "../../components/PageTitle/PageTitle";

function Contact() {
  return (
    <div>
      <Navbar active="contact" />
      <BodyContainer>
       <PageTitle title="conatct us by" subtitle={"we are just one call away"} />
       <h1>contact</h1>
      </BodyContainer>
      <Footer/>
    </div>
  );
}

export default Contact;
