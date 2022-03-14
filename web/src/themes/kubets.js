import React, { Component } from "react";

import Header from "../components/MagicClub/HeaderMagicClub";
import HeroSection from "../components/MagicClub/HeroSectionMagicClub";
import AboutSection from "../components/MagicClub/AboutMagicClub";
import Books from "../components/MagicClub/Books"
import Projects from "../components/MagicClub/Projects";
import Activities from "../components/MagicClub/Activities";
import Materials from "../components/MagicClub/Materials";
import Gamefication from "../components/MagicClub/Gamefication";
import Screenshots from "../components/MagicClub/Screenshots";
import Personalization from "../components/MagicClub/Personalization";
import Capacitation from "../components/MagicClub/Capacitation";
import FooterSection from "../components/MagicClub/FooterMagicClub";

class Kubets extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main">
          <HeroSection />
          <AboutSection background="white-bg"/>
          <Books />
          <Projects background="white-bg"/>
          <Activities />
          <Materials background="white-bg"/>
          <Gamefication />
          <Screenshots background="white-bg"/>
          <Personalization />
          <Capacitation background="white-bg"/>
        </div>
        <FooterSection noSubscription={true} />
      </>
    );
  }
}

export default Kubets;
