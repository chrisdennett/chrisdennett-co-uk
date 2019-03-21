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
  CardAction,
  CardActions,
  CardActionButtons
} from "@rmwc/card";

const ProjectCard = ({ title, subtitle, img, description, children, url }) => {
  return (
    <Card style={{ width: 300, margin: 20 }}>
      <CardPrimaryAction
        tag={"a"}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardMedia
          style={{
            height: 160,
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
            theme="text-secondary-on-background"
            style={{ marginTop: "-1rem" }}
          >
            {subtitle}
          </Typography>
          <Typography
            use="body1"
            tag="div"
            theme="text-secondary-on-background"
          >
            {description}
          </Typography>
        </div>
      </CardPrimaryAction>
      <CardActions>
        <CardActionButtons>
          <CardAction
            tag={"a"}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </CardAction>
          {children}
        </CardActionButtons>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
