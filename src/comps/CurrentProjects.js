import React from "react";
//comps
import ProjectCard from "./ProjectCard";

const CurrentProjects = () => {
  return (
    <React.Fragment>
      <ProjectCard
        title={"ArtFly"}
        subtitle={"Website: Everybody's art deserves a gallery"}
        url={"https://artfly.io/"}
        img={"artfly.PNG"}
        description={
          "Originally made as a place to store my daughters' endless artworks. Now available for all."
        }
      />

      <ProjectCard
        title={"Dalton Poppy Plaques"}
        subtitle={"Website: WW1 Local Soldiers"}
        url={"https://dalton.poppyplaques.co.uk/"}
        img={"poppies-pic.PNG"}
        description={
          "In commemoration of the young men of Dalton who gave their lives in WW1."
        }
      />

      <ProjectCard
        title={"Mutilated Selfie Booth"}
        subtitle={"Installation: Beauty to the max"}
        url={"https://youtu.be/Upyn6eKeTyk"}
        img={"selfie.PNG"}
        description={
          "An interactive digital artwork in the making for Ulverston's Candlelit Walk."
        }
      />
    </React.Fragment>
  );
};

export default CurrentProjects;
