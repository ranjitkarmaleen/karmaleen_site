import React from "react";
import Link from "next/link";
import Image from "next/image";
import webImg from "/public/images/karma-service/mobile_development.svg";


const CRMServiceContent = () => {
    return (
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
                        One-stop solution for all kind of CRM needs
                    </h2>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="500"
                        data-aos-once="true"
                    >
                        At KarmaLeen, we specialize in delivering custom CRM solutions that align
                        perfectly with your business processes. Whether you need CRM customization,
                        implementation, or migration, our expert team ensures a seamless transition
                        while optimizing your workflows. We work with leading CRM platforms to enhance
                        functionality, automate repetitive tasks, and integrate third-party tools,
                        giving you a system that drives efficiency and growth. Our goal is to help you
                        leverage CRM technology to improve customer interactions, streamline operations,
                        and maximize productivity.
                    </p>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="500"
                        data-aos-once="true"
                    >

                        Managing a CRM is an ongoing process, and that’s where KarmaLeen’s expertise comes in.
                        We offer end-to-end CRM development, API integrations, and automation services to ensure
                        your system evolves with your business. Our team provides workflow optimization, custom module
                        development, and real-time data syncing to keep your operations running smoothly.
                        With our dedicated CRM support and maintenance, you get continuous improvements, issue resolution,
                        and system updates, ensuring long-term success. No matter your CRM needs, KarmaLeen is your trusted
                        partner for scalable and future-ready solutions.

                    </p>
                    {/* <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="500"
                        data-aos-once="true"
                    >
                        Partner with us to build dynamic,
                        user-friendly mobile apps that deliver
                        seamless experiences—all at competitive pricing.
                    </p> */}
                    <Link
                        href="/contact"
                        className="btn btn-primary"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="500"
                        data-aos-once="true"
                    >
                        Get Free Consultations →
                    </Link>
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
    )
}

export default CRMServiceContent