// SocialIcons.js
import React from "react";
import "./Section.css";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
  return (
    <div className="social-icons">
      <a href="https://twitter.com">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://facebook.com">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://instagram.com">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};

export default Icons;
