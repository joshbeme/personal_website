import React, { Component } from "react";
import Skill from "./skill";
import { Header } from "components/basics/Header";
import Limit from "./howMany";

const skills = [
  "HTML",
  "React",
  "CSS",
  "JavaScript",
  "Node",
  "Express",
  "MongoDB",
  "Atlas",
  "Sass",
  "Jest",
  "Mocha",
  "Chai",
  "Redux",
  "Next.js",
  "React Router",
  "RX.js",
  "Canvas",
  "P5.js",
  "App Engine",
  "Docker",
  "Gulp",
  "Ruby",
  "Ruby on Rails",
  "Active Record",
  "Sidekiq",
  "Elastic Search",
  "MySQL",
  "Rust",
  "Actix Web",
];

class Index extends Component {
  render() {
    return (
      <div id="stats" className="container with-title">
        <Header>Stats</Header>
        <div id="stats-skills">
          {skills.map((skill) => {
            return (
              <Skill stars={1} key={skill}>
                {skill}
              </Skill>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Index;
