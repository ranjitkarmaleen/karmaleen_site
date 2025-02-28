import React, { useState } from 'react';
import Image from 'next/image';
import ContactModal from '../ServicesComponents/ContactModal';
import webImg from "/public/images/karma-blog/mobile_commerce.png"; // Replace with your image path

const Blog3 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="web-dev-white"></div>
            {/* Back Button */}
            <div className="web-dev-container">
                <div className="content-wrapper">
                    <button
                        className="btn btn-primary"
                        onClick={() => window.history.back()}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px"
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path fillRule="evenodd" d="M11 2.5a.5.5 0 0 1 0 .707L6.207 8l4.793 4.793a.5.5 0 0 1-.708.707l-5.5-5.5a.5.5 0 0 1 0-.707l5.5-5.5a.5.5 0 0 1 .708 0z" />
                        </svg>
                        Blog
                    </button>
                </div>
            </div>

            {/* Blog Content */}
            <div className="web-dev-container">
                <div className="content-wrapper" style={{ paddingBottom: "80px", alignItems: "start" }}>
                    <div className="text-content">
                        <h1 className="title">
                            What is M-Commerce? Should Your E-Commerce Site Adopt M-Commerce or Not?
                        </h1>
                        {/* <button onClick={() => setIsModalOpen(true)} className="mt-3 cta-button btn btn-primary">Let’s Work Together →</button> */}
                    </div>
                    <div className="image-content">
                        <Image
                            src={webImg}
                            alt="M-Commerce"
                            className="web-dev-image"
                            width={650}
                            height={400}
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Blog Layout */}
            <BlogLayout />

            {/* Contact Modal */}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

const BlogLayout = () => {
    const [activeSection, setActiveSection] = useState('');

    // Function to handle scroll and update active section
    const handleScroll = () => {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                setActiveSection(section.id);
            }
        });
    };

    // Add scroll event listener
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle initial scroll position
    React.useEffect(() => {
        handleScroll(); // Check active section on page load
    }, []);

    // Smooth scroll to section when a link is clicked
    const handleLinkClick = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            const offset = 100; // Adjust this value as needed
            const sectionTop = section.offsetTop - offset;
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
        }
    };

    return (
        <div className="blog-container" style={{ marginTop: "200px" }}>
            {/* Left Side - Scrollable Content */}
            <div className="content-column">
                <section id="introduction" className="content-section">
                    <h2>Introduction</h2>
                    <p>
                        With the rapid evolution of digital commerce, businesses are constantly looking for ways to enhance customer experiences and drive more sales. One significant shift in the industry is the rise of M-Commerce (Mobile Commerce)—a subset of e-commerce that focuses on transactions made through mobile devices. But should your e-commerce business adopt M-Commerce? Let's explore this topic in detail.
                    </p>
                </section>

                <section id="what-is-mcommerce" className="content-section">
                    <h2>What is M-Commerce?</h2>
                    <p>
                        M-Commerce, or Mobile Commerce, refers to the buying and selling of goods and services through mobile devices like smartphones and tablets. It leverages mobile-optimized websites, dedicated apps, and various payment methods like digital wallets and UPI transactions.
                    </p>
                    <h3>Types of M-Commerce</h3>
                    <ul>
                        <li><strong>Mobile Shopping:</strong> Using mobile apps or mobile-optimized websites for online shopping.</li>
                        <li><strong>Mobile Banking:</strong> Conducting banking transactions through mobile apps.</li>
                        <li><strong>Mobile Payments:</strong> Digital payment solutions like Google Pay, Apple Pay, and PayPal.</li>
                        <li><strong>Mobile Ticketing & Booking:</strong> Buying tickets and making reservations via mobile devices.</li>
                        <li><strong>Location-Based Services:</strong> Personalized offers and promotions based on users’ geographic locations.</li>
                    </ul>
                </section>

                <section id="difference" className="content-section">
                    <h2>Difference Between M-Commerce and E-Commerce</h2>
                    <div style={{ overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}>
                            <thead>
                                <tr style={{ backgroundColor: "#f5f5f5" }}>
                                    <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Feature</th>
                                    <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>E-Commerce</th>
                                    <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>M-Commerce</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>Device Preference</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>Primarily desktops/laptops</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>Mobile phones & tablets</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>Accessibility</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>Limited to desktops & large screens</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>Accessible anytime, anywhere</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>User Experience</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>Broad navigation & large screen interactions</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>Fast, touch-based, mobile-friendly navigation</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>Payment Options</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>Credit cards, PayPal, etc.</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>Digital wallets, UPI, QR codes, NFC payments</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>Purchase Behavior</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>Often planned purchases</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>Impulse buying & quick transactions</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="growth-reasons" className="content-section">
                    <h2>Why M-Commerce is Growing Rapidly</h2>
                    <ul>
                        <li><strong>Mobile Dominance:</strong> Over 60% of online traffic comes from mobile devices.</li>
                        <li><strong>Rise of Mobile Payments:</strong> Digital wallets are becoming the preferred method for online transactions.</li>
                        <li><strong>Personalized Shopping Experience:</strong> AI-driven recommendations and push notifications increase user engagement.</li>
                        <li><strong>Social Media Integration:</strong> Platforms like Instagram and TikTok facilitate in-app shopping.</li>
                        <li><strong>Convenience & Speed:</strong> Faster checkout, easier browsing, and seamless app experiences encourage conversions.</li>
                    </ul>
                </section>

                <section id="benefits" className="content-section">
                    <h2>Benefits of Adopting M-Commerce</h2>
                    <ul>
                        <li><strong>Enhanced User Experience:</strong> M-Commerce apps and mobile-optimized sites provide a smoother and more intuitive experience.</li>
                        <li><strong>Higher Conversion Rates:</strong> Mobile users prefer frictionless transactions, reducing cart abandonment rates.</li>
                        <li><strong>Improved Customer Engagement:</strong> Push notifications and AI-powered chatbots maintain continuous interaction.</li>
                        <li><strong>Integration with Social Commerce:</strong> Shopping directly from platforms like Facebook and Instagram boosts conversions.</li>
                        <li><strong>Omnichannel Shopping Experience:</strong> Ensures consistency across mobile apps, websites, and social media.</li>
                    </ul>
                </section>

                <section id="challenges" className="content-section">
                    <h2>Challenges of M-Commerce Adoption</h2>
                    <ul>
                        <li><strong>Development Costs:</strong> Building and maintaining mobile-optimized solutions requires investment.</li>
                        <li><strong>Security Concerns:</strong> Mobile transactions are vulnerable to cyber threats.</li>
                        <li><strong>Compatibility Issues:</strong> Optimizing for various devices and operating systems can be complex.</li>
                        <li><strong>Competition & Market Saturation:</strong> Standing out requires a unique and engaging mobile experience.</li>
                    </ul>
                </section>

                <section id="should-you-adopt" className="content-section">
                    <h2>Should Your E-Commerce Site Adopt M-Commerce?</h2>
                    <h3>Who Should Consider M-Commerce?</h3>
                    <ul>
                        <li>Businesses targeting Gen Z and Millennials.</li>
                        <li>Brands focusing on fast-moving consumer goods (FMCG), fashion, and beauty products.</li>
                        <li>Companies investing in social media marketing.</li>
                        <li>Businesses offering subscription-based services.</li>
                    </ul>
                    <h3>Who Might Not Need M-Commerce?</h3>
                    <ul>
                        <li>Businesses selling high-ticket B2B products.</li>
                        <li>Companies targeting older demographics.</li>
                        <li>Niche industries requiring detailed product customization.</li>
                    </ul>
                </section>

                <section id="transition" className="content-section">
                    <h2>How to Transition from E-Commerce to M-Commerce</h2>
                    <ol>
                        <li>Optimize your website for mobile.</li>
                        <li>Develop a mobile app for better personalization.</li>
                        <li>Implement mobile payment solutions.</li>
                        <li>Leverage AI & chatbots for customer service.</li>
                        <li>Use push notifications and location-based marketing.</li>
                    </ol>
                </section>

                <section id="case-studies" className="content-section">
                    <h2>Case Studies & Examples</h2>
                    <h3>Brands Successfully Adopting M-Commerce</h3>
                    <ul>
                        <li><strong>Amazon:</strong> Seamless shopping and personalized recommendations.</li>
                        <li><strong>Nike:</strong> AR and AI-powered shopping experiences.</li>
                        <li><strong>Starbucks:</strong> Mobile app-based rewards program.</li>
                        <li><strong>Instagram Shopping:</strong> Direct selling through stories and posts.</li>
                    </ul>
                    <h3>Statistics on M-Commerce Growth</h3>
                    <ul>
                        <li>79% of smartphone users have purchased something online via their mobile device in the past 6 months.</li>
                        <li>Mobile commerce sales are projected to reach $4.5 trillion by 2025.</li>
                        <li>Businesses with a mobile-first approach see a 30% higher conversion rate.</li>
                    </ul>
                </section>

                <section id="platform-choice" className="content-section">
                    <h2>Which Platform Should You Choose?</h2>
                    <ul>
                        <li>If your business depends on impulse buying and social media marketing, adopt M-Commerce.</li>
                        <li>If your audience prefers detailed product comparisons, traditional E-Commerce may still be effective.</li>
                        <li>A hybrid approach—offering both a responsive website and a mobile app—can maximize reach and engagement.</li>
                    </ul>
                </section>

                <section id="expert-suggestion" className="content-section">
                    <h2>Expert Suggestion</h2>
                    <p>
                        For most businesses, investing in M-Commerce is no longer optional—it’s a necessity. While not every brand needs a dedicated mobile app, having a mobile-optimized website and integrating mobile payment solutions are critical steps to staying competitive.
                    </p>
                    <h3>Key Takeaways:</h3>
                    <ul>
                        <li>Optimize for mobile-first shopping experiences.</li>
                        <li>Implement mobile-friendly payment solutions.</li>
                        <li>Leverage push notifications and AI-driven personalization.</li>
                        <li>Consider a mobile app if engagement and loyalty are priorities.</li>
                    </ul>
                </section>

                <section id="conclusion" className="content-section">
                    <h2>Conclusion</h2>
                    <p>
                        M-Commerce is not just the future—it’s the present. As mobile usage continues to rise, businesses that fail to adopt M-Commerce risk falling behind. Whether through a mobile-optimized website, progressive web app (PWA), or dedicated mobile application, integrating M-Commerce into your business strategy will improve customer experience, boost conversions, and drive long-term growth.
                    </p>
                    <p>
                        Final Question: Is your business ready to embrace the mobile revolution? If not, now is the time to take action and stay ahead of the curve!
                    </p>
                </section>
            </div>

            {/* Right Side - Sticky Cards */}
            <div className="sticky-column">
                <div className="sticky-card">
                    <h3>In This Post</h3>
                    <ul>
                        <li className={activeSection === 'introduction' ? 'active' : ''}>
                            <a href="#introduction" onClick={(e) => handleLinkClick(e, 'introduction')}>Introduction</a>
                        </li>
                        <li className={activeSection === 'what-is-mcommerce' ? 'active' : ''}>
                            <a href="#what-is-mcommerce" onClick={(e) => handleLinkClick(e, 'what-is-mcommerce')}>What is M-Commerce?</a>
                        </li>
                        <li className={activeSection === 'difference' ? 'active' : ''}>
                            <a href="#difference" onClick={(e) => handleLinkClick(e, 'difference')}>Difference Between M-Commerce and E-Commerce</a>
                        </li>
                        <li className={activeSection === 'growth-reasons' ? 'active' : ''}>
                            <a href="#growth-reasons" onClick={(e) => handleLinkClick(e, 'growth-reasons')}>Why M-Commerce is Growing</a>
                        </li>
                        <li className={activeSection === 'benefits' ? 'active' : ''}>
                            <a href="#benefits" onClick={(e) => handleLinkClick(e, 'benefits')}>Benefits of M-Commerce</a>
                        </li>
                        <li className={activeSection === 'challenges' ? 'active' : ''}>
                            <a href="#challenges" onClick={(e) => handleLinkClick(e, 'challenges')}>Challenges of M-Commerce</a>
                        </li>
                        <li className={activeSection === 'should-you-adopt' ? 'active' : ''}>
                            <a href="#should-you-adopt" onClick={(e) => handleLinkClick(e, 'should-you-adopt')}>Should You Adopt M-Commerce?</a>
                        </li>
                        <li className={activeSection === 'transition' ? 'active' : ''}>
                            <a href="#transition" onClick={(e) => handleLinkClick(e, 'transition')}>How to Transition to M-Commerce</a>
                        </li>
                        <li className={activeSection === 'case-studies' ? 'active' : ''}>
                            <a href="#case-studies" onClick={(e) => handleLinkClick(e, 'case-studies')}>Case Studies</a>
                        </li>
                        <li className={activeSection === 'platform-choice' ? 'active' : ''}>
                            <a href="#platform-choice" onClick={(e) => handleLinkClick(e, 'platform-choice')}>Which Platform to Choose?</a>
                        </li>
                        <li className={activeSection === 'expert-suggestion' ? 'active' : ''}>
                            <a href="#expert-suggestion" onClick={(e) => handleLinkClick(e, 'expert-suggestion')}>Expert Suggestion</a>
                        </li>
                        <li className={activeSection === 'conclusion' ? 'active' : ''}>
                            <a href="#conclusion" onClick={(e) => handleLinkClick(e, 'conclusion')}>Conclusion</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog3;