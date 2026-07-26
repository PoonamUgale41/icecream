import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import ProductCard from "../../components/productCard/ProductCard";
import { PRODUCTS } from "../../config";


function Card({children}){
  return <div className="Card">{children}</div>;
}




function Home() {
  return (
    <div className="home">
      <Navbar active="home" />

      <BodyContainer>
        <h1>Ice Creams</h1>
        <div className="products-container">
          {PRODUCTS.map((product)=>{
           return  <ProductCard key={product.id}  product={product}/>;
           
          })
          }
       </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default Home;
