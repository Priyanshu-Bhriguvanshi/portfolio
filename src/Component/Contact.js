import React from 'react';
import { Form } from 'react-router-dom';
import Button from './Button';

const Contact = () => {
  const buttonData = {
    name: "Submit",
    path: "#"
  };

  return (
    <div className="bg-gray-100 py-12 px-0">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-800">Feel Free to Contact Us</h1>
        <p className="text-lg text-gray-600 mt-2">We are here to assist you with any inquiries.</p>
      </div>

      {/* Google Map Embed */}
      <div className="mb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4233.351685580652!2d77.48638657607023!3d28.47223309134096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb193588358f%3A0x8274cec5a1321578!2sGL%20Bajaj%20Institute%20of%20Technology%20%26%20Management!5e1!3m2!1sen!2sin!4v1732918630887!5m2!1sen!2sin"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          width="100%"
          title="G.L. Bajaj Institute of Technology"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <Form action='https://formspree.io/f/mqakgwzv' method='POST' className="space-y-6">
          <div>
            <input
              placeholder="Your Name"
              type="text"
              name="Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <input
              placeholder="Subject"
              type="text"
              name="subject"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <textarea
              placeholder="Enter your message"
              rows={5}
              name="message"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <Button {...buttonData} />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
