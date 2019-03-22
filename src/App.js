import React, { Component } from "react";
// ui
import "@material/button/dist/mdc.button.css";
import { Button } from "@rmwc/button";
// styles
// import "material-components-web/dist/material-components-web.min.css";
import "./app.css";
// comps
import SocialMediaLinks from "./comps/SocialMediaLinks";
import JumpingVictorianLady from "./comps/JumpingVictorianLady";
import ProjectCard from "./comps/ProjectCard";
// data
import { projects } from "./PROJECTS";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <div className={"header--aboutMe"}>
            <h1>Chris Dennett</h1>
            <p className={"address"}>Ulverston, Cumbria, UK</p>
            <p className={"biog"}>
              Web developer and occasional maker of weird digital art thingies.
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
        </header>

        {/* 
            RECENT PROJECTS 
        */}
        <main>
          <section>
            <h2 className={"sectionHeader"}>Recent Projects</h2>
            <p className={"sectionSubheader"}>
              The things I made between freelance work.
            </p>
            <div className={"currentProjects"}>
              {projects.map(project => {
                return <ProjectCard key={project.url} {...project} />;
              })}
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
