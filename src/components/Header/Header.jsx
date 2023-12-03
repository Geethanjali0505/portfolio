import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <h1>Portfolio</h1>
        </Link>
        <div className={toggleMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            {["About", "Skills", "Contact"].map((item) => (
              <li className="nav__item">
                <Link className="nav__link" to={`/${item.toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <FaTimes size="20" className="nav__close" onClick={()=>setToggleMenu(!toggleMenu)}/>
        </div>
        <div className="nav__toggle" onClick={()=>setToggleMenu(!toggleMenu)}>
          <FaBars size="20" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
