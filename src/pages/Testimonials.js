import React from "react"
import Slider from "react-slick"
import { testimonials } from "../components/dummydata"
import { FaQuoteLeft } from "react-icons/fa"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

  // Company logos data (you'll need to add these images to your project)
  const companies = [
    { name: "Apple", logo: "/logos/apple-logo.png" },
    { name: "Amazon", logo: "/logos/amazon-logo.png" },
    { name: "New Balance", logo: "/logos/newbalance-logo.png" },
    { name: "Skype", logo: "/logos/skype-logo.png" },
    { name: "Spotify", logo: "/logos/spotify-logo.png" },
    { name: "Adidas", logo: "/logos/adidas-logo.png" },
  ]

  return (
    <section className="testimonials hero min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Testimonials Slider */}
        <div className="mb-16">
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
                    className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
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
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            I've Worked With Top Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
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