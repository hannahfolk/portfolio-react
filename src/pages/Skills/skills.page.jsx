import React from "react";

const icons = [
  {
    name: "HTML 5",
    class: "devicon-html5-plain colored",
  },
  {
    name: "CSS 3",
    class: "devicon-css3-plain colored",
  },
  {
    name: "JavaScript",
    class: "devicon-javascript-plain colored",
  },
  {
    name: "React",
    class: "devicon-react-original colored",
  },
  {
    name: "Node",
    class: "devicon-nodejs-plain colored",
  },
  {
    name: "Bootstrap",
    class: "devicon-bootstrap-plain colored",
  },
  {
    name: "Express",
    class: "devicon-express-original colored",
  },
  {
    name: "MySql",
    class: "devicon-mysql-plain colored",
  },
  {
    name: "MongoDB",
    class: "devicon-mongodb-plain colored",
  },
  {
    name: "Python",
    class: "devicon-python-plain colored",
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-white">Skills</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">
            {icons.map((skills, i) => (
              <li className="list-inline-item mx-3" key={i}>
                <span>
                  <div className="text-center skills-tile">
                    <i className={skills.class} style={{ fontSize: "220%" }}>
                      <p
                        className="text-center"
                        style={{ fontSize: "30%", marginTop: "4px" }}
                      >
                        {skills.name}
                      </p>
                    </i>
                  </div>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
