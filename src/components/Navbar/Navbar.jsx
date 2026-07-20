import "./Navbar.css";
import {Link} from "react-router"
function Navbar() {
  return (
    <div>
      <a Link to="/">Home</a>&nbsp; | &nbsp;
      <a Link to="/about">About</a>&nbsp; | &nbsp;
      <a Link to="/contact">Contact</a>&nbsp;| &nbsp;
      <a Link to="/our-service">OurService</a>&nbsp;| &nbsp;
      
    </div>
  );
}

export default Navbar;
