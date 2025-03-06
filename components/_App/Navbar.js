import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from 'next/image';
import Link from "next/link";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";

import logo from "/public/images/logo.png";
import ContactModal from "../ServicesComponents/ContactModal";

const Navbar = ({ isOpen, onClose }) => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const cart = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check screen width on component mount
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767.98);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header id="header" className={`${isOpen ? 'headroomv' : 'headroom'}`}>
        <div className="startp-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <Image src={logo} alt="logo" width={220} height={72} />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">


                  <li className="nav-item">
                    <Link
                      href="/"
                      onClick={toggleNavbar}
                      className={`nav-link ${currentPath == "/" && "active"
                        }`}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      onClick={toggleNavbar}
                      className={`nav-link ${currentPath == "/services/" && "active"
                        }`}
                    >
                      Services<Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/web-application-development/"
                          onClick={toggleNavbar}
                          className={`nav-link ${currentPath == "/web-application-development/" && "active"
                            }`}
                        >
                          Web Application Development
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/mobile-app-development/"
                          onClick={toggleNavbar}
                          className={`nav-link ${currentPath == "/mobile-app-development/" && "active"
                            }`}
                        >
                          Mobile App development
                        </Link>
                      </li>


                      <li className="nav-item">
                        <Link
                          href="/crm-development/"
                          onClick={toggleNavbar}
                          className={`nav-link ${currentPath == "/crm-development/" && "active"
                            }`}
                        >
                          CRM development
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/team-hiring/"
                          onClick={toggleNavbar}
                          className={`nav-link ${currentPath == "/team-hiring/" && "active"
                            }`}
                        >
                          Team hiring
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/hiring-developer/"
                          onClick={toggleNavbar}
                          className={`nav-link ${currentPath == "/hiring-developer/" && "active"
                            }`}
                        >
                          Hiring dedicated developer
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/testing-qa/"
                          onClick={toggleNavbar}
                          className={`nav-link ${currentPath == "/testing-qa/" && "active"
                            }`}
                        >
                          Testing and QA
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/crm/"
                      onClick={toggleNavbar}
                      className={`nav-link ${currentPath == "/crm/" && "active"
                        }`}
                    >
                      CRM
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link
                      href="/industries/"
                      onClick={toggleNavbar}
                      className={`nav-link ${currentPath == "/industries/" && "active"
                        }`}
                    >
                      Industries
                    </Link>
                  </li> */}

                  <li className="nav-item">
                    <Link
                      href="/portfolio/"
                      onClick={toggleNavbar}
                      className={`nav-link ${currentPath == "/portfolio/" && "active"
                        }`}
                    >
                      Portfolio
                    </Link>
                  </li>


                  <li className="nav-item">
                    <Link
                      href="/blog/"
                      onClick={toggleNavbar}
                      className={`nav-link ${currentPath == "/blog/" && "active"
                        }`}
                    >
                      Blog
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about/"
                      onClick={toggleNavbar}
                      className={`nav-link ${currentPath == "/about/" && "active"
                        }`}
                    >
                      About
                    </Link>
                  </li>


                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      onClick={toggleNavbar}
                      className={`nav-link ${currentPath == "/contact/" && "active"
                        }`}
                    >
                      Contact Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/case-studies/"
                      onClick={toggleNavbar}
                      className={`nav-link ${currentPath == "/case-studies/" && "active"
                        }`}
                    >
                      Case Studies
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others option */}
              <div className="others-option"
                style={{ display: isSmallScreen ? 'none' : 'inline-block' }}
              >

                {/* <Link href="/contact/" className="btn btn-light ">
                  Let's talk
                </Link> */}

                <button onClick={() => onClose(true)} className="btn btn-primary">
                  Let's talk
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* Contact Modal */}
      <ContactModal isOpen={isOpen} onClose={() => onClose(false)} />
    </>
  );
};

export default Navbar;
