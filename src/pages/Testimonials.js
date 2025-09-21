import React from "react"
import Slider from "react-slick"
import { testimonials } from "../components/dummydata"
import { FaQuoteLeft } from "react-icons/fa"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import logo1 from '../img/logo/kuda.png'
import logo2 from '../img/logo/aws.jpeg'
import logo3 from '../img/logo/dangote.png'
import logo4 from '../img/logo/google.png'
import logo5 from '../img/logo/linkedin.png'
import logo6 from '../img/logo/paystack.png'

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
  }

  // Company logos data
  const companies = [
    { name: "Apple", logo: logo4 },
    { name: "Amazon", logo: logo3 },
    { name: "Slack", logo: logo2 },
    { name: "Spotify", logo: logo1 },
    { name: "Slack", logo: logo5 }, // special one
    { name: "Adidas", logo: logo6 },
  ]

  return (
    <section className="testimonials hero min-h-screen flex items-center justify-center bg-gray-50 py-6">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Testimonials Slider */}
        <div className="mb-4 mt-4">
          <Slider {...settings}>
            {testimonials.map((val) => (
              <div className="box text-center px-6" key={val.id}>
                <i className="text-blue-500 text-4xl mb-4 inline-block">
                  <FaQuoteLeft />
                </i>
                <p className="text-gray-700 text-lg italic mb-6">{val.text}</p>
                <div className="img mb-4 flex justify-center">
                  <img
                    src={val.image}
                    alt={val.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{val.name}</h3>
                <label className="text-sm text-gray-500">{val.post}</label>
              </div>
            ))}
          </Slider>
        </div>
        
        {/* Companies Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mt-12">
            Companies in Contact with
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className={`object-contain hover:grayscale-0 transition-all duration-300 ${
                    company.name === "Spotify" ? "h-36" : "h-12"
                  }`}
                  style={company.name === "Spotify" ? { fontSize: "2.5rem" } : {}}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
