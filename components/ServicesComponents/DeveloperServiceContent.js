import React from "react";
import Link from "next/link";
import Image from "next/image";
import webImg from "/public/images/karma-service/developer1.svg";


const DeveloperServiceContent = () => {
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
                        Supercharge your development process with KarmaLeen’s Dedicated Developers.
                        Whether you need front-end, back-end, full-stack, mobile app, or DevOps specialists,
                        our highly skilled and certified developers seamlessly integrate into your team,
                        ensuring efficient, high-quality, and cost-effective solutions.
                    </p>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="500"
                        data-aos-once="true"
                    >
                        Choose hourly, part-time, or full-time engagement based on your needs.
                        Reduce development costs by up to 40% while maintaining top-tier quality.
                        We follow agile methodologies for efficient and timely project delivery.
                    </p>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="500"
                        data-aos-once="true"
                    >
                        Whether you need a single developer or a team of specialists,
                        KarmaLeen provides top-notch professionals to meet your project requirements.
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

export default DeveloperServiceContent