import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Around from "./components/around/Around";
import Slide from "./components/slide/Slide";
import CatCard from "./components/catCard/CatCard";

import { cards } from "../src/data";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Around />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
    </>
  );
}

export default App;
