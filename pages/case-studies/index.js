import Footer from '@/components/_App/Footer'
import Navbar from '@/components/_App/Navbar'
import BlogGridPost3 from '@/components/Blog/BlogGridPostStyle3'
import CommonBanner from '@/components/Common/CommonBanner'
import React from 'react'
import ReviweSection from "@/components/Common/ReviweSection";
import OurServices from '@/components/IOT/OurServices'
import ContactQuery from '@/components/IOT/ContactQuery'


const CaseStudies = () => {
    return (
        <>
            <Navbar />

            <CommonBanner title="Case Studies" />

            <BlogGridPost3 />
            <OurServices />
            <ReviweSection />
            <ContactQuery />
            <Footer />
        </>
    )
}

export default CaseStudies