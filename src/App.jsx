import React from "react";
import { useState } from "react";
import reactLogo from "./assets/srxuz.svg";
import "../src/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Header from "./components/header/Header";
import Showcase from "./components/showcase/Showcase";
import Partners from "./components/partners/Partners";
import Feature from "./components/feature/Feature";
import Steps from "./components/steps/Steps";
import Explore from "./components/explore/Explore";
import Testimonals from "./components/testimonals/Testimonals";
import Talents from "./components/talents/Talents";
import Foot from "./components/footer/Foot";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Showcase />
      <Partners />
      <Feature />
      <Steps />
      <Explore />
      <Testimonals />
      <Talents />
      <Foot />
    </div>
  );
}

export default App;
