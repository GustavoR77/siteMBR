import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSection5";
import PromoSection from "../components/PromoSection/Promo2";
import AboutSection from "../components/AboutUs/AboutUs5";
import FeatureSection from "../components/Features/Feature2";
import Video from "../components/Video/index";
import PricingSection from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Screenshots from "../components/Screenshots/index";
import Products from "../components/Products";
import ContactSection from "../components/Contact";
import Contact2 from "../components/Contact/index copy";
import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
import TeamCarousel from "../components/Members/TeamCarousel";
import FooterSection from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          <AboutSection background=""/>
          <Video background=""/>
          {/* <PromoSection removeTopMargin={true} />
          <FeatureSection bgColor="blue" />
          <PricingSection hideFaq={true} />
          <Testimonial bgColor="blue" /> */}
          <Screenshots background=""/>
          <Products background="blue-gray2-bg"/>
          {/* <TeamMembers bgColor="blue" /> */}
          <TeamCarousel background=""/>
          <ContactSection background="" />
          <TrustedCompany background="" />
        </div>
        <FooterSection noSubscription={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
