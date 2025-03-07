import React, { useRef } from "react";
import toast from "react-hot-toast";

const ContactModal = ({ isOpen, onClose }) => {
    const formRef = useRef(null); // Create a ref for the form

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Simulate form submission (you can replace this with your actual form submission logic)
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log("Form Data:", formObject);

        // Show a success toast
        toast.success("Thank you for contacting us! We'll get back to you soon.");

        // Reset the form
        formRef.current.reset();

        // Optionally, close the modal after submission
        onClose();
    };

    const handleClose = () => {
        // Reset the form when the modal is closed
        formRef.current.reset();
        onClose(); // Call the onClose prop to close the modal
    };

    return (
        <div className={`contact-modal-overlay ${isOpen ? "open" : ""}`}>
            <div className="contact-modal-content">
                <button className="contact-modal-close-btn" onClick={handleClose}>✕</button>
                <div className="contact-modal-box">
                    <h2 className="contact-modal-title">
                        Get In <span className="contact-modal-highlight">Touch</span>
                    </h2>
                    <div className="contact-modal-title-underline"></div>
                    <form className="contact-modal-form" onSubmit={handleSubmit} ref={formRef}>
                        <div className="contact-modal-inputs">
                            <input type="text" name="fullName" placeholder="Full Name*" required />
                            <input type="email" name="email" placeholder="Company Email*" required />
                        </div>
                        <div className="contact-modal-inputs">
                            <input type="text" name="contactNo" placeholder="Contact No*" required />
                            <select name="service" required>
                                <option value="">Select Your Service</option>
                                <option value="Web Application Development">Web Application Development</option>
                                <option value="Mobile App development">Mobile App development</option>
                                <option value="CRM development">CRM development</option>
                                <option value="Team hiring">Team hiring</option>
                                <option value="Hiring dedicated developer">Hiring dedicated developer</option>
                                <option value="Testing and QA">Testing and QA</option>
                            </select>
                        </div>
                        <textarea name="message" placeholder="How can we help?*" rows="4" required></textarea>
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