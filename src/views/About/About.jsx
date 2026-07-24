import "./About.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
function About() {
  return (
    <div>
      <Navbar active="about" />
      <BodyContainer>
         <h1>About us</h1>
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default About;
