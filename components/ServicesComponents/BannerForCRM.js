
import React, { useState } from 'react'
import webImg from "/public/images/karma-service/CRM.svg";
import Image from 'next/image';
import ContactModal from './ContactModal';
const BannerForCRM = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="web-dev-white"></div>
            <div className="web-dev-container">
                <div className="content-wrapper">
                    <div className="text-content">
                        <h1 className="title">

                            Customization, Integration & Automation
                            – <span className="highlight"> KarmaLeen CRM Solutions </span>

                        </h1>
                        <p className="description">
                            Unlock the full potential of your CRM with KarmaLeen’s expert services.
                            We specialize in CRM customization, integration, migration, implementation,
                            automation, and workflow optimization to help businesses maximize efficiency.
                            Our team ensures seamless CRM development, API integrations, and ongoing support
                            & maintenance tailored to your unique needs. Whether you're looking to enhance
                            an existing CRM or build custom solutions, KarmaLeen empowers you to streamline
                            operations and scale with confidence.
                        </p>
                        <div className="ratings">
                            <h5>Our 3T Principal</h5>
                            <ul className="ratings-list">
                                <li><span className="checkmark">✔</span> Trust</li>
                                <li><span className="checkmark">✔</span> Transparency</li>
                                <li><span className="checkmark">✔</span> Team Spirit</li>
                            </ul>
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className="cta-button btn btn-primary">Let’s Work Together →</button>
                    </div>
                    <div className="image-content" style={{ maxWidth: '65%' }}>
                        <Image
                            src={webImg}
                            alt="Web Development"
                            className="web-dev-image"
                            width={700}
                            height={500}
                        />
                    </div>
                </div>
                <div className="trusted-section">
                    <h2 className="trusted-title">
                        Trusted by 100+ Start Up, SME’s and Enterprise.
                    </h2>
                    <p className="trusted-description mt-3">
                        Empowering businesses of all sizes with innovative,
                        scalable, and reliable solutions that drive growth and success.
                    </p>
                </div>
            </div>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </>
    )
}

export default BannerForCRM