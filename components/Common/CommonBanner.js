import React, { useState } from 'react'
import ContactModal from '../ServicesComponents/ContactModal';

const CommonBanner = ({ title }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="web-dev-white"></div>
            <div className="web-dev-container">
                <div className="pb-4" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "auto",
                    textAlign: "center",
                    flexDirection: "column"
                }}>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#FFFFFF" }}>
                        {title}
                    </h1>
                    {/* <span style={{ color: "#E04826" }}>KarmaLeen Technology</span> */}
                    <p className='mb-0' style={{
                        fontSize: "1.2rem",
                        color: "#FFFFFF",
                        maxWidth: "600px",
                        marginTop: "10px",
                        textAlign: "center"  // Ensures text inside the <p> is centered
                    }}>
                        Serving Best by Our Indeed Devoted Karma
                    </p>
                    <button onClick={() => setIsModalOpen(true)} className="mb-4 cta-button btn btn-primary">
                        Let’s Connect →
                    </button>
                </div>

            </div>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}

export default CommonBanner