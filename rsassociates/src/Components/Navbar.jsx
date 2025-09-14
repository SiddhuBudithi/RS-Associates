import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Css/Navbar.css";
import logo from "../images/rsa_logo_transp.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <img src={logo} alt="RS Associates Logo" className="rsa-logo" />
        </Link>
      </div>

      {/* <div className="navbar-logo">
        <Link className="logos" to="/">RS Associates</Link>
      </div> */}

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>
        {/* <li>
          <span
            className="join-btn flashing-btn"
            onClick={() => setMenuOpen(false)}
          >
            Join Us
          </span>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
