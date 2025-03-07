import React, { useState } from "react";
import Navbar from "@/components/_App/Navbar";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Footer from "@/components/_App/Footer";
import AboutUsContent1 from "@/components/AboutUs/AboutUsContent1";
import AboutMission from "@/components/AboutUs/AboutMission";
import AboutBanner from "@/components/AboutUs/AboutBanner";
import OurServices from "@/components/IOT/OurServices";
import ReviweSection from "@/components/Common/ReviweSection";
import ContactQuery from "@/components/IOT/ContactQuery";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isModalOpen} onClose={(v) => setIsModalOpen(v)} />
      <AboutBanner />
      <AboutUsContent1 />
      <FunFactsArea />
      <AboutMission />
      <OurServices />
      <ReviweSection />
      <ContactQuery />
      <Footer />
    </>
  );
};

export default About;
