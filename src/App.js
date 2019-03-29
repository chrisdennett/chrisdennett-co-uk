import React, { Component } from "react";
// ui
import "@material/button/dist/mdc.button.css";
import { Button } from "@rmwc/button";
// styles
// import "material-components-web/dist/material-components-web.min.css";
import "./app.css";
// comps
import JumpingVictorianLady from "./comps/JumpingVictorianLady";
import ProjectCard from "./comps/ProjectCard";
// data
import { projects } from "./PROJECTS";
import DetailsHeader from "./comps/detailsHeader/DetailsHeader";

class App extends Component {
  render() {
    return (
      <div className="app">
        <DetailsHeader />

        {/* 
            RECENT PROJECTS 
        */}
        <main>
          <section>
            <div className={"sectionHeader"}>
              <h2 className={"sectionTitle"}>Recent Projects</h2>
              <p className={"sectionSubtitle"}>
                The things I make inbetween freelance work.
              </p>
            </div>
            <div className={"currentProjects"}>
              {projects.map(project => {
                return <ProjectCard key={project.url} {...project} />;
              })}
            </div>
          </section>

          <section className="otherThings">
            <div className={"sectionHeader"}>
              <h2 className={"sectionTitle"}>Quick things</h2>
              <p className={"sectionSubtitle"}>
                I'd love to be able to tell you there's a good reason for this
                section, but really it's just projects I've not got round to
                taking a screen shot for!
              </p>
            </div>
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

          <section className={"section--twitter"}>
            <div className={"sectionHeader"}>
              <h2 className={"sectionTitle"}>Twitterings</h2>
              <p className={"sectionSubtitle"}>
                The things I scroll through, prod and gaze at when I should
                really be doing life.
              </p>
            </div>
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
