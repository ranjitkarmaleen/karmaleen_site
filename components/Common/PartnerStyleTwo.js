import React from "react";

const PartnerStyleTwo = () => {

  const technologies = [
    { src: "/images/partner-img/react-logo.svg", alt: "React JS" },
    { src: "/images/partner-img/angular.png", alt: "Angular JS" },
    { src: "/images/partner-img/nodejs-logo.svg", alt: "Node JS" },
    { src: "/images/partner-img/Express.svg", alt: "Express JS" },


    { src: "/images/partner-img/next-js.svg", alt: "Next JS" },
    { src: "/images/partner-img/nest-js-icon.svg", alt: "Nest JS" },
    { src: "/images/partner-img/flutter-img.svg", alt: "Flutter" },
    { src: "/images/partner-img/python-logo.svg", alt: "Python" },
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
    { src: "/images/partner-img/dotnet-logo.svg", alt: ".NET" },
    { src: "/images/partner-img/dot-net-core.svg", alt: ".Net Core" },
    { src: "/images/partner-img/asp-net.png", alt: "ASP .Net" },



    { src: "/images/partner-img/laravel-logo.svg", alt: "Laravel" },
    { src: "/images/partner-img/codeigniter-logo.svg", alt: "CodeIgniter" },
    { src: "/images/partner-img/symfony-logo.svg", alt: "Symfony" },

    { src: "/images/partner-img/yii-php.svg", alt: "Yii" },
    { src: "/images/partner-img/wordpress-icon.svg", alt: "Wordpress" },
    { src: "/images/partner-img/shopify-logo.svg", alt: "Shopify" },
    { src: "/images/partner-img/woocommerce-logo.svg", alt: "WooCommerce" },
    { src: "/images/partner-img/figma-logo.svg", alt: "Figma" },

    { src: "/images/partner-img/Github-log.svg", alt: "GitHub" },
    { src: "/images/partner-img/css-logo.svg", alt: "CSS" },
    { src: "/images/partner-img/html-logo.svg", alt: "HTML" },

    // { src: "/images/partner-img/plaid-api-logo.svg", alt: "paid API" },
    { src: "/images/partner-img/aws-logo.svg", alt: "AWS" },
    { src: "/images/partner-img/adobe-effects.svg", alt: "Adobe AE" },
    { src: "/images/partner-img/adobe-xd.svg", alt: "Adobe XD" },

  ];

  return (
    <>
      <div className="repair-partner-area">
        <div className="container">
          <h2 className="title">Technologies We Use</h2>
          <div className="grid-container">
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

export default PartnerStyleTwo;
