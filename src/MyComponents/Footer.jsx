import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-base text-gray-800 w-full"> {/* Base font size increased here */}
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">About Astrotalk</h2> {/* Increased font size */}
        <p className="mb-6 max-w-3xl text-lg"> {/* Increased font size */}
          Astrotalk is the best astrology website for online Astrology predictions. Talk to Astrologer on call and get answers to all your worries by seeing the future life through Astrology Kundli Predictions from the best Astrologers from India.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-xl">Horoscope</h3> {/* Increased font size and margin */}
            <ul className="space-y-2"> {/* Increased space between list items */}
              <li><a href="/horoscope/todays-horoscope" className="hover:underline">Today's Horoscope</a></li>
              <li><a href="/todays-love-horoscope" className="hover:underline">Today's Love Horoscope</a></li>
              <li><a href="/horoscope/yesterday-horoscope" className="hover:underline">Yesterday's Horoscope</a></li>
              <li><a href="/horoscope/tomorrow-horoscope" className="hover:underline">Tomorrow's Horoscope</a></li>
              <li><a href="/horoscope/weekly-horoscope" className="hover:underline">Weekly Horoscope</a></li>
              <li><a href="/horoscope/monthly-horoscope" className="hover:underline">Monthly Horoscope</a></li>
              <li><a href="/horoscope/yearly-horoscope" className="hover:underline">Yearly Horoscope</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-xl">Important Links</h3> {/* Increased font size and margin */}
            <ul className="space-y-2"> {/* Increased space between list items */}
              <li><a href="/shop" className="hover:underline">Astromall</a></li>
              <li><a href="/live" className="hover:underline">Live Astrologers</a></li>
              <li><a href="/freekundli" className="hover:underline">Free Kundli</a></li>
              <li><a href="/matchmaking" className="hover:underline">Kundli Matching</a></li>
              <li><a href="/chat-with-astrologer" className="hover:underline">Chat with Astrologer</a></li>
              <li><a href="/talk-to-astrologer" className="hover:underline">Talk to Astrologer</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-xl">Corporate Info</h3> {/* Increased font size and margin */}
            <ul className="space-y-2"> {/* Increased space between list items */}
              <li><a href="/about-us" className="hover:underline">About Us</a></li>
              <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
              <li><a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="/privacy-policies" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/refund-and-cancellation-policy" className="hover:underline">Refund & Cancellation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-xl">Connect</h3> {/* Increased font size and margin */}
            <div className="flex gap-5 text-2xl mb-4"> {/* Increased icon size and gap, added bottom margin */}
              <a href="https://www.facebook.com/astrotalk" target="_blank" rel="noreferrer" className="hover:text-blue-700 transition-colors duration-200"><FaFacebookF /></a>
              <a href="https://www.instagram.com/astrotalk/" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors duration-200"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/astrotalk-online-astrology-predictions/" target="_blank" rel="noreferrer" className="hover:text-blue-800 transition-colors duration-200"><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/channel/UCaISlEuDzj9t31G_bhrbTEQ" target="_blank" rel="noreferrer" className="hover:text-red-600 transition-colors duration-200"><FaYoutube /></a>
            </div>

            <div className="flex flex-col space-y-3 my-2"> {/* Increased space between app links */}
              <a href="https://play.google.com/store/apps/details?id=com.astrotalk" target="_blank" rel="noreferrer">
                <img src="https://aws.astrotalk.com/assets/images/android.webp" alt="Android App" className="h-12" /> {/* Increased image height */}
              </a>
              <a href="https://itunes.apple.com/in/app/theastrotalk/id1208433822?mt=8" target="_blank" rel="noreferrer">
                <img src="https://aws.astrotalk.com/assets/images/ios.webp" alt="iOS App" className="h-12" /> {/* Increased image height */}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-4 text-center text-base"> {/* Increased padding and font size */}
        <p>Copyright © 2025 Astrotalk (Powered by MASKYETI SOLUTIONS PRIVATE LIMITED). All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;