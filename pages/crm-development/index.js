import Footer from '@/components/_App/Footer'
import Navbar from '@/components/_App/Navbar'
import BannerForCRM from '@/components/ServicesComponents/BannerForCRM'
import CRMServiceContent from '@/components/ServicesComponents/CRMServiceContent'
import CRMServices from '@/components/ServicesComponents/CRMServices'
import PartnerCrm from '@/components/ServicesComponents/PartnerCrm'
import React, { useState } from 'react'
import CallToActionWeb from '@/components/ServicesComponents/CallToActionWeb'
import ReviweSection from "@/components/Common/ReviweSection";
import ContactForm from '@/components/Contact/ContactForm'
import CrmLogos from '@/components/ServicesComponents/CrmTechLogos'


const CrmDevelopment = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Navbar isOpen={isModalOpen} onClose={(v) => setIsModalOpen(v)} />
            <BannerForCRM />
            <PartnerCrm />
            <CRMServiceContent />
            <CRMServices />
            <CallToActionWeb />
            <CrmLogos />
            <ReviweSection />
            <ContactForm />
            <Footer />
        </>
    )
}

export default CrmDevelopment