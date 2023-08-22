import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
