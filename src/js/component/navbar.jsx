import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark" id="navbar">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            Welcome Page
          </a>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                About
              </a>
              <a className="nav-link" href="#">
                Services
              </a>
              <a className="nav-link" href="#">
                Contacts
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
