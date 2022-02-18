import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSectionMagicClub";
import AboutSection from "../components/AboutUs/AboutMagicClub";
import Books from "../components/MagicClub/Books"
import Projects from "../components/MagicClub/Projects";
import Activities from "../components/MagicClub/Activities";
import Materials from "../components/MagicClub/Materials";
import Gamefication from "../components/MagicClub/Gamefication";
import Screenshots from "../components/MagicClub/Screenshots";
import Personalization from "../components/MagicClub/Personalization";
import Capacitation from "../components/MagicClub/Capacitation";
import FooterSection from "../components/Footer";

class MagicClub extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main">
          <HeroSection />
          <AboutSection />
          <Books />
          <Projects />
          <Activities />
          <Materials />
          <Gamefication />
          <Screenshots />
          <Personalization />
          <Capacitation />
        </div>
        <FooterSection noSubscription={true} />
      </>
    );
  }
}

export default MagicClub;
