import React from "react";

const CrmLogos = () => {

    const technologies = [

        { src: "/images/partner-img/salesforce.svg", alt: "Salesforce" },
        { src: "/images/partner-img/zoho-1.svg", alt: "zoho" },
        { src: "/images/partner-img/suger-crm.png", alt: "SugerCRM" },
        { src: "/images/partner-img/vtiger-crm.jpeg", alt: "VtigerCRM" },
        { src: "/images/partner-img/suite-crm.webp", alt: "SuiteCRM" },
        { src: "/images/partner-img/hubspot.svg", alt: "Hubspot" },
        // { src: "/images/partner-img/yii-php.svg", alt: "Yii" },
    ];

    return (
        <>
            <div className="repair-partner-area">
                <div className="container">
                    <h2 className="title mb-2">Custom CRM Development Technology Stack</h2>
                    <p>Our services include the tech stack needed to build a successful, tailored web application for your business.
                        Please note that this is not a full list of our services.</p>
                    <div className="grid-container mt-2">
                        {technologies.map((tech, index) => (
                            <div key={index} className="grid-item">
                                <img src={tech.src} alt={tech.alt} className="tech-logo" />
                                <h6 style={{ marginLeft: "8px", marginBottom: '0px' }}>{tech.alt}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CrmLogos;
