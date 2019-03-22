import React from "react";
// ui
import "@material/typography/dist/mdc.typography.css";
import { Typography } from "@rmwc/typography";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActionButton,
  CardActionIcon,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@rmwc/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({
  title,
  subtitle,
  img,
  description,
  children,
  url,
  twitter
}) => {
  return (
    <Card style={{ width: 300, margin: 20 }}>
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
        <div style={{ padding: "0 1rem 1rem 1rem" }}>
          <Typography use="headline6" tag="h2">
            {title}
          </Typography>
          <Typography
            use="subtitle2"
            tag="h3"
            theme="textSecondaryOnBackground"
            style={{ marginTop: "-1rem" }}
          >
            {subtitle}
          </Typography>
          <Typography use="body1" tag="div" theme="textSecondaryOnBackground">
            {description}
          </Typography>
        </div>
      </CardPrimaryAction>
      <CardActions>
        <CardActionButtons>
          <CardActionButton
            tag={"a"}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </CardActionButton>
          {children}
        </CardActionButtons>

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
  );
};

export default ProjectCard;
