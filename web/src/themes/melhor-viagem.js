import React, { Component } from "react";

import Header from "../components/MelhorViagem/HeaderMelhorViagem";
import HeroSection from "../components/MelhorViagem/HeroSectionMelhorViagem";
import AboutSection from "../components/MelhorViagem/AboutMelhorViagem";
import Step1 from "../components/MelhorViagem/Step1";
import Step2 from "../components/MelhorViagem/Step2";
import Step3 from "../components/MelhorViagem/Step3";
import Screenshots from "../components/MelhorViagem/Screenshots";
import FooterSection from "../components/MelhorViagem/FooterKubets";

class MelhorViagem extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main">
          <HeroSection />
          <AboutSection background="white-bg" />
          <Step1 background="white-bg" />
          <Step2 background="white-bg" />
          <Step3 background="white-bg" />
          <Screenshots background="white-bg" />
        </div>
        <FooterSection noSubscription={true} />
      </>
    );
  }
}

export default MelhorViagem;
