import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import * as Icon from "react-feather";
import worksImg1 from "/public/images/works-image/works-image1.jpg";
import worksImg2 from "/public/images/works-image/works-image2.jpg";
import worksImg3 from "/public/images/works-image/works-image3.jpg";
import worksImg4 from "/public/images/works-image/works-image4.jpg";
import worksImg5 from "/public/images/works-image/works-image5.jpg";
import worksImg6 from "/public/images/works-image/works-image6.jpg";
import worksImg7 from "/public/images/works-image/works-image7.jpg";
import worksImg8 from "/public/images/works-image/works-image8.jpg";
import worksImg9 from "/public/images/works-image/works-image9.jpg";

import img1 from "/public/images/karma-portfolio/1.png";
import img2 from "/public/images/karma-portfolio/2.png";
import img3 from "/public/images/karma-portfolio/3.png";
import img4 from "/public/images/karma-portfolio/4.png";
import img5 from "/public/images/karma-portfolio/5.png";
import img6 from "/public/images/karma-portfolio/6.png";
import img7 from "/public/images/karma-portfolio/7.png";
import img8 from "/public/images/karma-portfolio/8.png";
import img9 from "/public/images/karma-portfolio/9.png";
import img10 from "/public/images/karma-portfolio/10.png";
import img11 from "/public/images/karma-portfolio/11.png";
import img12 from "/public/images/karma-portfolio/12.png";
import img13 from "/public/images/karma-portfolio/13.png";
import img14 from "/public/images/karma-portfolio/14.png";
import img15 from "/public/images/karma-portfolio/15.png";
import img16 from "/public/images/karma-portfolio/16.png";
import img17 from "/public/images/karma-portfolio/17.png";
import img18 from "/public/images/karma-portfolio/18.png";
import img19 from "/public/images/karma-portfolio/19.png";
import img20 from "/public/images/karma-portfolio/20.png";
import img21 from "/public/images/karma-portfolio/21.png";
import img22 from "/public/images/karma-portfolio/22.png";
import img23 from "/public/images/karma-portfolio/23.png";
import img24 from "/public/images/karma-portfolio/24.png";
import img25 from "/public/images/karma-portfolio/25.png";
import img26 from "/public/images/karma-portfolio/26.png";
import img27 from "/public/images/karma-portfolio/27.png";
import img28 from "/public/images/karma-portfolio/28.png";
import img29 from "/public/images/karma-portfolio/29.png";
import img30 from "/public/images/karma-portfolio/30.png";
import img31 from "/public/images/karma-portfolio/31.png";
import img32 from "/public/images/karma-portfolio/32.png";
import img33 from "/public/images/karma-portfolio/33.png";
import img34 from "/public/images/karma-portfolio/34.png";
import img35 from "/public/images/karma-portfolio/35.png";
import img36 from "/public/images/karma-portfolio/36.png";


const PortfolioList = () => {
    // const project = [
    //     {
    //         "name": "CRM for Cattle Management",
    //         "genericName": "CRM for Cattle Management",
    //         "category": "Mobile App, CRM",
    //         "technologies": ["React Native", "Android", "iOS", "Laravel", "AWS", "Nginx", "MySQL", "Visual Studio", "Android Studio", "Xcode"],
    //         "image": worksImg1
    //     },
    //     {
    //         "name": "Stainless Bazaar CRM",
    //         "category": "CRM",
    //         "technologies": ["React JS", "Node JS", "MySQL", "AWS", "Nginx", "Kubernetes", "Docker", "Visual Studio Code"],
    //         "image": worksImg2
    //     },
    //     {
    //         "name": "Lead Manager CRM",
    //         "category": "Mobile App, CRM",
    //         "technologies": ["Angular JS", "Node JS", "PostgreSQL", "AWS", "Android"],
    //         "image": worksImg3
    //     },
    //     {
    //         "name": "Fitzoh Start Up App",
    //         "category": "Healthcare, Mobile App",
    //         "technologies": ["Android", "iOS", "React Native", "Laravel", "MySQL"],
    //         "image": worksImg4
    //     },
    //     {
    //         "name": "Agent AI",
    //         "category": "AI, CRM, Mobile App",
    //         "technologies": ["Python", "FastAPI", "Node JS", "React JS", "Flutter", "AWS", "Nginx", "MySQL", "NoSQL DB"],
    //         "image": worksImg5
    //     },
    //     {
    //         "name": "Fashion Potluck",
    //         "category": "Social Media Platform",
    //         "technologies": ["Yii", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    //         "image": worksImg6
    //     },
    //     {
    //         "name": "Payroll App BS",
    //         "category": "Mobile App",
    //         "technologies": ["Flutter"],
    //         "image": worksImg7
    //     },
    //     {
    //         "name": "PDF Drawer",
    //         "category": "Manufacturing",
    //         "technologies": ["Flutter", "Laravel", "MySQL", "AWS", "Git"],
    //         "image": worksImg8
    //     },
    //     {
    //         "name": "IoT Project",
    //         "category": "Home Automation & Smart Living",
    //         "technologies": ["Flutter", "Node JS", "MySQL", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Happy Music",
    //         "category": "Entertainment",
    //         "technologies": ["Flutter", "Node JS", "PostgreSQL", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Plant App",
    //         "category": "E-commerce",
    //         "technologies": ["Flutter", "Node JS", "PostgreSQL", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Movie Swiper",
    //         "category": "Entertainment",
    //         "technologies": ["React Native", "Laravel", "MySQL", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Click Cart Commerce",
    //         "category": "E-commerce",
    //         "technologies": ["Angular", ".NET Core", "RDBMS", "Azure"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "My Shop",
    //         "category": "E-commerce",
    //         "technologies": ["ASP.NET", "MySQL", "Angular", "Azure"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Cuddlytails",
    //         "category": "Hospitality & Animal Boarding",
    //         "technologies": ["Symfony", "MySQL", "Android", "iOS", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Orissa",
    //         "category": "Energy and Utility",
    //         "technologies": ["ASP.NET", "PostgreSQL", "Angular", "Azure"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Doctor at Doorstep",
    //         "category": "Healthcare",
    //         "technologies": ["React JS", "Node JS", "MySQL"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Appronic Podwatch",
    //         "category": "Manufacturing",
    //         "technologies": ["Angular", "Next JS", "MySQL", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Blink It",
    //         "category": "General App",
    //         "technologies": ["React JS", "Node JS", "MySQL", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Impact Guru",
    //         "category": "Charity",
    //         "technologies": ["Angular", "Laravel", "MySQL", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Danube",
    //         "category": "E-commerce",
    //         "technologies": ["Android", "iOS", ".NET", "MySQL", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Bama",
    //         "category": "Automotive",
    //         "technologies": ["Android", "iOS", ".NET", "MySQL"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Linkservicepro",
    //         "category": "Real Estate",
    //         "technologies": ["WordPress", "PHP", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Property Organizer",
    //         "category": "Real Estate",
    //         "technologies": ["Angular", "Node JS", "MySQL", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Elementcare",
    //         "category": "Healthcare",
    //         "technologies": ["VTigerCRM", "MySQL", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Besst In",
    //         "category": "Education",
    //         "technologies": ["React JS", "Node JS", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Skuvent",
    //         "category": "Healthcare",
    //         "technologies": ["React", "Node JS", "MySQL"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Wasteconnection",
    //         "category": "Waste Management",
    //         "technologies": ["Vue JS", "Node JS", "MySQL", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Nantucket Rentals",
    //         "category": "Real Estate",
    //         "technologies": ["React JS", "Node JS", "MySQL", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Congdon and Coleman",
    //         "category": "Real Estate",
    //         "technologies": ["React JS", "Node JS", "MySQL", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Clevertap",
    //         "category": "Custom CRM",
    //         "technologies": ["WordPress", "React", "Node", "MySQL", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Blancoraclothing",
    //         "category": "E-commerce",
    //         "technologies": ["WooCommerce", "PHP", "MySQL", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "India Someday",
    //         "category": "Travel",
    //         "technologies": ["WordPress", "PHP", "MySQL", "AWS"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Resolved",
    //         "category": "Education",
    //         "technologies": ["Flutter Web", "MySQL", "Firebase"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Bluddle",
    //         "category": "Dating",
    //         "technologies": ["Android", "iOS", "Node", "Firebase"],
    //         "image": worksImg9
    //     },
    //     {
    //         "name": "Struqtur",
    //         "category": "Construction",
    //         "technologies": ["Android", "iOS", "Node", "MySQL", "Firebase"],
    //         "image": worksImg9
    //     }
    // ];
    const project = [
        {
            "name": "CRM for Cattle Management",
            "genericName": "Angus CRM and Mobile App",
            "category": "Mobile App, CRM",
            "technologies": ["React Native", "Android", "iOS", "Laravel", "AWS", "Nginx", "MySQL", "Visual Studio", "Android Studio", "Xcode"],
            "image": img1
        },
        {
            "name": "Stainless Bazaar CRM",
            "genericName": "CRM for Manufacturing Industries",
            "category": "CRM",
            "technologies": ["React JS", "Node JS", "MySQL", "AWS", "Nginx", "Kubernetes", "Docker", "Visual Studio Code"],
            "image": img2
        },
        {
            "name": "Lead Manager CRM",
            "genericName": "Inquiry Management CRM",
            "category": "Mobile App, CRM",
            "technologies": ["Angular JS", "Node JS", "PostgreSQL", "AWS", "Android"],
            "image": img3
        },
        {
            "name": "Fitzoh Start Up App",
            "genericName": "Healthcare Application",
            "category": "Healthcare, Mobile App",
            "technologies": ["Android", "iOS", "React Native", "Laravel", "MySQL"],
            "image": img4
        },
        {
            "name": "Agent AI",
            "genericName": "Agent Management Portal and Mobile App",
            "category": "AI, CRM, Mobile App",
            "technologies": ["Python", "FastAPI", "Node JS", "React JS", "Flutter", "AWS", "Nginx", "MySQL", "NoSQL DB"],
            "image": img5
        },
        {
            "name": "Fashion Potluck",
            "genericName": "Fashion Portal",
            "category": "Social Media Platform",
            "technologies": ["Yii", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
            "image": img6
        },
        {
            "name": "Payroll App BS",
            "genericName": "Spiritual Application",
            "category": "Mobile App",
            "technologies": ["Flutter"],
            "image": img7
        },
        {
            "name": "PDF Drawer",
            "genericName": "Company Document Management",
            "category": "Manufacturing",
            "technologies": ["Flutter", "Laravel", "MySQL", "AWS", "Git"],
            "image": img8
        },
        {
            "name": "IoT Project",
            "genericName": "Smart Home Management",
            "category": "Home Automation & Smart Living",
            "technologies": ["Flutter", "Node JS", "MySQL", "AWS"],
            "image": img9
        },
        {
            "name": "Happy Music",
            "genericName": "Music and Entertainment",
            "category": "Entertainment",
            "technologies": ["Flutter", "Node JS", "PostgreSQL", "AWS"],
            "image": img10
        },
        {
            "name": "Plant App",
            "genericName": "Plant App",
            "category": "E-commerce",
            "technologies": ["Flutter", "Node JS", "PostgreSQL", "AWS"],
            "image": img11
        },
        {
            "name": "Movie Swiper",
            "genericName": "Movie Swiper",
            "category": "Entertainment",
            "technologies": ["React Native", "Laravel", "MySQL", "AWS"],
            "image": img12
        },
        {
            "name": "Click Cart Commerce",
            "genericName": "Click Cart Commerce",
            "category": "E-commerce",
            "technologies": ["Angular", ".NET Core", "RDBMS", "Azure"],
            "image": img13
        },
        {
            "name": "My Shop",
            "genericName": "My Insta Shop",
            "category": "E-commerce",
            "technologies": ["ASP.NET", "MySQL", "Angular", "Azure"],
            "image": img14
        },
        {
            "name": "Cuddlytails",
            "genericName": "Dog Services",
            "category": "Hospitality & Animal Boarding",
            "technologies": ["Symfony", "MySQL", "Android", "iOS", "AWS"],
            "image": img15
        },
        {
            "name": "Orissa",
            "genericName": "Smart City Project",
            "category": "Energy and Utility",
            "technologies": ["ASP.NET", "PostgreSQL", "Angular", "Azure"],
            "image": img16
        },
        {
            "name": "Doctor at Doorstep",
            "genericName": "Doctor at Doorstep",
            "category": "Healthcare",
            "technologies": ["React JS", "Node JS", "MySQL"],
            "image": img17
        },
        {
            "name": "Appronic Podwatch",
            "genericName": "Production Watch",
            "category": "Manufacturing",
            "technologies": ["Angular", "Next JS", "MySQL", "AWS"],
            "image": img18
        },
        {
            "name": "Blink It",
            "genericName": "Dynamic Form Generation",
            "category": "General App",
            "technologies": ["React JS", "Node JS", "MySQL", "AWS"],
            "image": img19
        },
        {
            "name": "Impact Guru",
            "genericName": "Charity Project",
            "category": "Charity",
            "technologies": ["Angular", "Laravel", "MySQL", "AWS"],
            "image": img20
        },
        {
            "name": "Danube",
            "genericName": "Grocery Store App",
            "category": "E-commerce",
            "technologies": ["Android", "iOS", ".NET", "MySQL", "AWS"],
            "image": img21
        },
        {
            "name": "Bama",
            "genericName": "Online Car Marketplace",
            "category": "Automotive",
            "technologies": ["Android", "iOS", ".NET", "MySQL"],
            "image": img22
        },
        {
            "name": "Linkservicepro",
            "genericName": "Facility Management",
            "category": "Real Estate",
            "technologies": ["WordPress", "PHP", "AWS"],
            "image": img23
        },
        {
            "name": "Property Organizer",
            "genericName": "Property Organizer",
            "category": "Real Estate",
            "technologies": ["Angular", "Node JS", "MySQL", "AWS"],
            "image": img24
        },
        {
            "name": "Elementcare",
            "genericName": "Hospital Management CRM",
            "category": "Healthcare",
            "technologies": ["VTigerCRM", "MySQL", "AWS"],
            "image": img25
        },
        {
            "name": "Besst In",
            "genericName": "Online Learning System",
            "category": "Education",
            "technologies": ["React JS", "Node JS", "AWS"],
            "image": img26
        },
        {
            "name": "Skuvent",
            "genericName": "Health Equipment Management",
            "category": "Healthcare",
            "technologies": ["React", "Node JS", "MySQL"],
            "image": img27
        },
        {
            "name": "Wasteconnection",
            "genericName": "Waste Connection",
            "category": "Waste Management",
            "technologies": ["Vue JS", "Node JS", "MySQL", "AWS"],
            "image": img28
        },
        {
            "name": "Nantucket Rentals",
            "genericName": "Rental App",
            "category": "Real Estate",
            "technologies": ["React JS", "Node JS", "MySQL", "AWS"],
            "image": img29
        },
        {
            "name": "Congdon and Coleman",
            "genericName": "Real Estate Listing",
            "category": "Real Estate",
            "technologies": ["React JS", "Node JS", "MySQL", "AWS"],
            "image": img30
        },
        {
            "name": "Clevertap",
            "genericName": "Clever CRM",
            "category": "Custom CRM",
            "technologies": ["WordPress", "React", "Node", "MySQL", "AWS"],
            "image": img31
        },
        {
            "name": "Blancoraclothing",
            "genericName": "Online Clothing Store",
            "category": "E-commerce",
            "technologies": ["WooCommerce", "PHP", "MySQL", "AWS"],
            "image": img32
        },
        {
            "name": "India Someday",
            "genericName": "Traveling Helper",
            "category": "Travel",
            "technologies": ["WordPress", "PHP", "MySQL", "AWS"],
            "image": img33
        },
        {
            "name": "Resolved",
            "genericName": "University Fees Management",
            "category": "Education",
            "technologies": ["Flutter Web", "MySQL", "Firebase"],
            "image": img34
        },
        {
            "name": "Bluddle",
            "genericName": "Asian Dating App",
            "category": "Dating",
            "technologies": ["Android", "iOS", "Node", "Firebase"],
            "image": img35
        },
        {
            "name": "Struqtur",
            "genericName": "Construction Site Management",
            "category": "Construction",
            "technologies": ["Android", "iOS", "Node", "MySQL", "Firebase"],
            "image": img36
        }
    ];
    return (
        <div className= "blog-area ptb-80" >
        <div className="container" >
            <div className="row justify-content-center" >
            {
                project.map((project, index) => (
                    <div className= "col-lg-4 col-md-6 d-flex" key = { index } >
                    <div className="portfolio-item" >
                <Image src={ project.image } alt = { project.name } width = { 400} height = { 300} className = "portfolio-image" />
                <div className="portfolio-content" >
                <h3 className="portfolio-title" > { project.genericName } </h3>
                < p className = "portfolio-category" > { project.category } </p>
                < div className = "portfolio-technologies" >
                {
                    project.technologies.map((tech, idx) => (
                        <span key= { idx } className = "technology-badge" > { tech } </span>
                    ))
            }
                </div>
                </div>
                </div>
                </div>))
}
</div>
    </div>
    </div>

    )
}

export default PortfolioList