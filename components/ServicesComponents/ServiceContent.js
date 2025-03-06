import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import webImg from "/public/images/karma-service/web-content.svg";
import ContactModal from "./ContactModal";


const ServiceContent = () => {
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
                            In today’s fast-paced digital world, having a strong online presence is
                            no longer optional—it’s a necessity. At KarmaLeen, we specialize in
                            professional web development services that help businesses of all sizes
                            establish a powerful digital footprint and showcase their brand with
                            confidence.
                        </p>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="500"
                            data-aos-once="true"
                        >
                            Our team of certified developers excels in both front-end and back-end technologies,
                            along with deep expertise in database management. Whether you're a startup looking
                            to launch or an established business aiming to enhance your web presence, we provide
                            end-to-end solutions, from seamless UX/UI design to scalable backend architecture.
                        </p> <p
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="500"
                            data-aos-once="true"
                        >
                            Partner with us to build dynamic, user-friendly web solutions tailored to your
                            needs—all at competitive pricing.
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
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}

export default ServiceContent