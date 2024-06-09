import React from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="heading skills-heading">Proficiency</h1>
            <div className="skill-content">
              {techStack.experience.map((exp, index) => {
                return (
                  <div className="skill" key={index}>
                    {/* <p>{exp.Stack}</p> */}
                    <exp.Icon />
                    {/* {exp.progressPercentage} */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
