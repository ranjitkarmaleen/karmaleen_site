import React from "react";

const MobileTechLogos = () => {

    const technologies = [
        { src: "/images/partner-img/android-icon.svg", alt: "Android" },
        { src: "/images/partner-img/ios-logo.svg", alt: "iOS" },
        { src: "/images/partner-img/flutter-img.svg", alt: "Flutter" },
        { src: "/images/partner-img/react-native-1.svg", alt: "React Native" },
        { src: "/images/partner-img/xamarin-seeklogo.svg", alt: "Xamarin" },
        { src: "/images/partner-img/phonegap-seeklogo.svg", alt: "Phonegap" },
        { src: "/images/partner-img/cordova-seeklogo.svg", alt: "Cordova" },
        { src: "/images/partner-img/ionic-icon.svg", alt: "ionic-icon" },
        { src: "/images/partner-img/pwa-logo.svg", alt: "PWA" },
    ];

    return (
        <>
            <div className="repair-partner-area">
                <div className="container">
                    <h2 className="title mb-2">Mobile Development Technology Stack</h2>
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

export default MobileTechLogos;
