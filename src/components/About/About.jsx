import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <h2 className="section__title">Who Am I?</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <span className="section__subtitle">  
          I'm a full stack .net developer based in Virginia, and I'm very
          passionate and dedicated to my work.
        </span>
        <div className="about__info grid">
          <div className="about__box">
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">
              I have over 10 years of experience in building applications using
              .net stack.
            </span>
          </div>
          <div className="about__box">
            <h3 className="about__title">Education</h3>
            <span className="about__subtitle">
              Bachelot's degree in computer science.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
