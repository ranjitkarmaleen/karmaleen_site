import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ProjectsCardStyle1 from "@/components/Projects/ProjectsCardStyle1";
import ProjectsCardStyle2 from "@/components/Projects/ProjectsCardStyle2";
import NavbarStyleFour from "@/components/_App/NavbarStyleFour";
import NavbarStyleThree from "@/components/_App/NavbarStyleThree";

const Projects1 = () => {
  return (
    <>
      <NavbarStyleThree />

      <PageBanner pageTitle="Projects Style One" />

      <ProjectsCardStyle1 />
      <ProjectsCardStyle2 />

      <Footer />
    </>
  );
};

export default Projects1;
