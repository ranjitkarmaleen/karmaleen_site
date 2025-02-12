import React from "react";
import Link from "next/link";
import Image from "next/image";

import ctaShape from "/public/images/cta-shape.png";
import ctaShape2 from "/public/images/cta-shape2.png";
import circle from "/public/images/circle.png";

const Cta = () => {
  return (
    <>
      <div className="iot-cta-area bg-0f054b">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="cta-iot-img">
                <Image src={ctaShape2} alt="image" width={648} height={401} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="cta-iot-content">
                <h3>Softare development technology</h3>
                <p>
                  3T Principle: Building Success with Trust, Transparency, and Team Spirit.
                </p>
                <p>
                  At Karmaleen, our 3T Motto—Trust, Transparency, and Team Spirit—drives everything we do. We build long-lasting relationships based on honesty, ensuring clear communication and mutual respect. With a strong collaborative spirit, we empower teams to innovate, grow, and succeed together.
                </p>

                {/* <Link href="/contact" className="btn btn-primary">
                  Get Started!
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        <div className="circle-box">
          <Image src={circle} alt="image" width={256} height={507} />
        </div>
        <div className="cta-shape">
          <Image src={ctaShape} alt="image" width={421} height={401} />
        </div>
      </div>
    </>
  );
};

export default Cta;
