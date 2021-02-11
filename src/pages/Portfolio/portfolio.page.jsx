import React, { useState } from "react";

import PortfolioModal from "../../components/PortfolioModal";

const projects = [
  {
    title: "Artist Dashboard",
    image: "./images/portfolio/artist-dashboard.jpg",
    deployedUrl: "https://artists.teefury.com",
    githubUrl: "https://github.com/hannahfolk/dash-for-art",
    description:
      "Artists submit artwork here to be sold on products from Teefury.",
  },
  {
    title: "Spokeo Chrome Extension",
    image: "./images/portfolio/spokeo-extension-screenshot.png",
    deployedUrl: null,
    githubUrl: "https://github.com/hannahfolk/spokeo",
    description:
      "Chrome Extension for Spokeo that scrapes websites for phone numbers and emails addresses and provides a link to Spokeo.com for that scraped entity.",
  },
  {
    title: "STX Box Office",
    image: "./images/portfolio/stx-box-office.png",
    deployedUrl: "https://stx-box-office.herokuapp.com",
    githubUrl: "https://github.com/hannahfolk/stx-box-office",
    description:
      "Data compiler for STX Entertainment. Search for box office info through movie title, weekend, or genre. Note: No longer works since API trial expired.",
  },
  {
    title: "README Generator",
    image: "./images/portfolio/readme-generator.jpg",
    deployedUrl: null,
    githubUrl: "https://github.com/hannahfolk/readme-generator",
    description:
      "Generates README.md files off of a template for Github projects. Note: In progress.",
  },
  {
    title: "Employee Directory",
    image: "./images/portfolio/employee-directory.png",
    deployedUrl: "https://hannahfolk.github.io/employee-directory",
    githubUrl: "https://github.com/hannahfolk/employee-directory",
    description:
      "Search and sort through your employees by any category.",
  },
  {
    title: "Weather Dashboard",
    image: "./images/portfolio/weather-dashboard-react.png",
    deployedUrl: "https://hannahfolk.github.io/weather-dashboard-react",
    githubUrl: "https://github.com/hannahfolk/weather-dashboard-react",
    description:
      "Search a city and receive back current weather data and a five day forecast.",
  },
];

const Projects = () => {
  const [deps, setDeps] = useState({});
  const [isShowingModal, setIsShowingModal] = useState(false);

  const detailsModalShow = (data) => {
    setDeps(data);
    setIsShowingModal(true);
  };

  const detailsModalClose = () => setIsShowingModal(false);

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>Portfolio</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">
            {projects.map((project, i) => (
              <div className="col-sm-12 col-md-6 col-lg-4" key={i}>
                <span className="portfolio-item d-block">
                  <div
                    className="foto"
                    onClick={() => detailsModalShow(project)}
                  >
                    <div>
                      <img
                        src={project.image}
                        alt="projectImages"
                        height="250"
                        style={{
                          marginBottom: 0,
                          paddingBottom: 0,
                          position: "relative",
                        }}
                      />
                    </div>
                  </div>
                </span>
              </div>
            ))}
          </div>
        </div>
        <PortfolioModal
          show={isShowingModal}
          onHide={detailsModalClose}
          data={deps}
        />
      </div>
    </section>
  );
};

export default Projects;
