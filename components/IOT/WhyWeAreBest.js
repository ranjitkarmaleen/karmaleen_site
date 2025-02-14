import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import icon1 from "/public/images/icon1.png";
import icon2 from "/public/images/icon2.png";
import icon3 from "/public/images/icon3.png";

const WhyWeAreBest = () => {
  return (
    <>
      <div className="iot-why-choose-us pt-80">
        <div className="container">
          <div className="section-title">
            <h2 className="mb-2">Trusted by Start up, SME's and Enterprise</h2>
            {/* <div className="bar"></div> */}
            <p>
              Trusted by startups, SMEs, and enterprises worldwide, we deliver scalable and innovative solutions tailored to your business needs. From agile startups to established enterprises, our expertise ensures seamless growth and efficiency. Leverage our custom solutions to automate, optimize, and scale with confidence. Partner with us for cutting-edge technology and proven results. Your success is our priority!
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              <div className="single-iot-box h-100">
                <div className="icon">
                  <Image
                    src={icon1}
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>Startups</h3>
                <p>
                  Launch faster with agile, scalable solutions tailored for rapid growth.
                </p>
                {/* <Link href="/services/service-details/">
                  <Icon.ArrowRight />
                </Link> */}
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              <div className="single-iot-box h-100">
                <div className="icon">
                  <Image
                    src={icon2}
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>SMEs</h3>
                <p>
                  Optimize operations and scale efficiently with custom automation and CRM solutions.
                </p>
                {/* <Link href="/services/service-details/">
                  <Icon.ArrowRight />
                </Link> */}
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <div className="single-iot-box h-100">
                <div className="icon">
                  <Image
                    src={icon3}
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>Enterprise</h3>
                <p>
                  Power your business with robust, AI-driven solutions designed for performance and security.
                </p>
                {/* <Link href="/services/service-details/">
                  <Icon.ArrowRight />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyWeAreBest;
