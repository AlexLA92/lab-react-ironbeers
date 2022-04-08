import React from "react";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
import HomeSection from "../components/home/HomeSection";

function Home() {
  return (
    <>
      <HomeSection
        target="/beers"
        image={beers}
        title="All Beers"
        description="Duis incididunt in ad laborum ut commodo Lorem fugiat magna esse in laborum magna nulla. Ad duis labore sunt ipsum in fugiat aliquip excepteur. Voluptate cupidatat ex minim occaecat sit eu tempor commodo deserunt adipisicing culpa nostrud reprehenderit."
      />
      <HomeSection
        target="/random-beer"
        image={randomBeer}
        title="Random Beer"
        description="Duis incididunt in ad laborum ut commodo Lorem fugiat magna esse in laborum magna nulla. Ad duis labore sunt ipsum in fugiat aliquip excepteur. Voluptate cupidatat ex minim occaecat sit eu tempor commodo deserunt adipisicing culpa nostrud reprehenderit."
      />
      <HomeSection
        target="/new-beer"
        image={newBeer}
        title="New Beer"
        description="Duis incididunt in ad laborum ut commodo Lorem fugiat magna esse in laborum magna nulla. Ad duis labore sunt ipsum in fugiat aliquip excepteur. Voluptate cupidatat ex minim occaecat sit eu tempor commodo deserunt adipisicing culpa nostrud reprehenderit."
      />
    </>
  );
}

export default Home;
