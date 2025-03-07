import Footer from '@/components/_App/Footer'
import Navbar from '@/components/_App/Navbar'
import Partner from '@/components/MachineLearning/Partner'
import Banner from '@/components/ServicesComponents/Banner'
import CallToActionWeb from '@/components/ServicesComponents/CallToActionWeb'
import ServiceContent from '@/components/ServicesComponents/ServiceContent'
import WebDevProcess from '@/components/ServicesComponents/WebDevProcess'
import WebServices from '@/components/ServicesComponents/WebServices'
import WebTechLogos from '@/components/ServicesComponents/WebTechLogos'
import ReviweSection from "@/components/Common/ReviweSection";
import ContactForm from '@/components/Contact/ContactForm'
import { useState } from 'react'

const WebApplicationDevelopments = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (

        <>
            <Navbar isOpen={isModalOpen} onClose={(v) => setIsModalOpen(v)} />
            <Banner />
            <Partner />
            <ServiceContent />
            <WebServices />
            <CallToActionWeb />
            <WebTechLogos />
            <WebDevProcess />
            <ReviweSection />
            <ContactForm />
            <Footer />
        </>
    )
}

export default WebApplicationDevelopments