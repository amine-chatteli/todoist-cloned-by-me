import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage__main">
      <header className="homepage__header">
        <nav className="Homepage__navbar">
          <div className="homepage__logo">
            <Link className="homepage__logo__image" to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/homePageLogo.svg"}
                alt="logo"
              />
            </Link>
          </div>
          <div className="navbar__navigation">
            <ul className="navbar__links">
              <li className="navbar__link">
                <Link className="navbar__link__router" to="/login">
                  Login
                </Link>
              </li>
              <li className="navbar__link">
                <Link className="navbar__link__router" to="/register">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <section className="main__section">
        <div className="main__section__header">
          <h1 className="section__header__text">
            Organisez votre quotidien avec Todoist
          </h1>
        </div>
        <div className="main__section__image">
          <Link to="/register">
            <button className="section__header__button">Sign up</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
