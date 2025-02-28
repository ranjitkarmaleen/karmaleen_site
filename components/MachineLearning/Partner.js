import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Partner = () => {

  const technologies = [
    { src: "/images/partner-img/react-logo.svg", alt: "React JS" },
    { src: "/images/partner-img/angular.png", alt: "Angular JS" },
    { src: "/images/partner-img/nodejs-logo.svg", alt: "Node JS" },
    { src: "/images/partner-img/python-logo.svg", alt: "Python" },
    { src: "/images/partner-img/dot-net-core.svg", alt: ".Net Core" },
    { src: "/images/partner-img/laravel-logo.svg", alt: "Laravel" },
    { src: "/images/partner-img/symfony-logo.svg", alt: "Symfony" },
    { src: "/images/partner-img/wordpress-icon.svg", alt: "Wordpress" },
    { src: "/images/partner-img/next-js.svg", alt: "Next JS" },
    { src: "/images/partner-img/nest-js-icon.svg", alt: "Nest JS" },
    { src: "/images/partner-img/flutter-img.svg", alt: "Flutter" },
    { src: "/images/partner-img/ios-logo.svg", alt: "iOS" },
    { src: "/images/partner-img/android-icon.svg", alt: "Android" },
    { src: "/images/partner-img/react-native-1.svg", alt: "React Native" },
    { src: "/images/partner-img/pwa-logo.svg", alt: "PWA" },
    { src: "/images/partner-img/salesforce.svg", alt: "Salesforce" },
    { src: "/images/partner-img/suger-crm.png", alt: "SugerCRM" },
    { src: "/images/partner-img/vtiger-crm.jpeg", alt: "VtigerCRM" },
    { src: "/images/partner-img/suite-crm.webp", alt: "SuiteCRM" },
    { src: "/images/partner-img/hubspot.svg", alt: "Hubspot" },
    { src: "/images/partner-img/vue-logo.svg", alt: "Vue JS" },
    { src: "/images/partner-img/asp-net.png", alt: "ASP .Net" },
    { src: "/images/partner-img/codeigniter-logo.svg", alt: "CodeIgniter" },
    { src: "/images/partner-img/yii-php.svg", alt: "Yii" },
    { src: "/images/partner-img/shopify-logo.svg", alt: "Shopify" },
    { src: "/images/partner-img/woocommerce-logo.svg", alt: "WooCommerce" },
    { src: "/images/partner-img/figma-logo.svg", alt: "Figma" },
    { src: "/images/partner-img/dotnet-logo.svg", alt: ".NET" },

  ];
  return (
    <>
      <div className="ml-partner-area mt-minus-top ptb-80 pb-0 mt-1">
        <div className="container">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className="partner-slides"
          >
            {technologies.map((tech, index) => (
              <SwiperSlide key={index}>
                <div className="single-ml-partner">
                  <a href="#" target="_blank">
                    <img src={tech.src} alt={tech.alt} />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
