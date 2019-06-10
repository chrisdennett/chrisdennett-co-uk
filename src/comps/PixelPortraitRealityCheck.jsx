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
        <h1>Pixel Portrait Reality Check</h1>
        <ul>
          <li>
            I'm proving time and time again that I've got no idea how to make
            money!
          </li>
          <li>
            So I thought I'd at least start reality checking my ideas before
            spending lots of time on them.
          </li>
          <li>
            Still trying to find work that I love doing that will pay me a basic
            salary.
          </li>
        </ul>
        <p>
          Whilst at work I was never any good at spotting the commercial
          viability of a project. Since leaving and trying my own projects, this
          has become even more apparent! So for my next idea (codename: Pixel
          Portraits) I want to ask friends to give honest, anonymous advice.
        </p>

        <h2>A note about the current site</h2>
        <p>You can see the current site here.</p>
        <p>
          I've initially created this for personal use - to generate the files I
          need to run pixel portrait events (
          <a
            href={
              "https://www.youtube.com/watch?v=PxOXlb-8_S4&feature=youtu.be"
            }
          >
            like this one in Kendal Library
          </a>
          ).
        </p>
        <p>
          I'll tidy things up for others to use freely no matter the results of
          this survey. I just won't put in the extra work needed to make money
          from it if everyone tells me its a stupid idea.
        </p>
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
  font-size: 1.2rem;
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
  height: 150vh;
  padding: 20px 0 50px 0;
`;

const HeaderBar = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
