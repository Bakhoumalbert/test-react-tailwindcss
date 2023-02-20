import React from "react";
import { Carousel } from "./components/Carousel";
import { Destinations } from "./components/Destinations";
import { Foolder } from "./components/Foolder";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { Selects } from "./components/Selects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
      <Foolder />
    </div>
  );
}

export default App;
