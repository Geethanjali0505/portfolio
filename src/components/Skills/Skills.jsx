import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills__content">
      <h2 className="section__title">Skills</h2>      
      <span className="section__subtitle">Technical details</span>
      <div className="skills__container container">
        <div className="skills__box">
          <h3 className="skill__title">Front End</h3>
          <ul className="skill__name">
            <li>React</li>
            <li>Angular</li>
            <li>Typescript</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="skills__box">
          <h3 className="skill__title">Back End</h3>
          <ul className="skill__name">
            <li>.Net Core</li>
            <li>.Net</li>
            <li>C#</li>
            <li>ASP.NET Web API</li>
            <li>WCF</li>
          </ul>
        </div>
        <div className="skills__box">
          <h3 className="skill__title">Database</h3>
          <ul className="skill__name">
            <li>MS SQL</li>
            <li>Cosmos DB</li>
          </ul>
        </div>{" "}
        <div className="skills__box">
          <h3 className="skill__title">Version Control</h3>
          <ul className="skill__name">
            <li>DevOps/VSTS/TFS</li>
            <li>GIT</li>
            <li>SVN</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
