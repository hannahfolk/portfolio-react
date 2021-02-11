import React from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import nodeIcon from "@iconify-icons/logos/nodejs";
import mysqlIcon from "@iconify-icons/logos/mysql";

const About = () => {
  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>About Me</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>
                  &nbsp;
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>
                  &nbsp;
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">Hello there! :)</span>
                  <br />
                  <br />
                  👋 I'm Hannah Folk. I'm a full stack web developer based in
                  Los Angeles, CA. My favorite technologies to code in are
                  React, MySQL, and Javascript. Currently I work for Hearful Hub
                  as a Junior Backend Engineer and Trilogy Education as a Senior
                  Tutor in Full Stack Web Development.
                  <br />
                  <br />
                  When I was in high school, I took AP Computer Science and
                  completely failed it. I was so discouraged from doing anything
                  computer science related, and so I turned to Math, Econ, and
                  Theatre at UC San Diego. But I did still have to take one
                  computer science course for a GE, Introduction to Programming:
                  Java. Something must have clicked back in high school because
                  that class was a breeze. From there, I wanted to be a CS
                  minor, but I could not fit it into my schedule in four years.
                  I tried self-studying throughout the years as well, but I
                  never had the time or the motivation to sit down and commit.
                  <br />
                  <br />
                  So when I graduated and moved to Los Angeles, I decided to do
                  the UCLA Extension Coding Bootcamp, and it was the best
                  decision I've ever made in my life.
                  <br />
                  <br />
                  When I'm not coding (or quarantined), I train at a parkour
                  gym, practice Kung Fu, and sing my heart out to a myriad of
                  Disney songs. Feel free to connect with me on LinkedIn!
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img
                  src="./images/sd-pic.jpeg"
                  alt="San Diego"
                />

                <Icon
                  icon={reactIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={nodeIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={mysqlIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
