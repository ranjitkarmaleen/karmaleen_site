import Footer from '@/components/_App/Footer'
import Navbar from '@/components/_App/Navbar'
import PageBanner from '@/components/Common/PageBanner'
import PortfolioList from '@/components/Projects/PortfolioList'
import React from 'react'

const Portfolio = () => {



    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Our featured work Portfolio" />

            <PortfolioList />


            <Footer />
        </>
    )
}

export default Portfolio