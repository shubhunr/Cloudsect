
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Home from "./Home";
import About from "./About";
import Team from "./Team";
import Service from "./Service";

import Contact from "./Contact";
import Navbar from "./Navbar";
import Card1 from "./Card1";
import Card2 from "./card2"


const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <About />
      <Team />
     
      <Service />
      <Contact />
      
    </>
  );
};

export default App;
