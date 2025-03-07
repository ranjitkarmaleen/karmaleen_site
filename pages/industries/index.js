import Footer from '@/components/_App/Footer'
import Navbar from '@/components/_App/Navbar'
import PageBanner from '@/components/Common/PageBanner'
import React, { useState } from 'react'

const Industries = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Navbar isOpen={isModalOpen} onClose={(v) => setIsModalOpen(v)} />

            <PageBanner pageTitle="Industries" />

            <Footer />
        </>
    )
}

export default Industries