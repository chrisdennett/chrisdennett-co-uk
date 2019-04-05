import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faLinkedin,
  faInstagram,
  faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";
import Link from "./Link";

const SocialMediaLinks = ({ className }) => {
  return (
    <div className={className}>
      <Link
        url="https://twitter.com/artflychris"
        text={<FontAwesomeIcon icon={faTwitterSquare} />}
      />

      <Link
        url="https://www.facebook.com/artfly.io/"
        text={<FontAwesomeIcon icon={faFacebookSquare} />}
      />

      <Link
        url="https://www.instagram.com/artfly.io/"
        text={<FontAwesomeIcon icon={faInstagram} />}
      />

      <Link
        url="https://www.linkedin.com/in/chris-dennett-artfly/"
        text={<FontAwesomeIcon icon={faLinkedin} />}
      />

      <Link
        url="https://www.youtube.com/user/nedland42/videos"
        text={<FontAwesomeIcon icon={faYoutubeSquare} />}
      />
    </div>
  );
};

export default SocialMediaLinks;
