import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { socialIcons } from "../../assets/dummydata";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Menu", link: "/menu" },
  { name: "About Us", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing! We'll send updates to ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-[#2A211C] text-amber-100 py-12 px-4 sm:px-6 lg:py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/*left column */}
          <div className="space-y-6">
            <h2
              className="text-4xl sm:text-5xl md:text-5xl font-bold font-sacramento text-amber-400  
                    animate-pusle"
            >
              Lotus Bazaar
            </h2>
            <p className="text-amber-200/90 text-sm font-sacramento italic">
              When cullinary artistry meets doorstep convenience. <br />
              Savor handcrafted perfection, delivered with care.
            </p>

            <form onSubmit={handleSubmit} className="relative mt-4 group">
              <div className="flex items-center gap-2 mb-2">
                <FaRegEnvelope className="text-amber-400 animate-pulse" />
                <span className="font-bold text-amber-400">
                  Get Exclusive Offers
                </span>
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-amber-50/5 border-2 border-amber-400/30 focus:outline-none
                            focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 transition-all duration-300 placeholder-amber-200/50 pr-24 "
                  required
                />
                <button
                  type="submit"
                  className="absolute top-1 right-1 bg-gradient-to-br from-amber-300 via-orange-500
                            to-amber-600 text-white px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg
                            hover:shadow-amber-400/30 overflow-hidden transition-all duration-500"
                >
                  <span className="font-bold text-sm tracking-wide transition-transform duration-300 group-hover:-translate-x-1">
                    Join Now
                  </span>
                  <BiChevronRight
                    className="text-xl transition-transform duration-300 group-hover:animate-spin
                                flex-shrink-0"
                  />
                  <span
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-50/30
                                to-transparent group-hover:translate-x-full transition-transform duration-700"
                  />
                </button>
              </div>
            </form>
          </div>
          {/*middle column */}
          <div className="flex justify-between pl-18">
            <div className="space-y-4">
              <h3
                className="text-xl font-semibold mb-4 border-l-4 border-amber-400 pl-3 font-merriweather
                        italic text-amber-300"
              >
                Navigation
              </h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="flex items-center hover:text-amber-400
                                    transition-all group font-lora hover:pl-2"
                    >
                      <BiChevronRight className="mr-2 text-amber-400 group-hover:animate-bounce" />
                      <span className="hover:italic">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/*right column */}
          <div className="flex justify-center pr-15">
            <div className="space-y-4">
              <h3
                className="text-xl font-semibold mb-4 border-l-4 border-amber-400 pl-3
                        font-merriweather italic text-amber-300"
              >
                Social Connect
              </h3>
              <div className="flex space-y-4 gap-3">
                {socialIcons.map(({ icon: Icon, link, color, label }, idx) => (
                  <a
                    target="_blank"
                    href={link}
                    key={idx}
                    className="w-12 h-12 flex items-center justify-center text-2xl bg-amber-400/10 p-3 rounded-full hover:bg-amber-400/20
                                hover:scale-110 transition-all duration-300 relative group"
                    style={{ color }}
                  >
                    <Icon className="hover:scale-125 transition-transform" />
                    <span
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-amber-400
                                    text-black px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 
                                    transition-opacity"
                    >
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*botton section */}
        <div className="border-t border-amber-800 pt-8 mt-8 text-center">
            <p className="text-amber-400 text-lg mb-2 font-playfair">
                &copy; 2025 Lotus Bazaar. All Rights Reserved.

            </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
