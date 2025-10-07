import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-gray-700 pt-16 pb-8 mt-16 text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-red-900/20 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid gap-12 sm:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-semibold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-16 after:h-[3px] after:bg-gradient-to-r after:from-blue-500 after:to-red-500 after:rounded-full">
            Connect with Me
          </h3>
          <div className="flex justify-center sm:justify-start gap-6 mt-6">
            
            <a
              href="https://www.linkedin.com/company/ieeesbnitdgp/"
              target="_blank"
              rel="noreferrer"
              className="relative text-gray-300 text-3xl transition-all hover:text-white hover:-translate-y-1"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-blue-500 to-red-500 rounded-full scale-0 hover:scale-100 transition-transform duration-300 -z-10 blur-md"></span>
              <FaLinkedin />
            </a>
            
            <a 
              href="https://www.instagram.com/ieeesb_nitdgp/"
              target="_blank"
              rel="noreferrer"
              className="relative text-gray-300 text-3xl transition-all hover:text-white hover:-translate-y-1"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full scale-0 hover:scale-100 transition-transform duration-300 -z-10 blur-md"></span>
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-semibold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-16 after:h-[3px] after:bg-gradient-to-r after:from-blue-500 after:to-red-500 after:rounded-full">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.ieee.org/"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 relative pl-0 hover:pl-4 before:content-['→'] before:absolute before:left-[-20px] before:opacity-0 hover:before:opacity-100 hover:before:left-0"
              >
                IEEE Website
              </a>
            </li>
            <li>
              <a
                href="https://www.ieee-nitdgp.in/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 relative pl-0 hover:pl-4 before:content-['→'] before:absolute before:left-[-20px] before:opacity-0 hover:before:opacity-100 hover:before:left-0"
              >
                IEEE NitDgp Website
              </a>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-semibold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-16 after:h-[3px] after:bg-gradient-to-r after:from-blue-500 after:to-red-500 after:rounded-full">
            About
          </h3>
          <p className="text-gray-400 leading-relaxed max-w-md mx-auto sm:mx-0">
           
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Made By IEEE With ❤️. 
                            All rights reserved.
        </p>
      </div>
    </footer>
  );
}
