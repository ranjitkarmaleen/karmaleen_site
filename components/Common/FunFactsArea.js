import React from "react";
import Link from "next/link";
import Image from "next/image";

import map from "/public/images/map.png";

const FunFactsArea = () => {
  return (
    <>
      <div className="funfacts-area ptb-80">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2 className="mb-2">Continuously adding more into it </h2>
            {/* <div className="bar"></div> */}
            <p>
              We believe in a quality-driven approach and continuously grow in our endeavor to deliver excellence.
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="funfact">
                <h3>150+</h3>
                <p>Projects</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="funfact">
                <h3>30+</h3>
                <p>Developers</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="funfact">
                <h3>6+</h3>
                <p>Years of Experience</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="funfact">
                <h3>10+</h3>
                <p>Countries server globally</p>
              </div>
            </div>
          </div>

          {/* <div
            className="contact-cta-box"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h3>Have any question about us?</h3>
            <p>Don't hesitate to contact us</p>

            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div> */}

          <div className="map-bg">
            <Image src={map} alt="map" width={910} height={443} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFactsArea;
