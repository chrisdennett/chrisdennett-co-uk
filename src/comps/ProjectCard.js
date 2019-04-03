import React, { useState } from "react";
// ui
import "@material/elevation/dist/mdc.elevation.css";
import { Elevation } from "@rmwc/elevation";
import "@material/typography/dist/mdc.typography.css";
import { Typography } from "@rmwc/typography";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActionIcon,
  CardActions,
  CardActionIcons
} from "@rmwc/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ title, subtitle, img, description, url, twitter }) => {
  const [elevation, setElevation] = useState(5);

  return (
    <div className="card-holder">
      <Elevation
        z={elevation || 8}
        transition
        onMouseOver={() => setElevation(24)}
        onMouseOut={() => setElevation(8)}
      >
        <Card className={"project-card"} outlined>
          <CardPrimaryAction
            tag={"a"}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardMedia
              sixteenByNine
              style={{
                backgroundImage: `url(./${img})`
              }}
            />
            <div className={"project-card--content"}>
              <Typography
                className={"project-card--content--header"}
                use="headline6"
                tag="h2"
              >
                {title}
              </Typography>
              <Typography
                use="subtitle2"
                tag="h3"
                theme="textSecondaryOnBackground"
                className={"project-card--content--sub-heading"}
              >
                {subtitle}
              </Typography>
              <Typography
                use="body1"
                tag="div"
                theme="textSecondaryOnBackground"
                className={"project-card--content--description"}
              >
                {description}
              </Typography>
            </div>
          </CardPrimaryAction>
          <CardActions>
            {/* <CardActionButtons>
          <CardActionButton
          tag={"a"}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          >
          {title}
          </CardActionButton>
          {children}
        </CardActionButtons> */}

            <CardActionIcons>
              <CardActionIcon
                icon="launch"
                tag={"a"}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              />
              {twitter && (
                <CardActionIcon
                  icon={
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{
                        width: 20,
                        verticalAlign: "baseline"
                      }}
                    />
                  }
                  tag={"a"}
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              )}
            </CardActionIcons>
          </CardActions>
        </Card>
      </Elevation>
    </div>
  );
};

export default ProjectCard;
