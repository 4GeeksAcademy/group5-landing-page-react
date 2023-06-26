import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-default bg-dark" role="navigation">
        <div className="container m-1">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          ></button>
          <a className="navbar-brand text-white" href="#">
            Welcome Page
          </a>
        </div>
        <div></div>
        <div className="collapse navbar-collapse navbar-right" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link text-white active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
