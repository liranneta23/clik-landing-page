import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>People make communities and communities make people</div>
      <div>
        <a href="">
          <FaFacebook color="blue" />
        </a>
        <a href="">
          <FaInstagram color="purple" />
        </a>
        <a href="">
          <FaTwitter color="blue" />
        </a>
        <a href="">
          <FaYoutube color="red" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
