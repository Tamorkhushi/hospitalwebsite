import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }
    setForm({ name: "", email: "", message: "" });
    navigate("/thank-you"); // Redirect after submit
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-teal-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-lg mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-3">
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Have questions? Our team is here to help you 24/7.
        </p>

        <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-3xl p-8 border border-white/40">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaUser className="absolute top-4 left-3 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 pl-10 p-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 pl-10 p-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div className="relative">
              <FaCommentDots className="absolute top-4 left-3 text-gray-400" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 pl-10 p-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
