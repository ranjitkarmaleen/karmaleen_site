import Footer from '@/components/_App/Footer'
import Navbar from '@/components/_App/Navbar'
import BannerForMobileApp from '@/components/ServicesComponents/BannerForMobileApp'
import MobileServices from '@/components/ServicesComponents/MobileServices'
import MobileServicesContent from '@/components/ServicesComponents/MobileServicesContent'
import React, { useState } from 'react'
import CallToActionWeb from '@/components/ServicesComponents/CallToActionWeb'
import WebDevProcess from '@/components/ServicesComponents/WebDevProcess'
import ReviweSection from "@/components/Common/ReviweSection";
import ContactForm from '@/components/Contact/ContactForm'
import PartnerMobile from '@/components/ServicesComponents/PartnerMobile'
import MobileTechLogos from '@/components/ServicesComponents/MobileTechLogos'


const MobileAppDevelopment = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Navbar isOpen={isModalOpen} onClose={(v) => setIsModalOpen(v)} />
            <BannerForMobileApp />
            <PartnerMobile />
            <MobileServicesContent />
            <MobileServices />
            <CallToActionWeb />
            <MobileTechLogos />
            <WebDevProcess />
            <ReviweSection />
            <ContactForm />
            <Footer />
        </>
    )
}

export default MobileAppDevelopment