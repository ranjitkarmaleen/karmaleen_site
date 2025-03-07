import React, { useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ProjectsDetailsContent from "@/components/Projects/ProjectsDetailsContent";

const ProjectsDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isModalOpen} onClose={(v) => setIsModalOpen(v)} />

      <PageBanner pageTitle="Projects Details" />

      <ProjectsDetailsContent />

      <Footer />
    </>
  );
};

export default ProjectsDetails;
