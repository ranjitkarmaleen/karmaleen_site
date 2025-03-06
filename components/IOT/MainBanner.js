import React, { useState } from "react";
import Image from "next/image";
import bannerImg from "/public/images/tech-image.png";
import ContactModal from "../ServicesComponents/ContactModal";
import Link from "next/link";

const MainBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="iot-main-banner">
        <div className="container">
          <div className="iot-banner-content">
            {/* <span
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Internet of Things
            </span> */}

            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <span className="text-[#E04826]" style={{ fontSize: "28px" }}>Empowering</span> Businesses with Devoted <span className="text-[#E04826]" style={{ fontSize: "28px" }}>Karma.</span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              KarmaLeen is built on the foundation of dedication, innovation,
              and ethical service. Empowering businesses with devoted karma,
              we blend technology with purpose to create impactful solutions
              that drive growth and efficiency.
            </p>

            <Link
              href="/contact"
              className="btn btn-primary"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Get Started
            </Link>

            {/* <button
              className="btn btn-primary"
              onClick={() => setIsModalOpen(true)}
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Get Started
            </button> */}
          </div>

          <div className="iot-banner-image">
            {/* <Image
              src={bannerImg}
              className="animate__animated animate__fadeInUp animate__delay-0.8s"
              alt="image"
              width={837}
              height={447}
            />

            <Image
              src={iotShape1}
              className="animate__animated animate__zoomIn"
              alt="image"
              width={247}
              height={247}
            /> */}

            <Image
              src={bannerImg}
              className="animate__animated animate__fadeInUp animate__delay-0.8s"
              alt="image"
              width={650}
              height={400}
            />
          </div>

          <div className="animate-border">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* Contact Modal */}
        {/* <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
      </div>
    </>
  );
};

export default MainBanner;
