import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiMapPin, FiPhone, FiGlobe, FiMail } from "react-icons/fi";
import { contactFormFields } from "../../assets/dummydata";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    dish: "",
    query: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}
Dish: ${formData.dish}
Query: ${formData.query}
  `;

    const encodedMessage = encodeURIComponent(message);

    // WhatsApp number without '+' or spaces, just digits
    const whatsappNumber = "919953088440"; // Replace with actual number

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    toast.success("OPENING WHATSAPP...", {
      style: {
        border: "2px solid #f59e0b",
        padding: "16px",
        color: "#fff",
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(10px)",
      },
      iconTheme: { primary: "#f59e0b", secondary: "#fff" },
    });

    window.open(whatsappUrl, "_blank");

    setFormData({name : '', phone: '', email: '', address:'', dish:'', query:''})
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-900 via-amber-900 to-gray-900 animate-gradient-x py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-[Poppins] relative overflow-hidden">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 4000 }}
      />

      <div className="absolute top-20 left-10 w-24 h-24 bg-orange-500/20 rounded-full animate-float" />
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-green-500/20 rounded-full animate-float-delayed" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 animate-fade-in-down">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-300">
            Connect With Us
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Section */}
          <div className="space-y-6">
            {/* Headquarters */}
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-[1.02] animate-card-float border-4 border-amber-500 hover:border-amber-400 group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="flex items-center mb-4 relative z-10">
                <div className="p-3 bg-gradient-to-br from-amber-500/30 to-amber-700/30 rounded-xl">
                  <FiMapPin className="text-amber-400 text-2xl animate-pulse" />
                </div>
                <h3 className="ml-4 text-amber-100 text-xl font-semibold">
                  Our Headquarters
                </h3>
              </div>
              <div className="pl-12 relative z-10">
                <p className="text-amber-100 font-light text-lg">Delhi</p>
              </div>
            </div>

            {/* Phone */}
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-[1.02] animate-card-float border-4 border-green-500 hover:border-green-400 group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="flex items-center mb-4 relative z-10">
                <div className="p-3 bg-gradient-to-br from-green-500/30 to-green-700/30 rounded-xl">
                  <FiPhone className="text-green-400 text-2xl animate-ping" />
                </div>
                <h3 className="ml-4 text-amber-100 text-xl font-semibold">
                  Contact Number
                </h3>
              </div>
              <div className="pl-12 relative space-y-2 z-10">
                <p className="text-amber-100 font-light text-lg flex items-center gap-2">
                  <FiGlobe className="text-green-400 text-xl" /> +91 8287535121
                </p>
                <p className="text-amber-100 font-light text-lg flex items-center gap-2">
                  <FiGlobe className="text-green-400 text-xl" /> +91 9953088440
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-[1.02] animate-card-float border-4 border-orange-500 hover:border-orange-400 group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="flex items-center mb-4 relative z-10">
                <div className="p-3 bg-gradient-to-br from-orange-500/30 to-orange-700/30 rounded-xl">
                  <FiMail className="text-orange-400 text-2xl animate-ping" />
                </div>
                <h3 className="ml-4 text-amber-100 text-xl font-semibold">
                  Email Address
                </h3>
              </div>
              <div className="pl-12 relative z-10">
                <p className="text-amber-100 font-light text-lg">
                  swayamlaurelhigh@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl animate-slide-in-right border-2 border-amber-500/30 hover:border-amber-500/50 transform-border duration-300">
            <div className="absolute top-4 -right-4 w-12 h-12 bg-amber-500/30 rounded-full animate-ping-slow" />
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {contactFormFields.map(
                ({ label, name, type, placeholder, pattern, Icon }) => (
                  <div key={name}>
                    <label className="block text-amber-100 text-sm font-medium mb-2">
                      {label}
                    </label>
                    <div className="flex items-center bg-white/10 rounded-lg px-4 py-2 border border-white/20 focus-within:border-amber-500">
                      {Icon && <Icon className="text-amber-400 text-lg mr-2" />}
                      <input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        pattern={pattern}
                        value={formData[name]}
                        onChange={(e) =>
                          setFormData({ ...formData, [name]: e.target.value })
                        }
                        className="bg-transparent w-full text-white placeholder-amber-200 outline-none"
                        required
                      />
                    </div>
                  </div>
                )
              )}
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Submit Query
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
