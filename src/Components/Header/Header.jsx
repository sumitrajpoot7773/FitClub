import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";

function Header() {
  return (
    <>
      <div className="header">
        <img className="Logo" src={Logo} alt="" />
        <ul className="header-menu">
        <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
        <li><Link to="programs" spy={true} smooth={true} offset={-100} duration={500}>Programs</Link></li>
        <li><Link to="reasons" spy={true} smooth={true} offset={-100} duration={500}>Why us</Link></li>
        <li><Link to="plans" spy={true} smooth={true} offset={-50} duration={500}>Plans</Link></li>
        <li><Link to="join" spy={true} smooth={true} offset={-450} duration={500}>Testimonials</Link></li>
       
      </ul>
      </div>
    </>
  );
}

export default Header;
