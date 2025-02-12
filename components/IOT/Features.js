import React from "react";
import Link from "next/link";
import Image from "next/image";

import featureImg1 from "/public/images/iot-features-image/iot-feature-image1.png";
import featureImg2 from "/public/images/iot-features-image/iot-feature-image2.png";

const Features = () => {
  return (
    <>
      <div className="iot-features-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 iot-features-content">
              <h3>Accelarate your product development by 3X</h3>
              <p>
                Supercharge your product development with AI and accelerate time-to-market by 3X.
                Leverage automation, intelligent insights, and rapid iterations to build high-quality
                solutions faster. Reduce development costs while enhancing efficiency and innovation.
                Stay ahead of the competition with AI-driven workflows. Transform your ideas into reality
                at lightning speed!
              </p>

              {/* <Link href="#" className="btn btn-primary">
                Explore More
              </Link> */}
            </div>

            <div
              className="col-lg-6 iot-features-image"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <Image src={featureImg1} alt="image" width={499} height={370} />
            </div>
          </div>
        </div>
      </div>

      <div className="iot-features-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 iot-features-image"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <Image src={featureImg2} alt="image" width={474} height={433} />
            </div>

            <div className="col-lg-6 iot-features-content">
              <h3>Custom CRM development</h3>
              <p>
                Unlock the power of a tailored CRM designed to fit your unique business needs.
                Automate workflows, streamline operations, and enhance customer interactions with a fully
                customized solution. Integrate seamlessly with your existing tools for a unified experience.
                Gain AI-driven insights to boost efficiency and drive growth. Empower your team with a CRM built for success!

              </p>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus.
              </p>

              <Link href="#" className="btn btn-primary">
                Explore More
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
