import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import Img1 from "./../../assets/ice-cream1.png";
import Img2 from "./../../assets/ice-cream2.png";
import Img3 from "./../../assets/ice-cream3.png";
import Img4 from "./../../assets/ice-cream4.png";
import Img5 from "./../../assets/ice-cream5.png";
import Img6 from "./../../assets/ice-cream6.png";

function Card({children}){
  return <div className="Card">{children}</div>;
}

const PRODUCTS =[
  {
    id:1,
    title: "Icecream cone",
    price:30,
    description:"A sweet, frozen dessert made from cream, sugar, and fresh strawberries or natural flavorings",
    image:Img3
  },
  {
    id:2,
    title: "Icecream bar",
    price:25,
    description:"a frozen dairy dessert on a stick, typically coated in a hard layer of chocolate or other sweet toppings" ,
    image:Img2
  },
  {
    id:3,
    title: "Gelato",
    price:15,
    description:"a popular, artisanal style of Italian ice cream",
    image:Img1
  },
  {
    id:4,
    title: "Sorbet",
    price:50,
    description:"a frozen dessert made from fruit puree or juice, water, and sugar",
    image:Img4
  },
  {
    id:5,
    title: "Popsicle",
    price:20,
    description:"a sweet, frozen food made of flavored water, juice, or milk on a small wooden stick",
    image:Img5
  },
  {
    id:6,
    title: "Sundae",
    price:100,
    description:"a sweet ice cream dessert that typically features ice cream, sweet syrup or sauce, and extra toppings",
    image:Img6
  },
]

function Home() {
  return (
    <div className="home">
      <Navbar active="home" />

      <BodyContainer>
        <h1>Ice Creams</h1>
        <div className="products-container">
          {PRODUCTS.map((product)=>{
            return (
            <div className="product-container" key={product.id}>
              <img src={product.image} className="product-img" alt={product.title} />
            
              <h1 className="product-title">{product.title}</h1>
              <p className="product-price">Price: {product.price}</p>
              <p className="product-description">{product.description}</p>
            </div>
            );
          })
          }
       </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default Home;
