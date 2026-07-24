import "./Navbar.css";
import {Link} from "react-router";
import {House, FileUser,Phone,Forklift} from "lucide-react";

function Navbar({active}) {
  console.log("active =", active);
  return (
    <div className="navbar">
      <Link to="/" className={`menu-item ${active === "home" ? "active-menu" : ""}`}><House className="menu-icon" />Home</Link>
      <Link to="/about" className={`menu-item ${active === "about" ? "active-menu" : ""}`}><FileUser className="menu-icon" />About</Link>
      <Link to="/contact" className={`menu-item ${active == "contact" ? "active-menu" : ""}`}><Phone className="menu-icon" />Contact</Link>
      <Link to="/our-service" className={`menu-item ${active == "our-service" ? "active-menu" : ""}`}><Forklift className="menu-icon" />OurService</Link>
      
    </div>
  );
}

export default Navbar;
