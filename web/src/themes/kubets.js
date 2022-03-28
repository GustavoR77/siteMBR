import React, { Component } from "react";

import Header from "../components/Kubets/HeaderKubets";
import HeroSection from "../components/Kubets/HeroSectionKubets";
import AboutSection from "../components/Kubets/AboutKubets";
import Step1 from "../components/Kubets/Step1";
import Step2 from "../components/Kubets/Step2";
import Step3 from "../components/Kubets/Step3";
import Screenshots from "../components/Kubets/Screenshots";
import FooterSection from "../components/Footer";

class Kubets extends Component {
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
        <FooterSection background="url('img/games/kubets/background-footer.png')" mobile="url('img/games/kubets/background-footer-mobile.png')" />
      </>
    );
  }
}

export default Kubets;
