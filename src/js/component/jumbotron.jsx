import React from "react";

const Jumbotron = () => {
  return (
    <>
      <div className="container">
        <div className="mt-4 p-5 bg-light text-dark">
          <h1>A Warm Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary" href="#">
              Call to Action!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Jumbotron;
