import Footer from '@/components/_App/Footer'
import Navbar from '@/components/_App/Navbar'
import ContactForm from '@/components/Contact/ContactForm'
import Partner from '@/components/MachineLearning/Partner'
import TeamHireBanner from '@/components/ServicesComponents/TeamHireBanner'
import TeamServiceContent from '@/components/ServicesComponents/TeamServiceContent'
import React from 'react'
import ReviweSection from "@/components/Common/ReviweSection";
import CallToActionWeb from '@/components/ServicesComponents/CallToActionWeb'


const TeamHiring = () => {
    return (
        <>
            <Navbar />
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