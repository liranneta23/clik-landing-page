import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>People make communities and communities make people</div>
      <div>
        {/*<a href="">
          <FaLinkedin color="blue" />
        </a>*/}
        <a href="https://www.instagram.com/clik_nl/" target="_blank" rel="noopener noreferrer">
          <FaInstagram color="purple" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
