import React, { useState } from 'react'
import webImg from "/public/images/karma-service/webapp.svg";
import Image from 'next/image';
import ContactModal from './ContactModal';

const Banner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="web-dev-white"></div>
            <div className="web-dev-container">
                <div className="content-wrapper">
                    <div className="text-content">
                        <h1 className="title">
                            Web Development <br />Services
                            <span className="highlight"> KarmaLeen</span>
                        </h1>
                        <p className="description">
                            Our expertise lies in designing and building web-based
                            products that redefine industry standards. We focus on
                            innovation, seamless functionality, and visually compelling
                            experiences that drive customer satisfaction and business growth.
                        </p>
                        <div className="ratings">
                            <h5>Our 3T Principal</h5>
                            <ul className="ratings-list">
                                <li><span className="checkmark">✔</span> Trust</li>
                                <li><span className="checkmark">✔</span> Transparency</li>
                                <li><span className="checkmark">✔</span> Team Spirit</li>
                            </ul>
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className="mt-3 cta-button btn btn-primary">Let’s Work Together →</button>
                    </div>
                    <div className="image-content">
                        <Image
                            src={webImg}
                            alt="Web Development"
                            className="web-dev-image"
                            width={650}
                            height={400}
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

export default Banner;
