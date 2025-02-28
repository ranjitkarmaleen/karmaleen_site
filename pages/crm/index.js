import Footer from '@/components/_App/Footer'
import Navbar from '@/components/_App/Navbar'
import BannerForCRM from '@/components/ServicesComponents/BannerForCRM'
import CRMServiceContent from '@/components/ServicesComponents/CRMServiceContent'
import CRMServices from '@/components/ServicesComponents/CRMServices'
import PartnerCrm from '@/components/ServicesComponents/PartnerCrm'
import React from 'react'
import CallToActionWeb from '@/components/ServicesComponents/CallToActionWeb'
import ReviweSection from "@/components/Common/ReviweSection";
import ContactForm from '@/components/Contact/ContactForm'
import CrmLogos from '@/components/ServicesComponents/CrmTechLogos'

const CRM = () => {
    return (
        <>
            <Navbar />
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

export default CRM