import React, { useState } from "react";
import Image from "next/image";
import illustration from "/public/images/webdev.svg"; // Ensure the path is correct
import { useRouter } from "next/router";

const processSteps = [
    {
        title: "Requirement Gathering",
        content:
            "In the early stages of the web development process, our business analysts collaborate with clients to discuss the project scope and gain a deep understanding of their business needs. After thoroughly analyzing the requirements, our project managers and analysts establish the purpose and objectives of the web development services.",
    },
    {
        title: "Wireframe and Prototyping",
        content: "We create wireframes and prototypes to visualize the structure and functionality of your website before development begins.",
    },
    {
        title: "UI/UX Design",
        content: "Our designers craft engaging, intuitive, and user-friendly interfaces to enhance the overall user experience.",
    },
    {
        title: "Development",
        content: "Our developers transform designs into functional, high-performing websites using modern technologies.",
    },
    {
        title: "Quality Assurance",
        content: "We conduct rigorous testing to ensure that your website is bug-free and performs optimally across all devices.",
    },
    {
        title: "Deployment",
        content: "After final testing and approval, we deploy the website to a live environment for public access.",
    },
    {
        title: "Maintenance and Support",
        content: "We provide ongoing maintenance and support to keep your website up-to-date and secure.",
    },
];

const WebDevProcess = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const router = useRouter();
    // console.log(router.asPath)

    const name = router?.asPath == '/mobile-app-development/' ? 'Mobile Development' : 'Web Development'
    return (
        <section className="process-section">
            {/* Section Header */}
            <div className="process-header">
                <h2>How We Deliver {name} Services</h2>
                <p>Designers, developers, project managers – all under one roof for your web development project.</p>
            </div>

            {/* Process Container */}
            <div className="process-container">
                {/* Left Side - Accordion */}
                <div className="process-content">
                    <div className="accordion">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`accordion-item ${openIndex === index ? "active" : ""}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="accordion-title">
                                    {step.title}
                                    <span className="accordion-icon" style={{ color: openIndex === index ? "#ff6600" : "" }}>
                                        {openIndex === index ? "−" : "+"}
                                    </span>
                                </div>
                                <div
                                    className="accordion-content"
                                    style={{
                                        maxHeight: openIndex === index ? "200px" : "0",
                                        padding: openIndex === index ? "10px 0" : "0",
                                    }}
                                >
                                    {step.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="process-image">
                    <Image src={illustration} alt="Development Process" width={500} height={400} />
                </div>
            </div>
        </section>
    );
};

export default WebDevProcess;



