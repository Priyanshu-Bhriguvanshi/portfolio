import React from 'react';
import { Form } from 'react-router-dom';
import Button from './Button';
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Me Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold mb-2">Priyanshu Rajput</h2>
          <p className="text-sm text-gray-400">Description about me. Passionate about technology and coding.</p>
        </div>

        {/* Subscribe Section */}
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold mb-2">Subscribe to Get Important Updates</p>
          <Form className="flex flex-col sm:flex-col items-start gap-2 ">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-lg border border-gray-500 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:w-auto"
            />
            <Button name="Subscribe" path="#" />
          </Form>
        </div>

        {/* Social Media Links */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex justify-center sm:justify-start gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400">
              <FaFacebook size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400">
              <FaInstagram size={30} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-semibold mb-2">Call Us</h2>
          <p className="text-sm text-gray-400">+91 8787215367</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Priyanshu Rajput. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
