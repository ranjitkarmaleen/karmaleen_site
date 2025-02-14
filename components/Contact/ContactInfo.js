import React from "react";
import * as Icon from "react-feather";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area ptb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box flex h-100 ">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>Mail Here</h3>
                <p>
                  <a href="mailto:hello@karmaleen.com">hello@karmaleen.com</a>
                </p>
                {/* <p>
                  <a href="mailto:info@startp.com">info@startp.com</a>
                </p> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box flex h-100">
                <div className="icon">
                  <Icon.MapPin />
                </div>
                <h3>Visit Here</h3>
                <p>
                  709 Dream Rise, Opp The Capital, Science City Road, <br />   Sola, Ahmedabad-380060.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box flex h-100">
                <div className="icon">
                  <Icon.Phone />
                </div>
                <h3>Call Here</h3>
                <p>
                  <a href="tel:9510612822">+91 9510-612-822</a>
                </p>
                {/* <p>
                  <a href="tel:+2414524526">+241 452 4526</a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
