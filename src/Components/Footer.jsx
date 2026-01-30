import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="relative h-[85vh] w-full">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/id/514102692/photo/udaipur-city-palace-in-rajasthan-state-of-india.jpg?s=612x612&w=0&k=20&c=bYRDPOuf6nFgghl6VAnCn__22SFyu_atC_fiSCzVNtY=")',
        }}
      ></div>

      {/* Dark Overlay (only affects background) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Original Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-xl">
        <div className="h-96 w-11/12">

          <div className="h-2/3 grid grid-cols-3 gap-6 border-b-2">

            {/* Column 1: Logo + Social */}
            <div>
              <div className="h-16 w-2/3">
                <img
                  src="https://s7ap1.scene7.com/is/content/incredibleindia/incredible-india-logo?qlt=82&ts=1742168999622"
                  alt="Incredible India"
                  className="h-12 w-auto object-contain cursor-pointer"
                />
              </div>
              <div className="mt-7 h-20 text-2xl font-medium">
                Follow us
                <div className="flex gap-4 text-2xl mt-2">
                  <FaFacebookF className="cursor-pointer text-white hover:scale-110 transition" />
                  <FaTwitter className="cursor-pointer text-white hover:scale-110 transition" />
                  <FaInstagram className="cursor-pointer text-white hover:scale-110 transition" />
                  <FaYoutube className="cursor-pointer text-white hover:scale-110 transition" />
                  <FaLinkedinIn className="cursor-pointer text-white hover:scale-110 transition" />
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="font-medium text-2xl">
              Quick links
              <ul className="text-sm font-normal">
                <li className="mt-3">Attractions</li>
                <li className="mt-1">Experiences</li>
                <li className="mt-1">Festivals and Events</li>
                <li className="mt-1">FAQs</li>
                <li className="mt-1">Incredible India Content Hub</li>
                <li className="mt-1">SEPC Medical Tourism Portal</li>
              </ul>
            </div>

            {/* Column 3: QR */}
            <div className="font-medium text-2xl">
              Scan to chat
              <div className="bg-white w-24 mt-2">
                <img
                  className="w-24 h-24"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                  alt="WhatsApp QR Code"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="h-1/3 flex items-center justify-center">
            <div className="w-1/3 h-20 text-sm text-center">
              <div>
                Terms of Use<span className="mx-5">|</span>
                Privacy Policy<span className="mx-5">|</span>
                Contact Us<span className="mx-5">|</span>
                Help
              </div>
              <div className="text-center mt-3">
                © Ministry of Tourism, Government of India.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;



