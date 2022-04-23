import React, {useState } from "react";
import "./projectList.css";

import Shocked from "../../img/shocked_guy.png";

const ProjectList = () => {

  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
  };
  return (
        <div className="pl">
          <div className="pl-texts">
            <h1 className="pl-title">My Projects & Resume</h1>
            <p className="pl-desc">
              This is a collection of some of my favorite projects
              I have created over the years while learning more
              about computer science. Please feel free to have a look. I also
              included my resume if interested.
            </p>
          </div>
          <div class="menu" onClick={ToggleClass} className={isActive ? "menu" : "menu-open"}>
            <div class="button">
              <span id="left" class="tooltiptext">BugBox Bug Tracker</span>
            </div>
            <div class="button">
              <span id="middle" class="tooltiptext">My Resume</span>
            </div>
            <div class="button">
              <span id="right" class="tooltiptext">Rock, Paper, Scissors Game</span>
            </div>
          </div>
          <div className="pl-image">
            <img src={Shocked} alt="Presenting my projects" className="p-present" />
          </div>
        </div>
  );
};

export default ProjectList;