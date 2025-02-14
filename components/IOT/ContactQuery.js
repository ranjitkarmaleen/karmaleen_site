import React, { useState } from "react";

const ContactQuery = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="ptb-80">
            <div className="container">
                <h2>Get Started Today 👋</h2>
                {/* <p>
                    Nimblechapps is an <span className="highlight">experienced app development agency</span>
                    that you can count on to deliver quality results quickly. Contact us today!
                </p> */}

                <form>
                    <div className="input-group">
                        <div className="input-field">
                            <label for="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your name" />
                        </div>

                        <div className="input-field">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" placeholder="Enter your email address" />
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-field">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" placeholder="Enter your subject" />
                        </div>

                        <div className="input-field">
                            <label for="phone">Phone Number</label>
                            <input type="text" id="phone" placeholder="Enter your phone number" />
                        </div>
                    </div>

                    <div className="input-field">
                        <label for="message">Message</label>
                        <textarea id="message" placeholder="Write here..."></textarea>
                    </div>
                    <div style={{ maxWidth: "200px", textAlign: 'center' }}>
                        <button type="submit" className="submit-button">Submit</button>
                    </div>

                </form>
            </div>
        </div>

    );
};

export default ContactQuery;
