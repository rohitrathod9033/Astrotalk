import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// Modal Component
const PhoneLoginModal = ({ onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        ref={modalRef}
        className="bg-white rounded-md w-[90%] max-w-md p-6 relative"
      >
        <button
          className="absolute top-2 right-3 text-gray-500 text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold text-center mb-2">
          Continue with Phone
        </h2>
        <p className="text-center text-sm text-gray-600 mb-4">
          You will receive a 4 digit code for verification
        </p>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Enter your phone number</label>
          <div className="flex items-center border rounded-md overflow-hidden">
            <select
              className="bg-gray-100 px-3 py-2 border-r text-gray-700 outline-none"
              defaultValue="IN"
            >
              <option value="IN">🇮🇳 +91</option>
              <option value="US">🇺🇸 +1</option>
              <option value="GB">🇬🇧 +44</option>
              <option value="AU">🇦🇺 +61</option>
              <option value="CA">🇨🇦 +1</option>
              <option value="AE">🇦🇪 +971</option>
              <option value="DE">🇩🇪 +49</option>
              <option value="FR">🇫🇷 +33</option>
              <option value="SG">🇸🇬 +65</option>
              <option value="JP">🇯🇵 +81</option>
            </select>

            <input
              type="tel"
              placeholder="Enter mobile no."
              className="w-full px-3 py-2 outline-none"
            />
          </div>
        </div>

        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded flex items-center justify-center gap-2">
          GET OTP <span className="text-lg">&#8594;</span>
        </button>

        <p className="text-xs text-center mt-4 text-gray-500">
          By Signing up, you agree to our{" "}
          <a href="#" className="underline">Terms of Use</a> and{" "}
          <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleDropdown = (name) => {
    setDropdown(dropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="w-full bg-white shadow-md px-4 lg:px-8 py-3 sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto">
          {/* Row 1 */}
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link to="/">
                <img
                  src="https://astrotalk.com/astrology-blog/wp-content/themes/astrology/images/header/icons/logo.png"
                  alt="logo"
                  className="w-10 h-10"
                />
              </Link>
              <span className="text-3xl font-semibold text-gray-800">
                <Link to="/">Astrotalk</Link>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden xl:flex gap-6 items-center text-base text-gray-800">
              {[
                { to: "/free-kundli", label: "Free Kundli" },
                { to: "/kundli-matching", label: "Kundli Matching" },
                { to: "/compatibility", label: "Compatibility" },
              ].map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-yellow-600 transition">
                  {item.label}
                </Link>
              ))}

              {/* Dropdowns */}
              {[
                {
                  label: "Calculators",
                  links: [
                    { to: "/calculators/love-calculator", label: "Love Calculator" },
                    { to: "/calculators/numerology-calculator", label: "Numerology Calculator" },
                  ],
                },
                {
                  label: "Horoscopes",
                  links: [
                    { to: "/horoscopes/DailyHoroscope", label: "Daily Horoscope" },
                    { to: "/horoscopes/WeeklyHoroscope", label: "Weekly Horoscope" },
                  ],
                },
                {
                  label: "Eng",
                  links: [
                    { href: "#", label: "English" },
                    { href: "#", label: "Hindi" },
                  ],
                },
              ].map((menu, idx) => (
                <div key={idx} className="relative group">
                  <button className="flex items-center hover:text-yellow-600 transition">
                    {menu.label} ▼
                  </button>
                  <div className="absolute top-full left-0 mt-2 bg-white border shadow-md rounded-md z-10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100">
                    {menu.links.map((link, i) =>
                      link.to ? (
                        <Link key={i} to={link.to} className="block px-4 py-2 hover:bg-gray-100 text-sm">
                          {link.label}
                        </Link>
                      ) : (
                        <a key={i} href={link.href} className="block px-4 py-2 hover:bg-gray-100 text-sm">
                          {link.label}
                        </a>
                      )
                    )}
                  </div>
                </div>
              ))}

              <button
                className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full text-base"
                onClick={() => setShowLoginModal(true)}
              >
                <FaUser /> Login
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="xl:hidden">
              <button onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
              </button>
            </div>
          </div>

          {/* Row 2 */}
          <div className="hidden xl:flex justify-end gap-6 mt-2 text-base text-gray-800">
            {[
              { to: "/chat-with-astrologer", label: "Talk to Astrologer" },
              { to: "/book-a-pooja", label: "Book a Pooja" },
              { to: "/astromall", label: "Astromall" },
            ].map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-yellow-600 transition">
                {item.label}
              </Link>
            ))}
            <a
              href="https://astrotalk.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-600 transition"
            >
              Astrotalk Store
            </a>

            {/* Blogs Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:text-yellow-600 transition">Blogs ▼</button>
              <div className="absolute top-full left-0 mt-2 bg-white border shadow-md rounded-md z-10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100">
                <Link to="/blogs/love-relationships" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                  Love & Relationships
                </Link>
                <Link to="/blogs/career-finance" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                  Career & Finance
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="xl:hidden mt-4 flex flex-col gap-3 text-base px-4 text-gray-800">
              {[
                { to: "/free-kundli", label: "Free Kundli" },
                { to: "/kundli-matching", label: "Kundli Matching" },
                { to: "/compatibility", label: "Compatibility" },
              ].map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-yellow-600 transition">
                  {item.label}
                </Link>
              ))}

              {/* Mobile Dropdowns */}
              {[
                {
                  label: "Calculators",
                  name: "calculators",
                  links: [
                    { to: "/calculators/love-calculator", label: "Love Calculator" },
                    { to: "/calculators/numerology-calculator", label: "Numerology Calculator" },
                  ],
                },
                {
                  label: "Horoscopes",
                  name: "horoscopes",
                  links: [
                    { to: "/horoscopes/DailyHoroscope", label: "Daily Horoscope" },
                    { to: "/horoscopes/WeeklyHoroscope", label: "Weekly Horoscope" },
                  ],
                },
                {
                  label: "Eng",
                  name: "eng",
                  links: [
                    { href: "#", label: "English" },
                    { href: "#", label: "Hindi" },
                  ],
                },
                {
                  label: "Blogs",
                  name: "blogs",
                  links: [
                    { to: "/blogs/love-relationships", label: "Love & Relationships" },
                    { to: "/blogs/career-finance", label: "Career & Finance" },
                  ],
                },
              ].map((menu) => (
                <div key={menu.name}>
                  <button
                    onClick={() => toggleDropdown(menu.name)}
                    className="hover:text-yellow-600 transition"
                  >
                    {menu.label} ▼
                  </button>
                  {dropdown === menu.name && (
                    <div className="bg-white border shadow-md rounded-md z-10">
                      {menu.links.map((link, i) =>
                        link.to ? (
                          <Link key={i} to={link.to} className="block px-4 py-2 hover:bg-gray-100 text-sm">
                            {link.label}
                          </Link>
                        ) : (
                          <a key={i} href={link.href} className="block px-4 py-2 hover:bg-gray-100 text-sm">
                            {link.label}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}

              <Link to="/chat-with-astrologer" className="hover:text-yellow-600 transition">
                Talk to Astrologer
              </Link>
              <Link to="/book-a-pooja" className="hover:text-yellow-600 transition">
                Book a Pooja
              </Link>
              <Link to="/astromall" className="hover:text-yellow-600 transition">
                Astromall
              </Link>
              <a
                href="https://astrotalk.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition"
              >
                Astrotalk Store
              </a>
              <button
                onClick={() => setShowLoginModal(true)}
                className="bg-yellow-400 text-black py-2 px-4 rounded-full w-fit mt-2 flex items-center gap-2 text-base"
              >
                <FaUser /> Login
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Phone Login Modal */}
      {showLoginModal && <PhoneLoginModal onClose={() => setShowLoginModal(false)} />}
    </>
  );
};

export default Navbar;
