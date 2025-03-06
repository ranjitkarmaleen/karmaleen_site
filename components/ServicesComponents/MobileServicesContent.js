import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import webImg from "/public/images/karma-service/mobile_development.svg";
import ContactModal from "./ContactModal";


const MobileServicesContent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="iot-main-banner pt-0 mt-5 pb-4">
                <div className="container">
                    <div className="iot-banner-content" style={{ maxWidth: "600px" }}>
                        <h2
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="500"
                            data-aos-once="true"
                        >
                            {/* <span className="text-[#E04826] text-[40px]">Empowering</span>
                         Businesses with Devoted <span className="text-[#E04826]">Karma.</span> */}
                            Crafting High-Impact Web Solutions to Elevate Your Project in the Digital Landscape.
                        </h2>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="500"
                            data-aos-once="true"
                        >
                            In today’s mobile-first world, having a powerful app is essential for
                            business success. At KarmaLeen, we specialize in mobile app development,
                            creating high-performance applications that enhance your brand’s reach and
                            user engagement.
                        </p>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="500"
                            data-aos-once="true"
                        >
                            Our expert developers excel in both iOS and Android platforms,
                            mastering front-end and back-end technologies with deep database
                            expertise. Whether you're a startup launching your first app or
                            an established business optimizing your mobile presence, we offer
                            end-to-end solutions—from intuitive UX/UI design to scalable, secure architectures.
                        </p> <p
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="500"
                            data-aos-once="true"
                        >
                            Partner with us to build dynamic,
                            user-friendly mobile apps that deliver
                            seamless experiences—all at competitive pricing.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn btn-primary"
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="500"
                            data-aos-once="true"
                        >
                            Get Free Consultations →
                        </button>
                    </div>

                    <div className="iot-banner-image1"
                    >
                        <Image
                            src={webImg}
                            className="mt-0"
                            alt="image"
                            width={650}
                            height={400}
                        />
                    </div>

                </div>
            </div>
            {/* Contact Modal */}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}

export default MobileServicesContent