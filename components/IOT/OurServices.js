import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const OurServices = () => {
  return (
    <>
      <div className="iot-services-area pt-80 pb-50">
        <div className="container justify-content-center">
          <div className="section-title">
            <h2>Our Featured Services that We Provide</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-repair-services">
                <div className="icon">
                  {/* <i className="flaticon-software"></i> */}
                  {/* <img src='/images/iot-features-image/web.svg' alt='' className="flaticon-software" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="32px"
                    height="32px"
                    fill="currentColor"
                  >
                    <g id="globe_sphere">
                      <g>
                        <path d="M16.499,9.162c-2.735,0-5.469-0.315-8.123-0.937C8.107,8.162,7.94,7.894,8.003,7.624c0.063-0.268,0.325-0.435,0.602-0.373 c5.793,1.358,11.95,1.187,17.678-0.498c0.27-0.076,0.544,0.073,0.621,0.338c0.078,0.266-0.073,0.543-0.338,0.621 C23.295,8.674,19.908,9.162,16.499,9.162z" />
                        <path d="M26.424,26.362c-0.047,0-0.094-0.007-0.142-0.021c-6.359-1.871-13.207-1.871-19.566,0c-0.269,0.075-0.544-0.073-0.621-0.338 c-0.078-0.266,0.073-0.543,0.338-0.621c6.545-1.926,13.588-1.926,20.133,0c0.265,0.078,0.416,0.355,0.338,0.621 C26.84,26.222,26.64,26.362,26.424,26.362z" />
                        <path d="M15.888,30.639c-0.098,0-0.195-0.028-0.282-0.087c-4.667-3.185-7.453-8.422-7.453-14.009 c0-4.527,1.781-8.788,5.017-11.998c0.197-0.197,0.514-0.193,0.707,0.002c0.195,0.196,0.193,0.513-0.002,0.707 c-3.045,3.021-4.722,7.03-4.722,11.289c0,5.256,2.623,10.185,7.018,13.183c0.228,0.155,0.286,0.467,0.131,0.695 C16.204,30.563,16.047,30.639,15.888,30.639z" />
                        <path d="M17.153,30.639c-0.159,0-0.316-0.076-0.413-0.218c-0.155-0.229-0.097-0.54,0.131-0.695 c4.395-2.998,7.018-7.927,7.018-13.183S21.266,6.358,16.871,3.36c-0.228-0.155-0.286-0.467-0.131-0.695 c0.156-0.228,0.468-0.284,0.695-0.131c4.667,3.185,7.453,8.422,7.453,14.009s-2.786,10.824-7.453,14.009 C17.349,30.61,17.251,30.639,17.153,30.639z" />
                        <path d="M16.499,30.49c-0.276,0-0.5-0.224-0.5-0.5V3.096c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V29.99 C16.999,30.267,16.775,30.49,16.499,30.49z" />
                        <path d="M30.446,17.043H4.552c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h25.895c0.276,0,0.5,0.224,0.5,0.5 S30.723,17.043,30.446,17.043z" />
                        <path d="M16.499,31.043c-7.995,0-14.5-6.505-14.5-14.5c0-3.521,1.278-6.919,3.6-9.565 C5.781,6.77,6.096,6.75,6.305,6.932C6.512,7.114,6.532,7.43,6.351,7.638c-2.161,2.463-3.352,5.626-3.352,8.905 c0,7.444,6.056,13.5,13.5,13.5s13.5-6.056,13.5-13.5s-6.056-13.5-13.5-13.5c-3.078,0-5.976,1.008-8.379,2.915 C7.904,6.13,7.59,6.095,7.418,5.877c-0.172-0.216-0.136-0.53,0.081-0.702c2.581-2.049,5.693-3.132,9-3.132 c7.995,0,14.5,6.505,14.5,14.5S24.494,31.043,16.499,31.043z" />
                      </g>
                    </g>
                  </svg>

                </div>

                <h3>
                  Web Application Development
                </h3>
                <p>
                  Empower your business with next-gen web applications designed for speed, security, and seamless user experience.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div
                className="single-repair-services"
              >
                <div className="icon">
                  {/* <i className="flaticon-gear"></i> */}
                  <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 65 65"
                    width="32px"
                    height="32px"
                    fill="currentColor">
                    <g>
                      <rect height="2" width="8" x="28" y="57" />
                      <path d="M58,11h-6V6c0-2.757-2.243-5-5-5H17c-2.757,0-5,2.243-5,5v25H6c-2.757,0-5,2.243-5,5v20.805L10.287,51H12v7c0,2.757,2.243,5,5,5h30c2.757,0,5-2.243,5-5V31h1.713L63,36.805V16C63,13.243,60.757,11,58,11z M17,3h30c1.654,0,3,1.346,3,3v1H14V6C14,4.346,15.346,3,17,3z M9.713,49L3,53.195V36c0-1.654,1.346-3,3-3h22c1.654,0,3,1.346,3,3v10c0,1.654-1.346,3-3,3H9.713z M47,61H17c-1.654,0-3-1.346-3-3v-3h36v3C50,59.654,48.654,61,47,61z M50,53H14v-2h14c2.757,0,5-2.243,5-5V36c0-2.757-2.243-5-5-5H14V9h36v2H36c-2.757,0-5,2.243-5,5v10c0,2.757,2.243,5,5,5h14V53z M61,33.195L54.287,29H52h-2H36c-1.654,0-3-1.346-3-3V16c0-1.654,1.346-3,3-3h22c1.654,0,3,1.346,3,3V33.195z" />
                      <path d="M47,18c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S48.654,18,47,18z M47,22c-0.551,0-1-0.449-1-1s0.449-1,1-1s1,0.449,1,1S47.551,22,47,22z" />
                      <path d="M55,18c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S56.654,18,55,18z M55,22c-0.551,0-1-0.449-1-1s0.449-1,1-1s1,0.449,1,1S55.551,22,55,22z" />
                      <path d="M39,18c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S40.654,18,39,18z M39,22c-0.551,0-1-0.449-1-1s0.449-1,1-1s1,0.449,1,1S39.551,22,39,22z" />
                      <path d="M23,41.184V41c0-3.309-2.691-6-6-6s-6,2.691-6,6v0.184C9.839,41.598,9,42.698,9,44c0,1.654,1.346,3,3,3h3v-6h-2c0-2.206,1.794-4,4-4s4,1.794,4,4h-2v6h3c1.654,0,3-1.346,3-3C25,42.698,24.161,41.598,23,41.184z M13,45h-1c-0.551,0-1-0.448-1-1s0.449-1,1-1h1V45z M22,45h-1v-2h1c0.551,0,1,0.448,1,1S22.551,45,22,45z" />
                      <rect height="2" width="2" x="35" y="40" />
                      <rect height="2" width="2" x="39" y="40" />
                      <rect height="2" width="2" x="43" y="40" />
                      <rect height="2" width="2" x="19" y="20" />
                      <rect height="2" width="2" x="23" y="20" />
                      <rect height="2" width="2" x="27" y="20" />
                    </g>
                  </svg>

                </div>

                <h3>
                  Mobile App development
                </h3>
                <p>
                  Develop innovative mobile applications that drive customer engagement and operational excellence.

                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div
                className="single-repair-services"
              >
                <div className="icon">
                  <i className="flaticon-skyline"></i>
                  {/* <svg
                    viewBox="0 0 100 100"
                    width="50px"
                    height="50px"
                    fill="currentColor">
                    <g>
                      <circle cx="17" cy="21" r="1" />
                      <circle cx="27" cy="21" r="1" />
                      <path d="M26,28h-2c0,1.103-0.897,2-2,2s-2-0.897-2-2h-2c0,2.206,1.794,4,4,4S26,30.206,26,28z" />
                      <path d="M59,41v19c0,0.552-0.448,1-1,1H46c-0.552,0-1-0.448-1-1v-1c1.654,0,3-1.346,3-3v-1.2c2.306-0.534,4.24-2.197,5.043-4.497
        C54.342,46.576,55,41.764,55,36s-0.658-10.576-1.957-14.303C52.062,18.888,49.405,17,46.43,17H40c-1.13,0-2.162,0.391-3,1.026
        v-4.927c0-3.305-2.266-6.188-5.438-6.996C28.923,2.858,25.02,1,20.832,1C13.205,1,7,7.205,7,14.832V23
        c0,2.463,1.794,4.503,4.178,4.913c0.537,3.046,2.326,5.662,4.822,7.294v2.072L5.786,40.685C2.924,41.638,1,44.307,1,47.324V55h39v1
        c0,1.654,1.346,3,3,3v1c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V41c0-0.552,0.448-1,1-1h1v-2h-1C60.346,38,59,39.346,59,41z"/>
                      <rect height="2" width="6" x="57" y="34" />
                      <rect height="2" width="6" x="57" y="30" />
                      <path d="M62,12c-1.654,0-3,1.346-3,3v10c0,0.552-0.448,1-1,1h-1v2h1c1.654,0,3-1.346,3-3V15c0-0.552,0.448-1,1-1h1v-2H62z" />
                    </g>
                  </svg> */}

                </div>

                <h3>
                  CRM development
                </h3>
                <p>
                  Empower your business with a next-gen CRM that automates workflows and maximizes productivity.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div
                className="single-repair-services"
              >
                <div className="icon">
                  <i className="flaticon-team"></i>


                </div>

                <h3>
                  Team hiring
                </h3>
                <p>
                  Grow your team with confidence, knowing each hire is backed by a secure and scalable process.
                </p>

              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div
                className="single-repair-services"
              >
                <div className="icon">
                  <i className="flaticon-factory"></i>
                </div>

                <h3>
                  Hiring dedicated developer
                </h3>
                <p>
                  Hire top talent with a process built on trust, scalability, and a commitment to security.
                </p>

              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div
                className="single-repair-services"
              >
                <div className="icon">
                  <i className="flaticon-chip"></i>
                </div>

                <h3>
                  Testing and QA
                </h3>
                <p>
                  Enhance user experience and build trust with thorough Testing and Quality Assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
