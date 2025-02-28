import React from "react";
import Image from "next/image";

import aboutImg from "/public/images/karma-service/about-us.svg";

const AboutUsContent1 = () => {
  return (
    <>
      <div className="about-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src={aboutImg}
                  alt="image"
                  width={685}
                  height={494}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <h2 className="mb-3">About Us</h2>
                  {/* <div className="bar"></div> */}
                  <p>
                    <strong>Serving Best by Our Indeed devoted Karma</strong> — with this guiding philosophy,
                    KarmaLeen was founded with a vision to deliver top-tier software solutions tailored to
                    the unique needs of businesses. As a specialized software development company,
                    we focus on <strong>
                      CRM development, web development, mobile application development
                      and custom software solutions that drive efficiency, scalability, and innovation.
                    </strong>
                  </p>
                </div>

                {/* <p>
                  Unlike large-scale service providers, KarmaLeen takes a personalized and client-centric approach,
                  ensuring that every project receives the dedicated expertise it deserves. Our team consists
                  of highly skilled and experienced developers who are not only proficient in cutting-edge
                  technologies but are also deeply committed to solving complex business challenges through
                  technology.
                </p> */}
                <p>
                  From requirement gathering and in-depth analysis to architecture design, development, rigorous testing,
                  deployment, and ongoing maintenance, we meticulously handle each phase of the software development lifecycle.
                  We adhere to industry best practices, modern frameworks, and agile methodologies to ensure our solutions are robust, scalable, and future-ready.
                </p>

                <p>
                  At KarmaLeen, we don't just build software—we craft customized digital solutions that empower businesses to streamline
                  operations, enhance customer experiences, and achieve sustainable growth. Our commitment to excellence, transparency,
                  and reliability makes us the trusted technology partner for startups, SMEs, and enterprises worldwide.
                </p>

              </div>
            </div>
          </div>

          {/* <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Who We Are</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutUsContent1;
