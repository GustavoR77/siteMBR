import React, { Component } from "react";

import Header from "../components/Alt/HeaderMagicClub";
import HeroSection from "../components/Alt/HeroSectionAlt";
import AboutSection from "../components/Alt/AboutAlt";
import Books from "../components/Alt/Books"
import Projects from "../components/Alt/Projects";
import Activities from "../components/Alt/Activities";
import Materials from "../components/Alt/Materials";
import Gamefication from "../components/Alt/Gamefication";
import Screenshots from "../components/Alt/Screenshots";
import Personalization from "../components/Alt/Personalization";
import Capacitation from "../components/Alt/Capacitation";
import FooterSection from "../components/Alt/FooterMagicClub";

class Alt extends Component {
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

export default Alt;
