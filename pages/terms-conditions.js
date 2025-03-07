import React, { useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import TermsConditionsContent from "@/components/TermsConditions/TermsConditionsContent";

const TermsConditions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isModalOpen} onClose={(v) => setIsModalOpen(v)} />

      <PageBanner pageTitle="Term & Condition" />

      <TermsConditionsContent />

      <Footer />
    </>
  );
};

export default TermsConditions;
