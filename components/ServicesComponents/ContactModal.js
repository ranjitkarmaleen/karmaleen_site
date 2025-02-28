import React from "react";

const ContactModal = ({ isOpen, onClose }) => {
    return (
        <div className={`contact-modal-overlay ${isOpen ? "open" : ""}`}>
            <div className="contact-modal-content">
                <button className="contact-modal-close-btn" onClick={onClose}>✕</button>
                <div style={{ width: "50%", margin: "0 auto", paddingTop: "120px" }}>
                    <h2 className="contact-modal-title">
                        Get In <span className="contact-modal-highlight">Touch</span>
                    </h2>
                    <div className="contact-modal-title-underline"></div>
                    <form className="contact-modal-form">
                        <div className="contact-modal-inputs">
                            <input type="text" placeholder="Full Name*" required />
                            <input type="email" placeholder="Company Email*" required />
                        </div>
                        <div className="contact-modal-inputs">
                            <input type="text" placeholder="Contact No*" required />
                            <select required>
                                <option value="">Select Your Service</option>
                                <option value="Web Development">Web Development</option>
                                <option value="App Development">App Development</option>
                                <option value="SEO Services">SEO Services</option>
                            </select>
                        </div>
                        <textarea placeholder="How can we help?*" rows="4" required></textarea>
                        <button type="submit" className="contact-modal-submit-btn">Submit Your Inquiry</button>
                    </form>
                    <p className="contact-modal-footer">
                        Attract brilliance to your team! Find and hire top web developers who redefine excellence in coding and innovation.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
