import React from "react";
import Link from "next/link";
import Image from "next/image";
import webImg from "/public/images/karma-service/teamhire1.svg";


const TeamServiceContent = () => {
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
                        Hire the best team from KarmaLeen and take your project to the next level. </h2>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="500"
                        data-aos-once="true"
                    >
                        Boost your software development with KarmaLeen’s Dedicated Development Team.
                        We provide highly skilled IT professionals to enhance your team’s capabilities,
                        accelerate project delivery, and ensure seamless execution. Our experts integrate
                        effortlessly with your in-house team, bringing expertise in web & mobile development,
                        UI/UX design, DevOps, and quality assurance.
                    </p>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="500"
                        data-aos-once="true"
                    >
                        With a vast talent pool of certified developers, business analysts, project managers, and
                        QA engineers, we empower your business with scalable, cost-effective solutions that drive
                        success.
                    </p>

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
                        className="mt-5"
                        alt="image"
                        width={650}
                        height={400}
                    />
                </div>

            </div>
        </div>
    )
}

export default TeamServiceContent