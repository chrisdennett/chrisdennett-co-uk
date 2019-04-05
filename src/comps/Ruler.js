import React from "react";

const Ruler = () => {
  const tickY1 = "0%";
  const tinyTickY2 = "10%";
  const smallTickY2 = "15%";
  const midTickY2 = "25%";
  const tallTickY2 = "30%";

  return (
    <svg width={"100%"} height={50}>
      <defs>
        <pattern
          id="inchTicks"
          width="1in"
          height="100%"
          patternUnits="userSpaceOnUse"
          stroke={"white"}
        >
          <line x1="0in" x2="0in" y1={tickY1} y2={tallTickY2} />
          <line x1="0.125in" x2="0.125in" y1={tickY1} y2={tinyTickY2} />
          <line x1="0.25in" x2="0.25in" y1={tickY1} y2={smallTickY2} />
          <line x1="0.375in" x2="0.375in" y1={tickY1} y2={tinyTickY2} />
          <line x1="0.5in" x2="0.5in" y1={tickY1} y2={midTickY2} />
          <line x1="0.625in" x2="0.625in" y1={tickY1} y2={tinyTickY2} />
          <line x1="0.75in" x2="0.75in" y1={tickY1} y2={smallTickY2} />
          <line x1="0.875in" x2="0.875in" y1={tickY1} y2={tinyTickY2} />
          <line x1="1in" x2="1in" y1={tickY1} y2={tallTickY2} />
        </pattern>
      </defs>

      <g transform={"translate(0, 25)"}>
        <rect width="100%" height="100%" fill="url(#inchTicks)" />
      </g>

      <g transform={"scale(1, -1) translate(0, -25)"}>
        <rect width="100%" height="100%" fill="url(#inchTicks)" />
      </g>

      <line
        x1={0}
        x2={"100%"}
        y1={25}
        y2={25}
        strokeWidth={3}
        stroke={"#f0ece3b6"}
      />
    </svg>
  );
};

export default Ruler;
