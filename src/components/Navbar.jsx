import { useState } from "react";

import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className="logo-area">
        <img src={logo} alt="Dev Stack" className="logo-image" />
      </div>

      <div className={open ? "nav-links active-menu" : "nav-links"}>
        <a href="#" className="active">
          Home
        </a>

        <a href="#technologies">Technologies</a>

        <a href="#">Projects</a>

        <a href="#">About</a>

        <a href="#">Contact</a>
      </div>

      <div className="nav-buttons">
        <button className="signin-btn">Sign In</button>

        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
