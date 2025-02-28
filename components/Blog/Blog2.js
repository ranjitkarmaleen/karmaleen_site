import React, { useState } from 'react';
import Image from 'next/image';
import ContactModal from '../ServicesComponents/ContactModal';
import webImg from "/public/images/karma-blog/Flutter_Vs_Flutter_Flow.png"; // Replace with your image path

const Blog2 = () => {
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
                            FlutterFlow vs Flutter: A Detailed Comparison
                        </h1>
                        {/* <button onClick={() => setIsModalOpen(true)} className="mt-3 cta-button btn btn-primary">Let’s Work Together →</button> */}
                    </div>
                    <div className="image-content">
                        <Image
                            src={webImg}
                            alt="Flutter vs FlutterFlow"
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
                        Choosing the right technology for mobile app development can be challenging, especially when multiple options exist within the same ecosystem. Flutter and FlutterFlow are two powerful tools for building cross-platform apps, but they serve different purposes. Flutter is a full-fledged software development framework, while FlutterFlow is a no-code/low-code platform aimed at rapid development.
                    </p>
                    <p>
                        This article provides an in-depth comparison between Flutter and FlutterFlow, covering their pros, cons, limitations, and ideal use cases to help you make an informed decision.
                    </p>
                </section>

                <section id="what-is-flutter" className="content-section">
                    <h2>What is Flutter?</h2>
                    <p>
                        Flutter is an open-source UI software development toolkit created by Google. It allows developers to build natively compiled applications for mobile, web, and desktop from a single codebase. Flutter uses Dart as its programming language and provides a rich set of pre-designed widgets for seamless UI development.
                    </p>
                    <h3>Key Features of Flutter</h3>
                    <ul>
                        <li><strong>Single Codebase:</strong> Write once, run on iOS, Android, web, and desktop.</li>
                        <li><strong>High Performance:</strong> Uses Skia Graphics Engine for smooth UI rendering.</li>
                        <li><strong>Rich Widget Library:</strong> Pre-built and customizable UI components.</li>
                        <li><strong>Direct Code Access:</strong> Full control over logic, design, and app functionality.</li>
                        <li><strong>Integration Flexibility:</strong> Works well with third-party APIs and databases.</li>
                    </ul>
                </section>

                <section id="what-is-flutterflow" className="content-section">
                    <h2>What is FlutterFlow?</h2>
                    <p>
                        FlutterFlow is a no-code/low-code development platform built on top of Flutter. It enables developers and non-developers to create Flutter-based applications without extensive coding. It provides a drag-and-drop interface, allowing users to design and build applications visually while still offering some level of custom code integration.
                    </p>
                    <h3>Key Features of FlutterFlow</h3>
                    <ul>
                        <li><strong>Drag-and-Drop Interface:</strong> Easily design UI elements without coding.</li>
                        <li><strong>Pre-built Templates:</strong> Accelerates development with ready-made templates.</li>
                        <li><strong>Firebase Integration:</strong> Built-in support for Firebase backend.</li>
                        <li><strong>No-Code Logic Building:</strong> Allows setting up app logic without extensive programming.</li>
                        <li><strong>Export Flutter Code:</strong> Developers can extract and modify the generated Flutter code.</li>
                    </ul>
                </section>

                <section id="comparison" className="content-section">
                    <h2>Comparison: FlutterFlow vs Flutter</h2>
                    <h3>1. Ease of Use</h3>
                    <p>
                        <strong>Flutter:</strong> Requires programming knowledge and experience with Dart.
                        <br />
                        <strong>FlutterFlow:</strong> Ideal for beginners and non-developers due to its visual interface.
                    </p>
                    <h3>2. Development Speed</h3>
                    <p>
                        <strong>Flutter:</strong> Development can take longer due to manual coding and debugging.
                        <br />
                        <strong>FlutterFlow:</strong> Faster development using pre-built components and drag-and-drop functionality.
                    </p>
                    <h3>3. Customization & Flexibility</h3>
                    <p>
                        <strong>Flutter:</strong> Complete flexibility in app design and functionality.
                        <br />
                        <strong>FlutterFlow:</strong> Limited to what the platform supports, though it allows adding some custom code.
                    </p>
                    <h3>4. Performance</h3>
                    <p>
                        <strong>Flutter:</strong> High performance due to native compilation.
                        <br />
                        <strong>FlutterFlow:</strong> Performance depends on the generated code; may be slightly less optimized than manually written Flutter code.
                    </p>
                    <h3>5. Scalability</h3>
                    <p>
                        <strong>Flutter:</strong> Ideal for complex and large-scale applications.
                        <br />
                        <strong>FlutterFlow:</strong> Best for MVPs, prototypes, and small-to-medium projects.
                    </p>
                    <h3>6. Third-Party Integration</h3>
                    <p>
                        <strong>Flutter:</strong> Supports any third-party API and plugin integration.
                        <br />
                        <strong>FlutterFlow:</strong> Limited third-party integrations; relies heavily on Firebase.
                    </p>
                    <h3>7. Cost Considerations</h3>
                    <p>
                        <strong>Flutter:</strong> Open-source and free to use, but requires skilled developers.
                        <br />
                        <strong>FlutterFlow:</strong> Subscription-based pricing model; cheaper for quick app deployment.
                    </p>
                </section>

                <section id="pros-and-cons" className="content-section">
                    <h2>Pros and Cons</h2>
                    <h3>Flutter Pros</h3>
                    <ul>
                        <li>✔ Full control over code and architecture.</li>
                        <li>✔ High-performance apps with native compilation.</li>
                        <li>✔ Extensive community support and documentation.</li>
                        <li>✔ Works with any backend or third-party service.</li>
                    </ul>
                    <h3>Flutter Cons</h3>
                    <ul>
                        <li>✘ Steeper learning curve due to Dart programming.</li>
                        <li>✘ Longer development time compared to low-code solutions.</li>
                        <li>✘ Requires experienced developers.</li>
                    </ul>
                    <h3>FlutterFlow Pros</h3>
                    <ul>
                        <li>✔ Faster development with drag-and-drop UI.</li>
                        <li>✔ Great for prototypes and MVPs.</li>
                        <li>✔ No coding required for basic apps.</li>
                        <li>✔ Firebase integration simplifies backend management.</li>
                    </ul>
                    <h3>FlutterFlow Cons</h3>
                    <ul>
                        <li>✘ Limited flexibility for complex features.</li>
                        <li>✘ Cannot replace fully custom-coded applications.</li>
                        <li>✘ Subscription costs may add up over time.</li>
                        <li>✘ Heavily dependent on Firebase for backend solutions.</li>
                    </ul>
                </section>

                <section id="limitations" className="content-section">
                    <h2>Limitations of FlutterFlow</h2>
                    <p>
                        While FlutterFlow simplifies app development, it has notable limitations:
                    </p>
                    <ul>
                        <li><strong>Limited Customization:</strong> Cannot fully customize beyond what the tool offers.</li>
                        <li><strong>Performance Issues:</strong> May not be as optimized as native Flutter code.</li>
                        <li><strong>Third-Party Dependencies:</strong> Heavily reliant on Firebase, restricting backend choices.</li>
                        <li><strong>Scalability Challenges:</strong> May not be ideal for high-performance, large-scale apps.</li>
                        <li><strong>Subscription Costs:</strong> Long-term usage can be expensive.</li>
                    </ul>
                </section>

                <section id="when-to-use" className="content-section">
                    <h2>When to Use FlutterFlow</h2>
                    <ul>
                        <li><strong>Rapid Prototyping:</strong> When you need to test an idea quickly.</li>
                        <li><strong>MVP Development:</strong> When building an initial version of an app for market testing.</li>
                        <li><strong>Non-Developer Friendly:</strong> When a business owner or designer wants to create an app without coding expertise.</li>
                        <li><strong>Internal Business Apps:</strong> For lightweight applications like dashboards and data entry tools.</li>
                    </ul>
                    <h2>When to Use Flutter</h2>
                    <ul>
                        <li><strong>Full-Scale Applications:</strong> When developing complex apps requiring high performance.</li>
                        <li><strong>Custom UI/UX Needs:</strong> When the app demands a unique and highly interactive design.</li>
                        <li><strong>Large User Base:</strong> For apps that need robust scalability and backend flexibility.</li>
                        <li><strong>Enterprise-Level Apps:</strong> Where security, optimization, and integrations matter.</li>
                    </ul>
                </section>

                <section id="conclusion" className="content-section">
                    <h2>Conclusion</h2>
                    <p>
                        Flutter and FlutterFlow cater to different user needs. If you require full customization, scalability, and performance, Flutter is the better choice. However, if speed, simplicity, and no-code functionality are your priorities, FlutterFlow is a powerful alternative. Understanding the trade-offs between these two will help you select the right tool based on your project requirements.
                    </p>
                    <p>
                        Whether you choose Flutter or FlutterFlow, both provide excellent solutions for cross-platform app development. The key is knowing your needs, budget, and long-term goals before making a decision.
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
                        <li className={activeSection === 'what-is-flutter' ? 'active' : ''}>
                            <a href="#what-is-flutter" onClick={(e) => handleLinkClick(e, 'what-is-flutter')}>What is Flutter?</a>
                        </li>
                        <li className={activeSection === 'what-is-flutterflow' ? 'active' : ''}>
                            <a href="#what-is-flutterflow" onClick={(e) => handleLinkClick(e, 'what-is-flutterflow')}>What is FlutterFlow?</a>
                        </li>
                        <li className={activeSection === 'comparison' ? 'active' : ''}>
                            <a href="#comparison" onClick={(e) => handleLinkClick(e, 'comparison')}>Comparison</a>
                        </li>
                        <li className={activeSection === 'pros-and-cons' ? 'active' : ''}>
                            <a href="#pros-and-cons" onClick={(e) => handleLinkClick(e, 'pros-and-cons')}>Pros and Cons</a>
                        </li>
                        <li className={activeSection === 'limitations' ? 'active' : ''}>
                            <a href="#limitations" onClick={(e) => handleLinkClick(e, 'limitations')}>Limitations</a>
                        </li>
                        <li className={activeSection === 'when-to-use' ? 'active' : ''}>
                            <a href="#when-to-use" onClick={(e) => handleLinkClick(e, 'when-to-use')}>When to Use</a>
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

export default Blog2;

