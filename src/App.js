import React, { Component } from "react";
// ui
import { Button } from "rmwc/Button";
// styles
import "material-components-web/dist/material-components-web.min.css";
import "./app.css";
// comps
import SocialMediaLinks from "./comps/SocialMediaLinks";
import JumpingVictorianLady from "./comps/JumpingVictorianLady";
import CurrentProjects from "./comps/CurrentProjects";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <div className={"header--aboutMe"}>
            <h1>Chris Dennett</h1>
            <p className={"address"}>Ulverston, Cumbria, UK</p>
            <p className={"biog"}>
              Web designer, developer and occasional maker of weird digital art
              thingies.
            </p>
            <a
              href="https://www.buymeacoffee.com/gBw6u42LI"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png"
                alt="Buy Me A Coffee"
                style={{
                  marginTop: 10,
                  height: "auto !important",
                  width: "auto !important"
                }}
              />
            </a>
          </div>
          <div className={"header--contactLinks"}>
            <SocialMediaLinks className={"header--socialMediaLinks"} />
            <p className={"email"}>
              <a
                href="mailto:chrisdennett@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                chrisdennett@gmail.com
              </a>
            </p>
          </div>

          {/* <style>.bmc-button
                        img{width: 27px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line - height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-flex !important;color:#000000 !important;background-color:#FFDD00 !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 0px 9px !important;font-size: 17px !important;letter-spacing:-0.08px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Lato', sans-serif !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover,
                        .bmc-button:active,
                        .bmc-button:focus {-webkit - box - shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#000000 !important;}</style>
                    <a className="bmc-button" target="_blank" href="https://www.buymeacoffee.com/gBw6u42LI"><img
                        src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee"><span
                        style="margin-left:5px">Buy me a coffee</span></a>*/}
        </header>

        <main>
          <section>
            <h2 className={"sectionHeader"}>Recent Projects</h2>
            <p className={"sectionSubheader"}>
              The things I made between freelance work.
            </p>
            <div className={"currentProjects"}>
              <CurrentProjects />
            </div>
          </section>

          <section>
            <h2 className={"sectionHeader"}>Quick links to other things</h2>
            <ul>
              <li>
                <Button
                  raised
                  tag={"a"}
                  href="https://lab.artfly.io/portrait-grids"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portrait Grid Maker
                </Button>{" "}
                Something I made for the ArtFly Lab to help people draw
                portraits using a grid.
              </li>
              <li>
                <Button
                  raised
                  tag={"a"}
                  href="https://lab.artfly.io/pixel-stretcher"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pixel Stretcher
                </Button>{" "}
                Stretch out an image like chewing gum.
              </li>
              <li>
                <Button
                  raised
                  tag={"a"}
                  href="https://lab.artfly.io/colour-splitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colour Splitter
                </Button>{" "}
                An ArtFly Lab experiment to split the colours in a photo.
              </li>
              <li>
                <Button
                  raised
                  tag={"a"}
                  href="https://www.youtube.com/watch?v=W-JYQq7jBhI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Door of Perception
                </Button>{" "}
                Digital art project using the Kinect depth sensor and projector.
              </li>
              <li>
                <Button
                  raised
                  tag={"a"}
                  href="https://ticklypictures.com/projects/jellycam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JellyCam
                </Button>{" "}
                A bit of stop-motion software I made a long time ago.
              </li>
              <li>
                <Button
                  raised
                  tag={"a"}
                  href="https://abcoutsourcing.uk.com/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ABC Outsourcing
                </Button>{" "}
                A simple business website I made for our neighbours a while
                back.
              </li>
            </ul>
          </section>

          {/*<section>
                        <h2>Likes</h2>
                        <ul>
                            <li>
                                Coffee
                            </li>
                            <li>
                                Skimming stones
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Dislikes</h2>
                        <ul>
                            <li>
                                Eating sounds made by other people
                            </li>
                            <li>
                                When films about children skip ahead to them later in life
                            </li>
                        </ul>
                    </section>*/}

          <section className={"section--centered"}>
            <h2>Twitter feed</h2>
            <iframe
              className={"socialMediaStuff--iFrame"}
              title={"@ArtFlyChris Twitter Feed"}
              src="/twitter-feed.html"
            />
          </section>
        </main>
        <JumpingVictorianLady />
      </div>
    );
  }
}

export default App;
