import Img1 from "./assets/ice-cream1.png";
import Img2 from "./assets/ice-cream2.png";
import Img3 from "./assets/ice-cream3.png";
import Img4 from "./assets/ice-cream4.png";
import Img5 from "./assets/ice-cream5.png";
import Img6 from "./assets/ice-cream6.png";
import Img7 from "./assets/ice-cake1.png";
import Img8 from "./assets/ice-cake2.png";
import Img9 from "./assets/ice-cake3.png";
import Img10 from "./assets/ice-cake4.png";
import { Utensils  } from "lucide-react";

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
    price:50,
    description:"a sweet ice cream dessert that typically features ice cream, sweet syrup or sauce, and extra toppings",
    image:Img6
  },
  {
    id:7,
    title: "IceCake-cheese",
    price:500,
    description:"a sweet ice-caker dessert that typically features ice cream, sweet syrup or sauce, and extra toppings",
    image:Img7
  },
  {
    id:8,
    title: "IceCake-strawberry",
    price:550,
    description:"a sweet ice-cake dessert that typically features ice cream, sweet syrup ,blueberry, and extra toppings",
    image:Img8
  },
  {
    id:9,
    title: "IceCake-blueberry",
    price:550,
    description:"a sweet ice-cake dessert that typically features ice cream, sweet syrup ,blueberry, and extra toppings",
    image:Img9
  },
  {
    id:10,
    title: "IceCake-blueberry",
    price:550,
    description:"a sweet ice-cake dessert that typically features ice cream, sweet syrup ,blueberry, and extra toppings",
    image:Img10
  },
];


const OUR_SERVICES = [
{
  id:1,
  title: "Dine-in",
  description:"Enjoy the delicious meal and welcoming atmospher",
  icon:<Utensils height={"60px"} width={"60px"}/>,

},
{
  id:2,
  title:"takeaway",
  description:"craving our ice cream but thw go? our takeway service",
  icon:<Utensils height={"60px"} width={"60px"}/>,
},
];
export {PRODUCTS , OUR_SERVICES};