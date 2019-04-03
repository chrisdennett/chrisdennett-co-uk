import React from "react";
import SocialMediaLinks from "../SocialMediaLinks";

const DetailsHeader = () => {
  return (
    <>
      <div className={"contactLinks"}>
        <p className={"contactLinks--email-holder"}>
          <a
            href="mailto:chrisdennett@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            chrisdennett@gmail.com
          </a>
        </p>
        <SocialMediaLinks className={"contactLinks--socialMediaLinks"} />
      </div>
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
      </header>
    </>
  );
};

export default DetailsHeader;
