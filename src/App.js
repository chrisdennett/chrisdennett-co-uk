import React, { lazy, Suspense } from "react";
// ui
import "@material/button/dist/mdc.button.css";
import { Button } from "@rmwc/button";
// styles
import "./app.css";
// comps
import SocialMediaLinks from "./comps/SocialMediaLinks";
// data
import { projects } from "./PROJECTS";
import Link from "./comps/Link";
import Ruler from "./comps/Ruler";
const ProjectCard = lazy(() => import("./comps/ProjectCard"));

const renderLoader = () => <p>Loading</p>;

const App = () => {
  return (
    <div className="app">
      {/* CONTACT DEETS */}
      <header className={"details-header"}>
        <div className={"details-header--main"}>
          <h1 className={"details-header--main--name"}>Chris Dennett</h1>
          <div className={"details-header--main--biog"}>
            <p>A meat-based colony of about 42 trillion cells.</p>
            <p>
              Web developer and occasional maker of weird digital art thingies.
            </p>
          </div>
          <p className={"details-header--main--address"}>
            Ulverston, Cumbria, UK
          </p>
        </div>
        <div className={"contactLinks"}>
          <SocialMediaLinks className={"contactLinks--socialMediaLinks"} />
          <Link
            className={"header-email-link"}
            text={"chrisdennett@gmail.com"}
            url={"mailto:chrisdennett@gmail.com"}
          />
        </div>
      </header>

      <Ruler />

      {/* RECENT PROJECTS */}
      <section className={"content-section"}>
        <div className={"sectionHeader"}>
          <h2 className={"sectionTitle"}>Recent Projects</h2>
          <p className={"sectionSubtitle"}>
            The things I make inbetween freelance work.
          </p>
        </div>
        <Suspense fallback={renderLoader()}>
          <div className={"currentProjects"}>
            {projects.map(project => {
              return <ProjectCard key={project.url} {...project} />;
            })}
          </div>
        </Suspense>
      </section>

      <Ruler />

      {/* ARCHIVE */}
      <section className="content-section otherThings">
        <div className={"sectionHeader"}>
          <h2 className={"sectionTitle"}>Quick things</h2>
          <p className={"sectionSubtitle"}>
            I'd love to be able to tell you there's a good reason for this
            section, but really it's just projects I've not got round to taking
            a screen shot for!
          </p>
        </div>
        <ul className={"otherThings--list"}>
          <li>
            <Button
              style={{ background: "steelblue" }}
              raised
              tag={"a"}
              href="https://lab.artfly.io/portrait-grids"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portrait Grid Maker
            </Button>{" "}
            Something I made for the ArtFly Lab to help people draw portraits
            using a grid.
          </li>
          <li>
            <Button
              style={{ background: "steelblue" }}
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
              style={{ background: "steelblue" }}
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
              style={{ background: "steelblue" }}
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

      <Ruler />

      {/* FOOTER */}
      <footer className={"footer"}>
        <div className={"footer-content"}>
          <img src={"Rotoscoping.gif"} alt={"rotoscoping gif"} />

          <SocialMediaLinks className={"footer--links"} />
          <Link
            className={"footer-email-link"}
            text={"chrisdennett@gmail.com"}
            url={"mailto:chrisdennett@gmail.com"}
          />

          <p className={"footer-content--text"}>
            You know it's all over when the victorian lady jumps the stool.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
