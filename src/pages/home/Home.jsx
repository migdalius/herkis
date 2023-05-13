import React from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Around from "../../components/around/Around";
import MainTitle from "../../components/mainTitle/MainTitle";
import Slide from "../../components/slide/Slide";
import { cards } from "../../data";
import Why from "../../components/why/Why";
import MobileApp from "../../components/app/MobileApp";
import Footer from "../../components/footer/Footer";
import CatCard from "../../components/catCard/CatCard";

const Home = () => {
  return (
    <>
      <Hero />
      <Around />
      <MainTitle />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <Why />
      <MobileApp />
    </>
  );
};

export default Home;
