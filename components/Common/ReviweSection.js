import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import * as Icon from "react-feather";

const reviews = [
    {
        name: "Sanjay Dalal - USA",
        rating: 5,
        content:
            "We hired KarmaLeen for Android app development for Coligso TextIn.Their team quickly learnt about the point of sale platform where app was to be released and helped us develop the app very quickly.They provided all instructions to configure, test(using point of sale emulator) and validate the app.Their dedication to the project and  support stood out.We plan to reach out to them for any Android/ iOS app development work in future.",
    },
    {
        name: "Priyanka Makwan - USA",
        rating: 5,
        content:
            "With KarmaLeen Technology we have outsourced a couple of our projects, especially for Mobile Application development.They are experts in providing a Material Design touch to the application. One thing l likes about their team is they are very honest and deliver everything on time, Other thing I like most is they are very co- operative.They understand requirement might change but they completely understand and co - operate on it.",
    },
    {
        name: "Carlos Cielo - Mexico",
        rating: 5,
        content:
            "Excellent developers, always respectful and very professional. They helped us with a couple of apps for our startup and we are really grateful for that.",
    },
    {
        name: "Rashi Arora - USA",
        rating: 4.5,
        content:
            " With KarmaLeen technology we have 2 years of long working relationship, We have strated our Pet Application from Scrap with his team. Team actively participate in requirment analysis and give thoughtfull queries and its solutions.I am highly recommended KarmaLeen for product development, Especially Mobile and Web Application development.",
    },
    {
        name: "Techy Geeks - India",
        rating: 4,
        content:
            "Their project management demonstrated strong organization and responsiveness.",
    },
    {
        name: "Harshil Malvi - India",
        rating: 5,
        content:
            "I had the pleasure of working with KarmaLeen and I must say, it was an outstanding experience from start to finish. The team is highly professional, knowledgeable, and genuinely dedicated to delivering top-notch results. Highly recommended.",
    },
    {
        name: "John Dow - USA",
        rating: 5,
        content:
            " I strongly recommend KarmaLeen for app building. They did a wonderful job on ours. We are very happy with the workmanship! Their knowledge, direction and ability to bring our ideas to reality was remarkable.",
    },
    {
        name: "Tibor Moinat - Switzerland",
        rating: 4.5,
        content:
            "Experience was great. KarmaLeen's work quality delivered was excellent and clean, which is very difficult to find these days. They met all his deadlines and if They did not know something, they were straightforward about it. If anyone slowed down the project then that was me. I could not keep up with him.",
    },
    {
        name: "Dev Steven - Ukraine",
        rating: 5,
        content:
            "They were easy to cooperate with. Strongly recommend their good attitude and high quality!",
    },
    {
        name: "George Smith - UK",
        rating: 5,
        content: "It was a great experience with KarmaLeen. Highly recommended.",
    },


    {
        name: "Mintiyan - USA",
        rating: 5,
        content:
            "KarmaLeen's team works hard and is timely on each milestone. They learns quickly and asks thoughtful questions when working with us to finish the project. They are willing to learn new skills and go the extra mile to make sure the work gets done on time and to our satisfaction. I would definitely recommend! ",
    },
    {
        name: "Cuddlytails team - USA",
        rating: 5,
        content:
            "It was great working with this professional. Hope to continue our business relationship.",
    },
];

const ReviewSection = () => {
    return (
        // <div className="review-section pt-80">
        //     <div className="container">
        //         <div className="section-title">
        //             <h2 className="mb-2">What Users Are Saying</h2>
        //         </div>

        //         <Swiper
        //             pagination={{ clickable: true }}
        //             autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        //             spaceBetween={20}
        //             breakpoints={{
        //                 768: { slidesPerView: 2 },
        //                 1024: { slidesPerView: 3 },
        //                 640: { slidesPerView: 1 },
        //             }}
        //             modules={[Pagination, Autoplay]}
        //             className="review-slider"
        //         >
        //             {reviews.map((review, index) => (
        //                 <SwiperSlide key={index}>
        //                     <div className="single-review-card">
        //                         <h3>{review.name}</h3>
        //                         <p>{review.content}</p>
        //                         <div className="rating">
        //                             <p className="mb-0">Rating</p>
        //                             <Icon.Star fill="#FFD700" stroke="none" />
        //                             <Icon.Star fill="#FFD700" stroke="none" />
        //                             <Icon.Star fill="#FFD700" stroke="none" />
        //                             <Icon.Star fill="#FFD700" stroke="none" />
        //                             <Icon.Star fill="#FFD700" stroke="none" />
        //                         </div>
        //                     </div>
        //                 </SwiperSlide>
        //             ))}
        //         </Swiper>
        //     </div>
        // </div>
        <div className="review-section pt-80">
            <div className="container">
                <div className="section-title">
                    <h2 className="mb-2">What our client's are saying?</h2>
                </div>

                <Swiper
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="review-slider"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="single-review-card">
                                <h3>{review.name}</h3>
                                <p>{review.content}</p>
                                {/* <p className="mb-0" style={{ textAlign: 'right' }}>Rating</p> */}
                                <div className="rating">
                                    <div>
                                        {[...Array(5)].map((_, i) => {
                                            const starValue = i + 1;
                                            if (review.rating >= starValue) {
                                                return <Icon.Star key={i} fill="#E04826" stroke="none" />;
                                            } else if (review.rating > i && review.rating < starValue) {
                                                // Handle half-star for fractional ratings (e.g., 4.5)
                                                return (
                                                    <div key={i} style={{ position: "relative", display: "inline-block" }}>
                                                        <Icon.Star fill="none" stroke="#E04826" />
                                                        <div style={{ position: "absolute", top: 0, left: 0, width: `${(review.rating - i) * 100}%`, overflow: "hidden" }}>
                                                            <Icon.Star fill="#E04826" stroke="none" />
                                                        </div>
                                                    </div>
                                                );
                                            } else {
                                                return <Icon.Star key={i} fill="none" stroke="#E04826" />;
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ReviewSection;
