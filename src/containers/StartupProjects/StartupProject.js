import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
          <div className="repo-cards-div-main">
            {bigProjects.projects.map((project, index) => {
              return (
                <div className="repo-card-div" key={index}>
                  <div className="repo-name-div">
                    <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 12 16" width="12" className="repo-svg">
                      <path
                        fillRule="evenodd"
                        d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                      ></path>
                    </svg>
                    <p className="repo-name">{project.name}</p>
                  </div>
                  <p className="repo-description">{project.description}</p>
                  <div className="repo-stats">
                    <div className="repo-left-stat">
                      {
                        project.techStack.map((stack, index) => {
                          return (
                            <span key={index}>
                              <div className="language-color" style={{ backgroundColor: stack.color }}></div>
                              <p>{stack.name}</p>
                            </span>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className="storeUrls">
                    {
                      project.webUrl ?
                        <span onClick={() => window.open(project.webUrl, '_system')} className="storeLink">
                          <i className="fas fa-external-link-alt"></i>
                        </span> : null
                    }
                    {
                      project.playStoreUrl ?
                        <span onClick={() => window.open(project.playStoreUrl, '_system')} className="storeLink">
                          <i className="fab fa-google-play"></i>
                        </span> : null
                    }
                    {
                      project.appStoreUrl ?
                        <span onClick={() => window.open(project.appStoreUrl, '_system')} className="storeLink">
                          <i className="fab fa-app-store"></i>
                        </span> : null
                    }
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
