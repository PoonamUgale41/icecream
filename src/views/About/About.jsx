import "./About.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
function About() {
  return (
    <div>
      <Navbar active="about" />
      <BodyContainer>
         <PageTitle title="know more about" 
                    subtitle ={"we are dedicated to providing the best service"}
       />
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default About;
