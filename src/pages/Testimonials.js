import React from "react";
import Slider from "react-slick";
import { testimonials } from "../components/dummydata";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../img/logo/kuda.png";
import logo2 from "../img/logo/aws.jpeg";
import logo3 from "../img/logo/dangote.png";
import logo4 from "../img/logo/google.png";
import logo5 from "../img/logo/linkedin.png";
import logo6 from "../img/logo/paystack.png";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // Company logos data
  const companies = [
    { name: "Apple", logo: logo4 },
    { name: "Amazon", logo: logo3 },
    { name: "Slack", logo: logo2 },
    { name: "Spotify", logo: logo1 },
    { name: "Slack", logo: logo5 }, // special one
    { name: "Adidas", logo: logo6 },
  ];

  return (
    <section className="section flex-col text-center py-2">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Section Heading */}
        <h2 className="h2 mt-16 mb-4">What People Say</h2>

        {/* Testimonials Slider */}
        <div className="mb-4">
          <Slider {...settings}>
            {testimonials.map((val) => (
              <div className="px-6" key={val.id}>
                <i className="text-blue-600 text-4xl mb-4 inline-block">
                  <FaQuoteLeft />
                </i>
                <p className="p italic mb-6">{val.text}</p>
                <div className="mb-2 flex justify-center">
                  <img
                    src={val.image}
                    alt={val.name}
                    className="w-20 h-20 rounded-full object-cover shadow-md"
                  />
                </div>
                <h3 className="h3">{val.name}</h3>
                <span className="text-sm text-gray-500">{val.post}</span>
              </div>
            ))}
          </Slider>
        </div>

        {/* Companies Section */}
        <div className="py-2">
          <h3 className="h3 mt-2">Companies in Contact With</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className={`object-contain hover:grayscale-0 transition-all duration-300 ${
                    company.name === "Spotify" ? "h-36" : "h-12"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
