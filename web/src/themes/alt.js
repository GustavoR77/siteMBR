import React, { Component } from "react";

import Header from "../components/Alt/HeaderAlt";
import HeroSection from "../components/Alt/HeroSectionAlt";
import AboutSection from "../components/Alt/AboutAlt";
import Method from "../components/Alt/Method"
import Technology from "../components/Alt/Technology";
import Activity from "../components/Alt/Activity";
import Screenshots from "../components/Alt/Screenshots";
import FooterSection from "../components/Alt/FooterMagicClub";

class Alt extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main">
          <HeroSection />
          <AboutSection background="white-bg"/>
          <Method />
          <Technology background="white-bg"/>
          <Activity />
          <Screenshots background="white-bg"/>
        </div>
        <FooterSection noSubscription={true} />
      </>
    );
  }
}

export default Alt;
