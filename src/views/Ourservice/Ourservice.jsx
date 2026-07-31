import "./Ourservice.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
import { OUR_SERVICES } from "../../config";


function Service() {
  return (
    <div>
      <Navbar active="our-service" />
      
        <PageTitle title="our services are" subtitle={"we are commited to provide the service"}/>
       <h1>our service</h1>
        <BodyContainer>{OUR_SERVICES.map((serviceDetail,index) =>{
          return <div key={index} className="service-card">
            {serviceDetail.icon}
            <h2 className="service-card-title">{serviceDetail.title}</h2>
            <p className="service-card-description">{serviceDetail.description}</p>
          </div>;
        })}
          
        </BodyContainer>
      <Footer />
    </div>
  );
}

export default Service;
