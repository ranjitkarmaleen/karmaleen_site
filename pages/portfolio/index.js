import Footer from '@/components/_App/Footer'
import Navbar from '@/components/_App/Navbar'
import CommonBanner from '@/components/Common/CommonBanner'
import PortfolioList from '@/components/Projects/PortfolioList'
import React, { useState } from 'react'
import ReviweSection from "@/components/Common/ReviweSection";
import OurServices from '@/components/IOT/OurServices'
import ContactQuery from '@/components/IOT/ContactQuery'

const Portfolio = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <>
            <Navbar isOpen={isModalOpen} onClose={(v) => setIsModalOpen(v)} />

            {/* <PageBanner pageTitle="Our featured work Portfolio" /> */}

            <CommonBanner title="Portfolio" />

            <PortfolioList />
            <OurServices />
            <ReviweSection />
            <ContactQuery />
            <Footer />
        </>
    )
}

export default Portfolio