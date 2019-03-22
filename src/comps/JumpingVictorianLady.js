import React from "react";
import { Typography } from "@rmwc/typography";
// comps
import SocialMediaLinks from "./SocialMediaLinks";

const JumpingVictorianLady = () => {
  return (
    <div className={"footer"}>
      <img
        style={{ background: "#fff", padding: 10 }}
        src={"Rotoscoping.gif"}
        alt={"rotoscoping gif"}
      />
      <Typography use={"body1"}>
        <p>You know it's all over when the victorian lady jumps the stool.</p>
      </Typography>

      <SocialMediaLinks className={"footer--links"} />

      <a
        href="https://www.buymeacoffee.com/gBw6u42LI"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png"
          alt="Buy Me A Coffee"
          style={{
            height: "auto !important",
            width: "auto !important",
            boxShadow: "none"
          }}
        />
      </a>
    </div>
  );
};

export default JumpingVictorianLady;
