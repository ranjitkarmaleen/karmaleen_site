import React, { useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";
import CommonBanner from "@/components/Common/CommonBanner";
import ReviweSection from "@/components/Common/ReviweSection";
import OurServices from '@/components/IOT/OurServices'
import ContactQuery from '@/components/IOT/ContactQuery'

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isModalOpen} onClose={(v) => setIsModalOpen(v)} />
      <CommonBanner title="Contact Us" />
      <ContactInfo />
      <ContactForm />
      <OurServices />
      <ReviweSection />
      <ContactQuery />
      <Footer />
    </>
  );
};

export default Contact;
