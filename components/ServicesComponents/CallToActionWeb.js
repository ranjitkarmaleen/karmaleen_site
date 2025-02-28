import React, { useState } from "react";
import ContactModal from "./ContactModal"; // Import the modal component

const CallToActionWeb = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="cta-section">
                <div className="cta-container">
                    {/* Left Content */}
                    <div className="cta-text">
                        <h2>
                            Innovate, Scale, Succeed <br />
                            with <span className="highlight">KarmaLeen.</span>
                        </h2>
                        <p>
                            Our team is ready to discuss your project! Get in touch with our experts today.
                        </p>
                    </div>

                    {/* Right Button - Opens Modal */}
                    <div className="cta-button-container">
                        <button
                            className="cta-button btn btn-primary"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Get Free Consultation →
                        </button>
                    </div>
                </div>


            </section>
            {/* Contact Modal */}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default CallToActionWeb;
