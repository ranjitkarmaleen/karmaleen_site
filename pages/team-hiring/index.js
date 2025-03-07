import Footer from '@/components/_App/Footer'
import Navbar from '@/components/_App/Navbar'
import ContactForm from '@/components/Contact/ContactForm'
import Partner from '@/components/MachineLearning/Partner'
import TeamHireBanner from '@/components/ServicesComponents/TeamHireBanner'
import TeamServiceContent from '@/components/ServicesComponents/TeamServiceContent'
import React, { useState } from 'react'
import ReviweSection from "@/components/Common/ReviweSection";
import CallToActionWeb from '@/components/ServicesComponents/CallToActionWeb'


const TeamHiring = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Navbar isOpen={isModalOpen} onClose={(v) => setIsModalOpen(v)} />
            <TeamHireBanner />
            <Partner />
            <TeamServiceContent />
            <CallToActionWeb />
            <ReviweSection />
            <ContactForm />
            <Footer />
        </>
    )
}

export default TeamHiring