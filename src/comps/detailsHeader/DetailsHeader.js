import React from "react";
// styles
import "./detailsHeader_styles.css";
// comps
import SocialMediaLinks from "../SocialMediaLinks";

const DetailsHeader = () => {
  return (
    <header className={"details-header"}>
      <div className={"details-header--main"}>
        <h1>Chris Dennett</h1>
        <p className={"details-header--main--address"}>
          Ulverston, Cumbria, UK
        </p>
        <p className={"details-header--main--biog"}>
          Web developer and occasional maker of weird digital art thingies.
        </p>
      </div>
      <div className={"details-header--contactLinks"}>
        <SocialMediaLinks
          className={"details-header--contactLinks--socialMediaLinks"}
        />
        <p className={"details-header--contactLinks--email-holder"}>
          <a
            href="mailto:chrisdennett@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            chrisdennett@gmail.com
          </a>
        </p>
      </div>
    </header>
  );
};

export default DetailsHeader;
