import React from "react";
import Hero from "./components/screen/Hero";
import Gallery from "./components/screen/Gallery";
import About from "./components/screen/About";

export default function App() {
  return (
    <React.Fragment>
      <Hero />
      <Gallery />
      <About />
      <section>4</section>
    </React.Fragment>
  );
}
