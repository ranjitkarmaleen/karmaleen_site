import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import ContactModal from '../ServicesComponents/ContactModal';

const CaseStudyDetails = ({ caseStudies }) => {
    console.log('caseStudies ==>', caseStudies);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(".content-section");
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({ top: section.offsetTop - 100, behavior: "smooth" });
        }
    };
    return (
        <>
            <div className="web-dev-white"></div>

            {/* Back Button */}
            <div className="web-dev-container">
                <div className="content-wrapper">
                    <button
                        className="btn btn-primary"
                        onClick={() => window.history.back()}
                        style={{ display: "flex", alignItems: "center", gap: "8px" }}
                    >
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11 2.5a.5.5 0 0 1 0 .707L6.207 8l4.793 4.793a.5.5 0 0 1-.708.707l-5.5-5.5a.5.5 0 0 1 0-.707l5.5-5.5a.5.5 0 0 1 .708 0z" />
                        </svg>
                        Case Studies
                    </button>
                </div>
            </div>
            {/* Blog Content */}
            <div className="web-dev-container">
                <div className="content-wrapper" style={{ paddingBottom: "80px", alignItems: "start" }}>
                    <div className="text-content">
                        <h1 className="title">{caseStudies?.title}</h1>
                    </div>
                    <div className="image-content">
                        <Image src={caseStudies?.image} alt={caseStudies?.title} width={650} height={400} priority />
                    </div>
                </div>
            </div>


            {/* Blog Layout */}
            <div className="blog-container" style={{ marginTop: "50px" }}>
                {/* Left Side - Blog Sections */}
                <div className="content-column">
                    {caseStudies?.sections.map((section, index) => (
                        <section key={index} id={section.id} className="content-section">
                            <h2>{section.title}</h2>
                            {/* Use dangerouslySetInnerHTML to render HTML content */}
                            <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        </section>
                    ))}
                </div>

                {/* Right Side - Sticky Navigation */}
                <div className="sticky-column">
                    <div className="sticky-card">
                        <h3>In This Post</h3>
                        <ul>
                            {caseStudies?.sections.map((section, index) => (
                                <li key={index} className={activeSection === section.id ? "active" : ""}>
                                    <a href={`#${section.id}`} onClick={(e) => handleLinkClick(e, section.id)}>
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Contact Modal */}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}

export default CaseStudyDetails