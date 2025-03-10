import React, { useState } from "react";
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/IOT/MainBanner";
import PartnerStyleTwo from "@/components/Common/PartnerStyleTwo";
import OurServices from "@/components/IOT/OurServices";
import Cta from "@/components/IOT/Cta";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Features from "@/components/IOT/Features";
import WhyWeAreBest from "@/components/IOT/WhyWeAreBest";
import Footer from "@/components/_App/Footer";
import ContactQuery from "@/components/IOT/ContactQuery";
import ReviweSection from "@/components/Common/ReviweSection";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isModalOpen} onClose={(v) => setIsModalOpen(v)} />

      <MainBanner isOpen={isModalOpen} onClose={(v) => setIsModalOpen(v)} />

      <PartnerStyleTwo />

      <OurServices />

      <Cta />

      <FunFactsArea />

      <Features />

      {/* <TeamStyleTwo /> */}
      <ReviweSection />


      <WhyWeAreBest />
      <ContactQuery />

      {/* <BlogPost /> */}

      <Footer />
    </>
  );
};

export default Index;
