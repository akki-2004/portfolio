import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://portfolio-server-tau-roan.vercel.app/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 text-white">
      <h2 className="text-center text-3xl font-bold mb-12">Contact Me</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Get In Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-900 p-3 rounded-full">
                <FaPhone className="text-purple-400" size={20} />
              </div>
              <span className="text-gray-300">+91 6300584860</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-purple-900 p-3 rounded-full">
                <FaEnvelope className="text-purple-400" size={20} />
              </div>
              <span className="text-gray-300">naniakshay361@gmail.com</span>
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://github.com/akki-2004" target="_blank" rel="noopener noreferrer" className="bg-purple-900 p-3 rounded-full hover:opacity-80">
                <FaGithub className="text-purple-400" size={20} />
              </a>
              <span className="text-gray-300">akki-2004</span>
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/akshay" target="_blank" rel="noopener noreferrer" className="bg-purple-900 p-3 rounded-full hover:opacity-80">
                <FaLinkedin className="text-purple-400" size={20} />
              </a>
              <span className="text-gray-300">Akshay</span>
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://twitter.com/satya_akshay" target="_blank" rel="noopener noreferrer" className="bg-purple-900 p-3 rounded-full hover:opacity-80">
                <FaTwitter className="text-purple-400" size={20} />
              </a>
              <span className="text-gray-300">@satya_akshay</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1A1D2F] text-white border border-gray-700 focus:border-purple-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1A1D2F] text-white border border-gray-700 focus:border-purple-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1A1D2F] text-white border border-gray-700 focus:border-purple-500 focus:outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
