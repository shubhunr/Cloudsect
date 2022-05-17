import React from "react";
import Home from "./Home";
import About from "./About";
//import { Route, Routes } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>

      {/*<Home />
        <About />*/}
    </>
  );
};

export default App;
