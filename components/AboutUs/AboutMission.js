import React from 'react'
import Image from "next/image";

import cercleShape from "/public/images/services-left-image/cercle-shape.png";
import whyChooseUsImg from "/public/images/why-choose-us-image/main-static.png";

const AboutMission = () => {
    return (
        <>
            <div className="why-choose-us ptb-80 pt-0">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-3 col-md-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-team"></i>
                                        </div>
                                        <h3>Our Mission</h3>
                                        <p className='text-start'>
                                            At Karmaleen, our mission is to bridge the gap between talent acquisition and
                                            bench resources, enabling companies to seamlessly integrate skilled professionals
                                            into their teams for sustained success. Since our inception in 2019, we have
                                            been dedicated to delivering customized IT augmentation services that empower
                                            businesses with efficient, scalable workforce solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">

                            <div className="why-choose-us-image">
                                <Image
                                    src={cercleShape}
                                    className="rotateme animate-cercle-img"
                                    alt="image"
                                    width={524}
                                    height={518}
                                />

                                <Image
                                    src={whyChooseUsImg}
                                    alt="image"
                                    width={379}
                                    height={416}
                                />
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-rocket"></i>
                                        </div>
                                        <h3>Our Vision</h3>
                                        <p className='text-start'>
                                            Our vision is to be the trusted partner for organizations seeking
                                            seamless talent solutions, renowned for our expertise in aligning
                                            top-tier professionals with the ever-evolving demands of the digital
                                            landscape. We strive to drive innovation and growth by continuously
                                            refining how businesses build and scale their teams.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMission