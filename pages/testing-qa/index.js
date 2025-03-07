import Footer from '@/components/_App/Footer'
import Navbar from '@/components/_App/Navbar'
import React, { useState } from 'react'
import ReviweSection from "@/components/Common/ReviweSection";
import CallToActionWeb from '@/components/ServicesComponents/CallToActionWeb'
import ContactForm from '@/components/Contact/ContactForm'
import Partner from '@/components/MachineLearning/Partner'
import TeamServiceContent from '@/components/ServicesComponents/TeamServiceContent'
import QaTestingBanner from '@/components/ServicesComponents/QaTestingBanner'


const TestingAndQa = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Navbar isOpen={isModalOpen} onClose={(v) => setIsModalOpen(v)} />
            {/* <PageBanner pageTitle="Testing And QA" /> */}
            <QaTestingBanner />
            <Partner />
            <TeamServiceContent />
            <CallToActionWeb />
            <ReviweSection />
            <ContactForm />
            <Footer />
        </>
    )
}

export default TestingAndQa