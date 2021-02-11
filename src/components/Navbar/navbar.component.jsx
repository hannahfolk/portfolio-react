// Dependencies
import React from "react";
import {
  faUser,
  faSuitcase,
  faToolbox,
  faFileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// Custom Styles
import { Nav, NavLink, LinkIcon } from "./navbar.styles";

const Navbar = () => {
  return (
    <Nav className="navbar">
      <NavLink
        className="navbarLink"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <LinkIcon icon={faUser} />
        About
      </NavLink>
      <NavLink
        className="navbarLink"
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <LinkIcon icon={faSuitcase} />
        Portfolio
      </NavLink>
      <NavLink
        className="navbarLink"
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <LinkIcon icon={faToolbox} />
        Skills
      </NavLink>
      <NavLink
        className="navbarLink"
        activeClass="active"
        to="resume"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <LinkIcon icon={faFileAlt} />
        Resume
      </NavLink>
      <NavLink
        className="navbarLink"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <LinkIcon icon={faEnvelope} />
        Contact
      </NavLink>
    </Nav>
  );
};

export default Navbar;
