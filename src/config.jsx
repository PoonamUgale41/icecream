import Img1 from "./assets/lamp1.jpg";
import Img2 from "./assets/lamp2.jpg";
import Img3 from "./assets/lamp3.jpg";
import Img4 from "./assets/lamp4.jpg";
import Img5 from "./assets/lamp5.webp";
import Img6 from "./assets/ice-cream6.png";
import Img7 from "./assets/ice-cake1.png";
import Img8 from "./assets/ice-cake2.png";
import Img9 from "./assets/ice-cake3.png";
import Img10 from "./assets/ice-cake4.png";
import { Utensils  } from "lucide-react";

const PRODUCTS =[
  {
    id:1,
    title: "Floor Lamp",
    price:30,
    description:"Tall fixtures like arc, tripod, or torchiere models designed to fill empty room corners or anchor reading areas.",
    image:Img3
  },
  {
    id:2,
    title: "Tiffany Lamps",
    price:25,
    description:"Feature handcrafted, colorful stained-glass shades that bring a vintage, artistic, and rich glow to traditional spaces." ,
    image:Img2
  },
  {
    id:3,
    title: "Buffet Lamp",
    price:15,
    description:"Extra-tall, slender lamps traditionally used on dining room sideboards or narrow entry consoles.",
    image:Img1
  },
  {
    id:4,
    title: "Novelty Lamp",
    price:50,
    description:"Portable or accent pieces styled like classic lanterns, globes, or artistic sculptures to create unique visual",
    image:Img4
  },
  {
    id:5,
    title: "Fiber Optic Lamp",
    price:20,
    description:"Bases holding sprays of thin plastic fibers that change colors at the tips.",
    image:Img5
  },
  
];


const OUR_SERVICES = [
{
  id:1,
  title: "lighten up",
  description:"Post high-quality photos of your lamps lit up in cozy rooms.",
  icon:<Utensils height={"60px"} width={"60px"}/>,

},
{
  id:2,
  title:"Modern light",
  description:"Making your house feel like home",
  icon:<Utensils height={"60px"} width={"60px"}/>,
},
];
export {PRODUCTS , OUR_SERVICES};