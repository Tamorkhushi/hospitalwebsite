const Hero = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center text-white bg-gradient-to-br from-blue-700 via-teal-600 to-emerald-500"
    >
      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Your <span className="text-yellow-300">Health</span>, Our Priority
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-100 leading-relaxed">
          At <span className="font-semibold text-yellow-300">SmartCare</span>, we provide 24/7 emergency care, expert doctors,
          and modern medical facilities for every patient.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
        >
          Book an Appointment
        </a>
      </div>
    </section>
  );
};

export default Hero;
