import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faLinkedin,
  faInstagram,
  faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaLinks = ({ color = "#000", className }) => {
  return (
    <div className={className}>
      <a
        href="https://twitter.com/artflychris"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitterSquare} />
      </a>

      <a
        href="https://www.facebook.com/artfly.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>

      <a
        href="https://www.instagram.com/artfly.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a
        href="https://www.linkedin.com/in/chris-dennett-artfly/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a
        href="https://www.youtube.com/user/nedland42/videos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutubeSquare} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
