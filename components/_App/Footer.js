import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";

import logo from "/public/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <Image src={logo} alt="logo" width={220} height={72} />
                  </Link>
                </div>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </p> */}
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget ps-5">
                <h3>Company</h3>

                <ul className="list">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/features">Blog</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/blog">Case Studies</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <h3>Services</h3>

                <ul className="list">
                  <li>
                    <Link href="/faq">Web Application Development</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Mobile App development</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">CRM development</Link>
                  </li>
                  <li>
                    <Link href="/team">Team hiring</Link>
                  </li>
                  <li>
                    <Link href="/contact">Hiring dedicated developer</Link>
                  </li>
                  <li>
                    <Link href="/contact"> Testing and QA</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <Icon.MapPin />
                    709 Dream Rise, Opp The Capital, Science City Road, <br />   Sola, Ahmedabad-380060.
                  </li>

                  <li>
                    <Icon.Mail />
                    Email:{" "}
                    <a href="mailto:hello@karmaleen.com">hello@karmaleen.com</a>
                  </li>

                  <li>
                    <Icon.PhoneCall />
                    Phone: <a href="tel:9510612822">+91 9510-612-822</a>
                  </li>
                </ul>

                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="facebook"
                      target="_blank"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.twitter.com/"
                      className="twitter"
                      target="_blank"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagramcom/"
                      className="instagram"
                      target="_blank"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="linkedin"
                      target="_blank"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright &copy; {currentYear}  Karmaleen Technology
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/images/map.png"
          className="map"
          alt="map"
          width={910}
          height={443}
        />

        {/* Shape Images */}
        {/* <div className="shape1">
          <Image
            src="/images/shape1.png"
            alt="shape"
            width={202}
            height={202}
          />
        </div> */}

        {/* <div className="shape8 rotateme">
          <Image src="/images/shape2.svg" alt="shape" width={22} height={22} />
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
