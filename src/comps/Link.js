import React from "react";

const Link = ({ url, text, className }) => {
  return (
    <a
      href={url}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

export default Link;
