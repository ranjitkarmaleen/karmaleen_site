import Footer from '@/components/_App/Footer';
import Navbar from '@/components/_App/Navbar';
import caseData from '@/components/Blog/caseStudyData';
import CaseStudyDetails from '@/components/Blog/CaseStudyDetails';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const CaseDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Find the blog data based on ID
    const caseStudies = caseData.find(blog => blog.id == id);
    return (
        <>
            <Navbar isOpen={isModalOpen} onClose={(v) => setIsModalOpen(v)} />
            {caseStudies ? <CaseStudyDetails caseStudies={caseStudies} /> : <p>Case studies not found</p>}
            <Footer />
        </>
    )
}

export default CaseDetails