import React from 'react';
import Navbar from '@/components/_App/Navbar';
import Footer from '@/components/_App/Footer';
import PageBanner from '@/components/Common/PageBanner';

const MusicStreamingCaseStudy = () => {
    return (
        <>
            <div className="case-study-details ptb-100">
                <div className="container">
                    {/* Project Overview Section */}
                    <div className="case-study-overview mb-5">
                        <h2>Project Overview</h2>
                        <p>KarmaLeen Technologies expanded into the entertainment industry by developing a Music Streaming App for a US-based client. This application allows users to listen to rare albums that are not easily available on the internet.</p>
                        <p>Unlike mainstream music platforms, this app specializes in providing exclusive and hard-to-find music collections, making it a unique offering in the streaming industry. The app provides a seamless music experience, high-quality streaming, and an extensive catalog of rare songs.</p>
                    </div>

                    {/* Client Background Section */}
                    <div className="client-background mb-5">
                        <h2>Client Background</h2>
                        <p>Our client, a US-based entertainment company, wanted to build a premium music streaming platform with a focus on rare and hard-to-find albums. Their vision was to create an exclusive music app for audiophiles and collectors who seek unique musical experiences beyond mainstream platforms.</p>
                    </div>

                    {/* Challenge Section */}
                    <div className="challenges mb-5">
                        <h2>Problem Statement</h2>
                        <p>Developing a music player with rich features while ensuring smooth streaming, real-time interactions, and a premium user experience was a major challenge.</p>
                        <div className="challenges-list">
                            <h3>Key Challenges:</h3>
                            <ul>
                                <li>Building a High-Quality Music Player</li>
                                <li>Efficient Streaming Infrastructure</li>
                                <li>Real-Time Interactions</li>
                                <li>Scalability & Performance</li>
                            </ul>
                        </div>
                    </div>

                    {/* Solution Section */}
                    <div className="solution mb-5">
                        <h2>Solution & Development Approach</h2>
                        <div className="key-features mb-4">
                            <h3>Key Features</h3>
                            <div className="features-grid">
                                <div className="feature-item">
                                    <i className="fas fa-music"></i>
                                    <h4>High-Quality Music Player</h4>
                                    <p>Supports MP3, FLAC, WAV, and lossless formats</p>
                                </div>
                                <div className="feature-item">
                                    <i className="fas fa-album-collection"></i>
                                    <h4>Rare Albums Collection</h4>
                                    <p>Exclusive access to rare albums</p>
                                </div>
                                <div className="feature-item">
                                    <i className="fas fa-comments"></i>
                                    <h4>Real-Time Streaming & Chat</h4>
                                    <p>Socket.io integration for live features</p>
                                </div>
                                <div className="feature-item">
                                    <i className="fas fa-download"></i>
                                    <h4>Offline Downloads</h4>
                                    <p>Listen without internet connection</p>
                                </div>
                            </div>
                        </div>

                        {/* Technology Stack */}
                        <div className="tech-stack mb-4">
                            <h3>Technologies Used</h3>
                            <div className="tech-badges">
                                <span className="tech-badge">Flutter</span>
                                <span className="tech-badge">Node.js</span>
                                <span className="tech-badge">Socket.io</span>
                                <span className="tech-badge">Azure</span>
                                <span className="tech-badge">Firebase</span>
                            </div>
                        </div>

                        {/* Development Process */}
                        <div className="development-process mb-4">
                            <h3>Development Process</h3>
                            <div className="process-timeline">
                                {[
                                    "Requirement Analysis & Market Research",
                                    "UI/UX Design",
                                    "Backend Development & Streaming Optimization",
                                    "Real-Time Features Implementation",
                                    "Testing & Optimization",
                                    "Launch & Post-Deployment Support"
                                ].map((step, index) => (
                                    <div key={index} className="timeline-item">
                                        <div className="timeline-number">{index + 1}</div>
                                        <div className="timeline-content">{step}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="results mb-5">
                        <h2>Results & Business Impact</h2>
                        <div className="results-grid">
                            <div className="result-item">
                                <h4>1M+ Downloads</h4>
                                <p>Crossed 1 million downloads within months</p>
                            </div>
                            <div className="result-item">
                                <h4>Subscription Revenue</h4>
                                <p>Successful premium subscription model</p>
                            </div>
                            <div className="result-item">
                                <h4>Community Growth</h4>
                                <p>Created thriving music enthusiast community</p>
                            </div>
                        </div>
                    </div>

                    {/* Client Testimonial */}
                    <div className="client-testimonial">
                        <h2>Client Feedback</h2>
                        <div className="testimonial-box">
                            <i className="fas fa-quote-left"></i>
                            <p>"KarmaLeen Technologies delivered an exceptional app that exceeded our expectations. The real-time streaming and user experience have made our platform stand out in the industry."</p>
                            <span className="client-name">- US-based Entertainment Company</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MusicStreamingCaseStudy;