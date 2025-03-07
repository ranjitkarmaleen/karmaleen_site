import React, { useState } from 'react'
import Footer from '@/components/_App/Footer'
import Navbar from '@/components/_App/Navbar'
import DeveloperHireBanner from '@/components/ServicesComponents/DeveloperHireBanner'
import Partner from '@/components/MachineLearning/Partner'
import DeveloperServiceContent from '@/components/ServicesComponents/DeveloperServiceContent'
import ContactForm from '@/components/Contact/ContactForm'
import ReviweSection from "@/components/Common/ReviweSection";
import CallToActionWeb from '@/components/ServicesComponents/CallToActionWeb'


const HiringDeveloper = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Navbar isOpen={isModalOpen} onClose={(v) => setIsModalOpen(v)} />
            <DeveloperHireBanner />
            <Partner />
            <DeveloperServiceContent />
            <CallToActionWeb />
            <ReviweSection />
            <ContactForm />
            <Footer />
        </>
    )
}

export default HiringDeveloper