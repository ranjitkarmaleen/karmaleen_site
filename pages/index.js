import React from "react";
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/IOT/MainBanner";
import PartnerStyleTwo from "@/components/Common/PartnerStyleTwo";
import OurServices from "@/components/IOT/OurServices";
import Cta from "@/components/IOT/Cta";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Features from "@/components/IOT/Features";
import TeamStyleTwo from "@/components/Common/TeamStyleTwo";
import Feedback from "@/components/Common/Feedback";
import WhyWeAreBest from "@/components/IOT/WhyWeAreBest";
import BlogPost from "@/components/Common/BlogPost";
import Footer from "@/components/_App/Footer";
import ContactQuery from "@/components/IOT/ContactQuery";
import ReviweSection from "@/components/Common/ReviweSection";

const Index = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

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
