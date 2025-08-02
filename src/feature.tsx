import { FaAmbulance, FaUserMd, FaGlobe } from "react-icons/fa";

const features = [
  {
    icon: <FaAmbulance className="text-4xl text-white" />,
    title: "24x7 Emergency",
    desc: "Round-the-clock emergency services to handle any critical situation quickly and efficiently."
  },
  {
    icon: <FaUserMd className="text-4xl text-white" />,
    title: "Expert Doctors",
    desc: "Our highly qualified specialists ensure personalized, world-class healthcare for every patient."
  },
  {
    icon: <FaGlobe className="text-4xl text-white" />,
    title: "International Patients",
    desc: "Comprehensive facilities and multilingual support for patients from across the globe."
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
          Why Choose <span className="text-blue-600">SmartCare?</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Providing cutting-edge technology, compassionate care, and global standards in every service we offer.
        </p>
      </div>

      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-2 border border-gray-100"
          >
            {/* Icon Wrapper */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition">
              {f.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              {f.desc}
            </p>

            {/* Decorative Line */}
            <div className="mt-6 h-1 w-16 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
