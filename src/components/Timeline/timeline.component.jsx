import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="./images/hearful.png"
            alt="Heareful"
          />
        }
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          February 2021 - Present
        </div>

        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          Junior Backend Engineer
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          Hearful Hub
        </h4>
        <p>
          Creating Scrapy spiders using Python and placing info into MongoDB for
          data analysis
        </p>
        <div style={{ textAlign: "left", marginTop: "15px" }}>
          <Badge pill className="main-badge mr-2 mb-2">
            Python
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            MongoDB
          </Badge>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="./images/trilogy.png"
            alt="Trilogy Education"
          />
        }
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          March 2020 - Present
        </div>

        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          Senior Tutor
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          Trilogy Education
        </h4>
        <p>
          I love tutoring as it allows me to give back to my community, while I
          solidify concepts and discover new things working with students who
          come from a variety of skill levels and backgrounds.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="./images/teefury-bird.jpg"
            alt="Teefury Bird"
          />
        }
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          May 2020 - October 2020
        </div>

        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          Software Developer Intern
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          Teefury
        </h4>
        <p>
          I enjoyed adding features to Teefury's{" "}
          <a href="http://artists.teefury.com">Artist Dashboard</a>, mainly
          working in React, MySQL, and Express.
        </p>
        <div style={{ textAlign: "left", marginTop: "15px" }}>
          <Badge pill className="main-badge mr-2 mb-2">
            React
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            MySQL
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            Express
          </Badge>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="./images/ucla-extension.png"
            alt="UCLA Extension"
          />
        }
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          September 2019 - March 2020
        </div>

        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          Full Stack Web Development Bootcamp
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          UCLA Extension
        </h4>
        <p>24-week intensive program</p>
        <a
          href="https://uclaextension.credly.com/member-badges/23307995"
          target="_blank"
          rel="noopener noreferrer"
          id="certificate"
          style={{ marginTop: "5px" }}
        >
          Certificate of Completion
        </a>
        <div style={{ textAlign: "left", marginTop: "15px" }}>
          <Badge pill className="main-badge mr-2 mb-2">
            HTML
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            CSS
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            Bootstrap
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            Javascript
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            jQuery
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            RESTful APIs
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            Node
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            Express
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            MySQL
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            MongoDB
          </Badge>
          <Badge pill className="main-badge mr-2 mb-2">
            React
          </Badge>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="./images/wb-logo.png"
            alt="Warner Bros"
          />
        }
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          June 2019 - May 2019
        </div>

        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          Studio Tour Guide
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          Warner Bros. Studios
        </h4>
        <p>
          I loved being a tour guide for a movie studio! I would drive 14 people
          around on a tour cart visiting where movies, tv shows, and even
          commericals filmed on the Warner Bros. lot, simultaneously diving into
          the history of the studio. I definitely improved my public speaking
          and people skills while working there.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="./images/grad-photo.jpg"
            alt="Graduation"
          />
        }
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>June 2019</div>

        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          Graduation!
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          UC San Diego
        </h4>
        <p>
          BS in Math/Economics <br /> BA in Theatre
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{
          background: "#3c4d5a",
          color: "#fff",
          textAlign: "center",
        }}
        icon={
          <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
        }
      />
    </VerticalTimeline>
  );
};

export default Timeline;
