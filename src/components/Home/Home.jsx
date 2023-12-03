import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <h1 className="home__title">Geethanjali</h1>
          <p className="home__description">Full stack Developer.</p>

          <Link to="/contact" className="button">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
