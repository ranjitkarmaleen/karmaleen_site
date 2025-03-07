import React, { useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import FeatureDetailsContent from "@/components/Features/FeatureDetailsContent";

const FeatureDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isModalOpen} onClose={(v) => setIsModalOpen(v)} />

      <PageBanner pageTitle="Feature Details" />

      <FeatureDetailsContent />

      <Footer />
    </>
  );
};

export default FeatureDetails;
