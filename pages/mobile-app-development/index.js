import Footer from '@/components/_App/Footer'
import Navbar from '@/components/_App/Navbar'
import BannerForMobileApp from '@/components/ServicesComponents/BannerForMobileApp'
import MobileServices from '@/components/ServicesComponents/MobileServices'
import MobileServicesContent from '@/components/ServicesComponents/MobileServicesContent'
import React from 'react'
import CallToActionWeb from '@/components/ServicesComponents/CallToActionWeb'
import WebDevProcess from '@/components/ServicesComponents/WebDevProcess'
import ReviweSection from "@/components/Common/ReviweSection";
import ContactForm from '@/components/Contact/ContactForm'
import PartnerMobile from '@/components/ServicesComponents/PartnerMobile'
import MobileTechLogos from '@/components/ServicesComponents/MobileTechLogos'


const MobileAppDevelopment = () => {
    return (
        <>
            <Navbar />
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