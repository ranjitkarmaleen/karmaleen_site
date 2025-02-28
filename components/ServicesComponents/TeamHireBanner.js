
import React, { useState } from 'react'
import webImg from "/public/images/karma-service/teamhire.svg";
import Image from 'next/image';
import ContactModal from './ContactModal';

const TeamHireBanner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="web-dev-white"></div>
            <div className="web-dev-container">
                <div className="content-wrapper">
                    <div className="text-content">
                        <h1 className="title">

                            Hire Dedicated development team
                            – <span className="highlight"> KarmaLeen </span>

                        </h1>
                        <p className="description">
                            In today’s fast-paced digital world, having a reliable and experienced development team is essential
                            for success. At KarmaLeen, we provide dedicated development teams tailored to your
                            project’s unique requirements. Whether you need web developers, mobile app experts,
                            UI/UX designers, or backend engineers, we have the right talent to bring your vision
                            to life.
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

export default TeamHireBanner