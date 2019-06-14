import React from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";
// ui
import "@material/icon-button/dist/mdc.icon-button.css";
import { IconButton } from "@rmwc/icon-button";

const PixelPortraitRealityCheck = () => {
  return (
    <Outer>
      <HeaderBar>
        <IconButton
          icon="exit_to_app"
          label="Open App"
          onClick={() => navigate("/")}
        />
      </HeaderBar>
      <Inner>
        <h1>Reality Check: Chris needs you!</h1>
        <p>
          Hello, my name is Chris Dennett and I suffer from commercial
          ineptitude.
        </p>
        <ul>
          <li>
            I've proved time and time again that I've no idea how to make money!
          </li>
          <li>
            So I thought I'd at least start "reality checking" my potential
            money-making ideas before spending lots of time on them.
          </li>
        </ul>

        <h2>The Latest Idea: Pixel Portraits</h2>
        <p>
          A website to help people to create large pixelated portraits out of
          little, paint by number style squares.
        </p>
        <p>
          We've made a few of these now, at home and more recently at an event
          in{" "}
          <a
            href={
              "https://www.youtube.com/watch?v=PxOXlb-8_S4&feature=youtu.be"
            }
          >
            Kendal library
          </a>
        </p>
        <p>
          A draft version of the site with some more detail is here:{" "}
          <a
            href={"https://pixelportraits.artfly.io/?showBeta=1&showInfo=1"}
            target="_blank"
            rel="noopener noreferrer"
          >
            pixelportraits.artfly.io
          </a>{" "}
        </p>
        <p>
          If you fancy giving feedback, have a look at the{" "}
          <a
            href={"https://pixelportraits.artfly.io/?showBeta=1&showInfo=1"}
            target="_blank"
            rel="noopener noreferrer"
          >
            draft site
          </a>{" "}
          and answer the 3 annoynous questions below. Don't worry about giving
          website feedback - I know it's unfinished, broken and ugly at the
          moment! I'm just interested to hear what you think about the idea.
        </p>

        <h3>THANK YOU!</h3>
        <IFrameHolder>
          <iframe
            title="Pixel Portrait Survey"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeRNH5mfXOuv3N-f5GloeK4F-CWr99FEIFY4bnixHasjWERmw/viewform?embedded=true"
            width="640"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading...
          </iframe>
        </IFrameHolder>
      </Inner>
    </Outer>
  );
};

export default PixelPortraitRealityCheck;

const Outer = styled.div`
  min-height: 100vh;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.7);
  background-image: url("/img/linedpaper.png");
  font-family: "Gaegu", cursive;
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 2vw;
  height: 100%;
  max-width: 750px;
`;

const IFrameHolder = styled.div`
  display: flex;
  justify-content: center;
  height: 120vh;
  padding: 20px 0 50px 0;
`;

const HeaderBar = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
