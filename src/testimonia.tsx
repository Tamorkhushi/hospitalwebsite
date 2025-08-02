// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "SmartCare provided exceptional emergency care. The staff treated me with compassion and professionalism during my toughest time.",
    role: "Heart Surgery Patient"
  },
  {
    name: "Jane Smith",
    feedback:
      "From booking to discharge, everything was seamless. The doctors were friendly and kept me informed at every step.",
    role: "Maternity Care"
  },
  {
    name: "Amit Kumar",
    feedback:
      "International patient services were beyond expectations. Truly world-class facilities and expert team support.",
    role: "International Patient"
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      {/* Background decorative shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Voices of <span className="text-blue-600">Trust</span>
        </h2>
        <p className="text-gray-600 text-lg mb-14 max-w-2xl mx-auto">
          Hear from our patients who experienced exceptional care and healing at
          SmartCare Hospital.
        </p>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i}>
              <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg px-8 py-12 md:px-16 md:py-14 border border-white/40 relative">
                {/* Quote icon */}
                <FaQuoteLeft className="absolute top-6 left-6 text-blue-500 text-4xl opacity-30" />

                {/* Feedback */}
                <p className="text-xl text-gray-700 leading-relaxed italic mb-10">
                  “{t.feedback}”
                </p>

                {/* Avatar & Info */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-md">
                    {t.name.charAt(0)}
                  </div>
                  <h4 className="mt-4 font-semibold text-gray-900 text-lg">
                    {t.name}
                  </h4>
                  <span className="text-sm text-gray-500">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom slick dots */}
      <style>
        {`
          .slick-dots li button:before {
            font-size: 10px;
            color: #60a5fa;
          }
          .slick-dots li.slick-active button:before {
            color: #0ea5e9;
            font-size: 14px;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
